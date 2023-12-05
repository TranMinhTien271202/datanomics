<script setup>
import { SECTIONS, COUNTRY_CODES } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.tel.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.countrycodetel.label" :name="FIELDS.countrycodetel.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.countrycodetel.value]" @change="onSubmit">
        <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.tel.label" :name="FIELDS.tel.value">
      <a-input-number
        type="tel"
        :min="0"
        v-model:value="formState[FIELDS.tel.value]"
        :placeholder="FIELDS.tel.label"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
