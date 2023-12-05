<script setup>
import { SECTIONS, COUNTRY_CODES } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.sms.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.countrycodesms.label" :name="FIELDS.countrycodesms.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.countrycodesms.value]" @change="onSubmit">
        <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.sms.label" :name="FIELDS.sms.value">
      <a-input-number
        :min="0"
        type="tel"
        v-model:value="formState[FIELDS.sms.value]"
        :placeholder="FIELDS.sms.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.bodysms.label" :name="FIELDS.bodysms.value">
      <a-textarea
        class="rounded-xl"
        v-model:value="formState[FIELDS.bodysms.value]"
        :placeholder="FIELDS.bodysms.label"
        :rows="4"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
