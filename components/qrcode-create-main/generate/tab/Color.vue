<script setup>
import { TABS, FRONT_COLORS, COLOR_WHITE, COLOR_TRANSPARENT } from "~/constants/qrcode-generate";
import { Cropper } from "vue-advanced-cropper";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const CROPPER_VIEW_WIDTH_HEIGH = 215;

const FIELDS = TABS.colors.fields;

const onSubmit = () => {
  emit("submit");
};

const onChangeTransparent = (event) => {
  if (event.target.checked) {
    props.formState[FIELDS.transparent_code.value] = false;
    props.formState[FIELDS.backcolor.value] = COLOR_TRANSPARENT;
  } else {
    props.formState[FIELDS.backcolor.value] = COLOR_WHITE;
  }
  onSubmit();
};

const onChangeTransparentCode = (event) => {
  if (event.target.checked) {
    if (props.formState[FIELDS.transparent.value]) {
      props.formState[FIELDS.transparent.value] = false;
      props.formState[FIELDS.backcolor.value] = COLOR_WHITE;
    }
    frontColorForm.value = FRONT_COLORS.single.value;
    props.formState[FIELDS.gradient.value] = false;
    props.formState[FIELDS.radial.value] = false;
    if (props.formState[FIELDS.bg_image.value]) {
      onSubmit();
    }
  } else {
    onSubmit();
  }
  props.formState.negative_qr = false;
};

const img = ref();

const onChangeFileList = (event) => {
  if (event.file.status === "done" && event.file.originFileObj) {
    img.value = URL.createObjectURL(event.file.originFileObj);
  }
};

const onChangeNagativeQr = (event) => {
  if (event.target.checked) {
    props.formState[FIELDS.gradient.value] = false;
    props.formState[FIELDS.radial.value] = false;
  }
  onSubmit();
};

const onChangeGrandient = (event) => {
  if (!event.target.checked) {
    props.formState[FIELDS.radial.value] = false;
  }
  onSubmit();
};

const cropperRef = ref();
const isUpdatingBackgroundImage = ref(false);

const onClickUpdateBgImage = () => {
  if (isUpdatingBackgroundImage.value) return;
  isUpdatingBackgroundImage.value = true;

  const { canvas } = cropperRef.value.getResult();
  if (canvas) {
    props.formState[FIELDS.bg_image.value] = canvas.toDataURL("image/jpeg");
  }

  onSubmit();
  isUpdatingBackgroundImage.value = false;
};

const onClickRemoveImage = () => {
  if (isUpdatingBackgroundImage.value) return;
  isUpdatingBackgroundImage.value = true;

  img.value = null;
  props.formState[FIELDS.bg_image.value] = null;

  onSubmit();
  isUpdatingBackgroundImage.value = false;
};

const frontColorForm = ref(FRONT_COLORS.single.value);

const onChangeFrontColorForm = (event) => {
  switch (event.target.value) {
    case FRONT_COLORS.single.value:
      props.formState[FIELDS.gradient.value] = false;
      props.formState[FIELDS.radial.value] = false;
      break;
    case FRONT_COLORS.linear.value:
      props.formState[FIELDS.gradient.value] = true;
      props.formState[FIELDS.radial.value] = false;
      props.formState[FIELDS.transparent_code.value] = false;
      break;
    case FRONT_COLORS.gradient.value:
      props.formState[FIELDS.gradient.value] = true;
      props.formState[FIELDS.radial.value] = true;
      props.formState[FIELDS.transparent_code.value] = false;
      break;
    default:
      break;
  }
  onSubmit();
};
</script>

<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between gap-6">
    <!-- Backcolor -->
    <div class="basis-full md:basis-1/2">
      <p class="font-semibold text-black">Thay đổi màu nền</p>
      <div>
        <!-- Checkbox -->
        <div class="flex flex-col gap-2 mt-4">
          <a-form-item :name="FIELDS.transparent_code.value" class="mb-0">
            <a-checkbox
              type="checkbox"
              v-model:checked="formState[FIELDS.transparent_code.value]"
              @change="onChangeTransparentCode"
              >{{ FIELDS.transparent_code.label }}</a-checkbox
            >
          </a-form-item>
          <a-form-item :name="FIELDS.transparent_code.value" class="mb-0">
            <a-checkbox
              type="checkbox"
              v-model:checked="formState[FIELDS.transparent.value]"
              @change="onChangeTransparent"
              >{{ FIELDS.transparent.label }}</a-checkbox
            >
          </a-form-item>
          <div class="invisible md:min-h-[32px]"></div>
        </div>
        <!-- Backcolor -->
        <a-form-item class="mt-5" :name="TABS.colors.fields.backcolor.value">
          <a-input
            class="ant-input-group-wrapper--color"
            @change="onSubmit"
            v-model:value="formState[FIELDS.backcolor.value]"
            :disabled="formState[FIELDS.transparent.value]"
          >
            <template #addonAfter>
              <input
                type="color"
                v-model="formState[FIELDS.backcolor.value]"
                :disabled="formState[FIELDS.transparent.value]"
                @change="onSubmit"
              />
            </template>
          </a-input>
        </a-form-item>
        <!-- UploadImage -->
        <div v-if="formState[FIELDS.transparent_code.value]" class="mt-[24px]">
          <div v-if="img">
            <cropper
              ref="cropperRef"
              class="w-[215px] h-[215px]"
              :canvas="{ height: 800, width: 800 }"
              :src="img"
              :stencil-props="{ aspectRatio: 1 }"
              :default-size="
                ({ imageSize }) => {
                  return {
                    width: Math.min(imageSize.height, imageSize.width),
                    height: Math.min(imageSize.height, imageSize.width),
                  };
                }
              "
            />
            <a-form-item :name="formState[FIELDS.negative_qr.value]">
              <a-checkbox
                :disabled="!formState[FIELDS.bg_image.value]"
                v-model:checked="formState[FIELDS.negative_qr.value]"
                @change="onChangeNagativeQr"
                >{{ FIELDS.negative_qr.label }}</a-checkbox
              >
            </a-form-item>
            <div class="flex mt-4 text-center">
              <button
                type="button"
                :disabled="isUpdatingBackgroundImage"
                class="bg-[#ED7F22] text-white w-[157px] py-[10px] border-[#ED7F22] rounded-[10px] mr-1 h-[40px] hover:opacity-80 transition-all duration-300"
                @click="onClickUpdateBgImage"
              >
                Tải lên
              </button>
              <button
                type="button"
                :disabled="isUpdatingBackgroundImage"
                class="text-[#ED7F22] py-[10px] px-[14px] border-2 border-[#ED7F22] rounded-[10px] h-[40px] hover:opacity-80 transition-all duration-300"
                @click="onClickRemoveImage"
              >
                Hủy
              </button>
            </div>
          </div>
          <a-upload
            v-else
            class="bg-[#F5F5F5] flex justify-center items-center border-dashed rounded-xl border-2 border-[#ED7F22] hover:opacity-80 aspect-square"
            :class="`w-[${CROPPER_VIEW_WIDTH_HEIGH}px] h-[${CROPPER_VIEW_WIDTH_HEIGH}px]`"
            :customRequest="dummyRequest"
            accept="image/*"
            :capture="null"
            :max-count="1"
            :show-upload-list="false"
            @change="onChangeFileList"
          >
            <div class="w-full h-[215px] flex flex-col justify-center items-center text-center p-2">
              <nuxt-picture
                class="w-[24px] h-[24px]"
                src="/images/icons/inbox-out-1.png"
                :img-attrs="{ alt: 'upload' }"
              />
              <div class="mt-3 text-black">Kéo thả file ảnh của bạn để tải file lên</div>
            </div>
          </a-upload>
        </div>
      </div>
    </div>

    <!-- Frontcolor -->
    <div class="basis-full md:basis-1/2">
      <p class="font-semibold text-black">Thay đổi màu họa tiết</p>
      <a-radio-group class="flex flex-col mt-4 gap-2" v-model:value="frontColorForm" @change="onChangeFrontColorForm">
        <a-form-item class="mb-0" v-for="(item, key) in FRONT_COLORS" :key="key">
          <a-radio :value="item.value">{{ item.name }}</a-radio>
        </a-form-item>
      </a-radio-group>
      <div class="mt-5">
        <a-form-item :name="FIELDS.frontcolor.value">
          <a-input
            class="ant-input-group-wrapper--color"
            @change="onSubmit"
            v-model:value="formState[FIELDS.frontcolor.value]"
          >
            <template #addonAfter>
              <input type="color" v-model="formState[FIELDS.frontcolor.value]" @change="onSubmit" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item :name="FIELDS.gradient_color.value" v-if="formState[FIELDS.gradient.value]">
          <a-input
            class="ant-input-group-wrapper--color"
            v-model:value="formState[FIELDS.gradient_color.value]"
            @change="onChangeGrandient"
          >
            <template #addonAfter>
              <input type="color" v-model="formState[FIELDS.gradient_color.value]" @change="onChangeGrandient" />
            </template>
          </a-input>
        </a-form-item>
      </div>
    </div>
  </div>
</template>
