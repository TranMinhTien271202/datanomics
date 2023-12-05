<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";
import { Map, View, Feature, Collection } from "ol";
import { fromLonLat, toLonLat } from "ol/proj";
import { Style, Icon } from "ol/style";
import { Point } from "ol/geom";
import { Vector as LayerVector, Tile } from "ol/layer";
import { Vector as SourceVector, OSM } from "ol/source";
import { Translate } from "ol/interaction";
import { defaults } from "ol/control";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.location.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};

const mapRef = ref();

const DEFAULT_CORS = [105.8342, 21.0278];
const DEFAULT_ZOOM = 8;
const CONVERTED_DEFAULT_CORS = fromLonLat(DEFAULT_CORS);

const marker = new Point(CONVERTED_DEFAULT_CORS);
let map;

const updateMarker = (lon, lat) => {
  if (!map || !lon || !lat) return;

  const newCors = fromLonLat([lon, lat]);
  marker.setCoordinates(newCors);
  map.getView().setCenter(newCors);
};

onMounted(() => {
  const styleMarker = new Style({
    image: new Icon({
      scale: 0.7,
      anchor: [0.5, 1],
      src: "/images/qrcode-create/generate/form/marker.png",
    }),
  });

  const featureMarker = new Feature(marker);

  const vector = new LayerVector({
    source: new SourceVector({ features: [featureMarker] }),
    style: [styleMarker],
  });

  map = new Map({
    target: mapRef.value,
    controls: defaults({ attributionOptions: { collapsible: true } }),
    layers: [new Tile({ source: new OSM() }), vector],
    view: new View({ center: CONVERTED_DEFAULT_CORS, zoom: 8 }),
  });

  const translate = new Translate({
    features: new Collection([featureMarker]),
  });
  map.addInteraction(translate);

  map.on("click", (evt) => {
    marker.setCoordinates(evt.coordinate);
    [props.formState[FIELDS.lng.value], props.formState[FIELDS.lat.value]] = toLonLat(evt.coordinate);
    onSubmit();
  });

  map.on("pointermove", (evt) => {
    if (evt.dragging) return;
    const hit = map.hasFeatureAtPixel(map.getEventPixel(evt.originalEvent));
    map.getTargetElement().style.cursor = hit ? "pointer" : "";
  });

  translate.on("translateend", (evt) => {
    [props.formState[FIELDS.lng.value], props.formState[FIELDS.lat.value]] = toLonLat(evt.coordinate);
    onSubmit();
  });
});

const isLoadingMap = ref(false);
const searchLocation = ref("");

let abortController;
const onChangeSearchLocation = async (evt) => {
  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  isLoadingMap.value = true;

  try {
    if (!map) throw new Error();
    const value = evt.target.value;
    if (!value) throw new Error();

    const res = await $fetch("https://nominatim.openstreetmap.org/search", {
      method: "GET",
      query: { q: value, format: "json", limit: 1 },
      signal,
    });
    const data = res[0];
    if (!data) throw new Error();
    props.formState[FIELDS.lat.value] = data.lat;
    props.formState[FIELDS.lng.value] = data.lon;
    updateMarker(data.lon, data.lat);
    onSubmit();
  } catch (error) {
    if (signal.aborted && abortController?.signal?.aborted === false) {
      return;
    }
  }
  isLoadingMap.value = false;
};

const onChangeCors = () => {
  const lon = props.formState[FIELDS.lng.value];
  const lat = props.formState[FIELDS.lat.value];
  if (!map || !lon || !lat) return (isLoadingMap.value = false);
  updateMarker(lon, lat);
  onSubmit();
};
</script>

<template>
  <div>
    <div>
      <a-form-item label="Tìm kiếm">
        <a-input
          class="rounded-xl"
          v-model:value="searchLocation"
          placeholder="Tìm kiếm"
          @change="onChangeSearchLocation"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.lat.label" :name="FIELDS.lat.value">
        <a-input-number
          :disabled="isLoadingMap"
          v-model:value="formState[FIELDS.lat.value]"
          :placeholder="FIELDS.lat.label"
          @change="onChangeCors"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.lng.label" :name="FIELDS.lng.value">
        <a-input-number
          :disabled="isLoadingMap"
          class="rounded-xl"
          v-model:value="formState[FIELDS.lng.value]"
          :placeholder="FIELDS.lng.label"
          @change="onChangeCors"
        />
      </a-form-item>
    </div>
    <a-spin :spinning="isLoadingMap" size="large">
      <div ref="mapRef" class="w-full h-[300px]"></div>
    </a-spin>
  </div>
</template>
