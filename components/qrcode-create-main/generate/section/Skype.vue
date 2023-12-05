<script setup>
import { SECTIONS, SKYPE_TYPE } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.skype.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.skypeType.label" :name="FIELDS.skypeType.value">
      <a-radio-group v-model:value="formState[FIELDS.skypeType.value]" @change="onSubmit">
        <a-radio v-for="item in SKYPE_TYPE" :value="item.value">{{ item.name }}</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item :label="FIELDS.skype.label" :name="FIELDS.skype.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.skype.value]"
        :placeholder="FIELDS.skype.label"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
