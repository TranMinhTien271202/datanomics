<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.text.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.data.label" :name="FIELDS.data.value">
      <a-textarea
        class="rounded-xl"
        v-model:value="formState[FIELDS.data.value]"
        :placeholder="FIELDS.data.label"
        :rows="4"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
