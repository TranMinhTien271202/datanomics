<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.zoom.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.zoom_id.label" :name="FIELDS.zoom_id.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.zoom_id.value]"
        :placeholder="FIELDS.zoom_id.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.zoom_pwd.label" :name="FIELDS.zoom_pwd.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.zoom_pwd.value]"
        :placeholder="FIELDS.zoom_pwd.label"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
