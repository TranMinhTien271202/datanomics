<script setup>
import { SECTIONS, COUNTRY_CODES } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.whatsapp.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.wapp_countrycode.label" :name="FIELDS.wapp_countrycode.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.wapp_countrycode.value]" @change="onSubmit">
        <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.wapp_number.label" :name="FIELDS.wapp_number.value">
      <a-input-number
        :min="0"
        type="tel"
        v-model:value="formState[FIELDS.wapp_number.value]"
        :placeholder="FIELDS.wapp_number.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.wapp_message.label" :name="FIELDS.wapp_message.value">
      <a-textarea
        class="rounded-xl"
        :rows="4"
        v-model:value="formState[FIELDS.wapp_message.value]"
        :placeholder="FIELDS.wapp_message.label"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
