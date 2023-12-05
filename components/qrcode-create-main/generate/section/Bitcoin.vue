<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const FIELDS = SECTIONS.bitcoin.fields;

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <div>
      <a-form-item :label="FIELDS.btc_account.label" :name="FIELDS.btc_account.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.btc_account.value]"
          :placeholder="FIELDS.btc_account.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.btc_amount.label" :name="FIELDS.btc_amount.value">
        <a-input-number
          :min="0"
          v-model:value="formState[FIELDS.btc_amount.value]"
          :placeholder="FIELDS.btc_amount.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.btc_label.label" :name="FIELDS.btc_label.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.btc_label.value]"
          :placeholder="FIELDS.btc_label.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.btc_message.label" :name="FIELDS.btc_message.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.btc_message.value]"
          :placeholder="FIELDS.btc_message.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
  </div>
</template>
