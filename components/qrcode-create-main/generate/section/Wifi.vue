<script setup>
import { SECTIONS, WIFI_NETWORK_TYPE } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.wifi.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.ssid.label" :name="FIELDS.ssid.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.ssid.value]"
        :placeholder="FIELDS.ssid.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.networktype.label" :name="FIELDS.networktype.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.networktype.value]" @change="onSubmit">
        <a-select-option v-for="item in WIFI_NETWORK_TYPE" :value="item.value">{{ item.name }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.wifipass.label" :name="FIELDS.wifipass.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.wifipass.value]"
        :placeholder="FIELDS.wifipass.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :name="FIELDS.wifihidden.value">
      <a-checkbox v-model:checked="formState[FIELDS.wifihidden.value]" @change="onSubmit">{{
        FIELDS.wifihidden.label
      }}</a-checkbox>
    </a-form-item>
  </div>
</template>
