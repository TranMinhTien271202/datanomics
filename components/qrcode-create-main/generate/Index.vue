<script setup>
import { FORM_ON, SECTIONS, TABS } from "~/constants/qrcode-generate";
import dayjs from 'dayjs'

const props = defineProps({
  selectSection: { type: String, require: true },
});

const emit = defineEmits(["nextStep"]);

const config = useRuntimeConfig();

const formRef = ref();
const isLoadingQrImage = ref(false);
const qrCodeImageSubmitFormResponse = ref();

const getFormState = () => {
  const formState = {};
  formState.section = props.selectSection || SECTIONS.link.value;

  for (const [_, section] of Object.entries(SECTIONS)) {
    for (const [_, field] of Object.entries(section.fields)) {
      formState[field.value] = field.default;
    }
  }

  for (const [_, tab] of Object.entries(TABS)) {
    for (const [_, field] of Object.entries(tab.fields)) {
      formState[field.value] = field.default;
    }
  }

  return formState;
};

const getFormRules = () => {
  const rules = {};
  for (const [_, section] of Object.entries(SECTIONS)) {
    for (const [_, field] of Object.entries(section.fields)) {
      if (field.rules) {
        rules[field.value] = field.rules;
      }
    }
  }
  return rules;
};

const formState = reactive(getFormState());

watch(
  () => props.selectSection,
  (newSelectSection) => {
    if (!newSelectSection) return;
    formState.section = newSelectSection;
  },
);

const onPreSubmit = (isNotShowError = true) => {
  setTimeout(async () => {
    await nextTick();
    let validateFields = [];
    const currentSection = formState.section.substring(1);
    for (const key in SECTIONS[currentSection].fields) {
      validateFields.push(key);
    }
    try {
      await formRef.value.formRef.validateFields(validateFields);
    } catch (error) {
      if (isNotShowError) formRef.value.formRef.clearValidate();
      qrCodeImageSubmitFormResponse.value = null;
      return;
    }
    isLoadingQrImage.value = true;
    submitForm(toRaw(formState));
  }, 0);
};

let abortController;

const submitForm = debounce(async (formStateRaw) => {
  if (abortController) {
    abortController.abort();
  }

  const body = new FormData();
  for (const key in formStateRaw) {
    let value = formStateRaw[key];

    if (value === true) {
      body.set(key, FORM_ON);
    } else if (value) {
      if (dayjs.isDayjs(value)) {
        value = value.unix();
      }
      body.set(key, value);
    }
  }

  const FIELD_COLORS = TABS.colors.fields;

  if (!formStateRaw[FIELD_COLORS.transparent_code.value] || !formStateRaw[FIELD_COLORS.bg_image.value]) {
    body.delete(FIELD_COLORS.transparent_code.value);
    body.delete(FIELD_COLORS.bg_image.value);
  }

  abortController = new AbortController();
  const signal = abortController.signal;
  try {
    const res = await $fetch("api/v1/qr/marketing/qr-create ", {
      baseURL: config.public.baseUrl.qrCreate,
      method: "POST",
      headers: { "X-Requested-With": "XMLHttpRequest" },
      body,
      signal,
    });
    const data = res.data;

    if (data.errore) {
      throw new Error();
    }
    qrCodeImageSubmitFormResponse.value = data;
  } catch (error) {
    if (signal.aborted && abortController?.signal?.aborted === false) {
      return;
    }
    qrCodeImageSubmitFormResponse.value = null;
  }

  isLoadingQrImage.value = false;
}, 500);

</script>

<template>
  <div class="flex flex-col xl:flex-row gap-6 lg:gap-8 justify-between">
    <QrcodeCreateMainGenerateSidebar class="tab-icon" :form-state="formState" @submit="onPreSubmit(true)" />
    <QrcodeCreateMainGenerateForm
      class="tab-form w-full xl:w-6/12"
      ref="formRef"
      :form-state="formState"
      :form-rules="getFormRules()"
      @submit="onPreSubmit"
    />
    <QrcodeCreateMainGeneratePreview
      class="qr-form p-[20px] h-fit bg-[#F5F5F5] rounded-xl xl:sticky xl:top-24"
      :is-loading-qr-image="isLoadingQrImage"
      :image-form-response="qrCodeImageSubmitFormResponse"
      @next-step="() => emit('nextStep')"
    />
  </div>
</template>
