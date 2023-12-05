<script setup>
import { TABS, SIZES, PRECISIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = TABS.option.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div class="md:grid md:grid-cols-2 gap-4">
    <a-form-item :label="FIELDS.size.label">
      <a-select v-model:value="formState[FIELDS.size.value]" @change="onSubmit">
        <a-select-option v-for="(item, key) in SIZES" :key="key" :value="item.value">{{ key }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.level.label">
      <a-select v-model:value="formState[FIELDS.level.value]" @change="onSubmit">
        <a-select-option v-for="(item, key) in PRECISIONS" :key="key" :value="item.value">{{
          item.name
        }}</a-select-option>
      </a-select>
    </a-form-item>
  </div>
</template>
