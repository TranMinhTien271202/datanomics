<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const FIELDS = SECTIONS.link.fields;

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <a-form-item :label="FIELDS.link.label" :name="FIELDS.link.value">
    <a-input
      type="url"
      class="rounded-xl"
      v-model:value="formState[FIELDS.link.value]"
      :placeholder="FIELDS.link.label"
      @change="onSubmit"
    />
  </a-form-item>
</template>
