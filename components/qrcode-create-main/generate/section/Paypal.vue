<script setup>
import { SECTIONS, PAYPAL_PAYMENT_TYPES, PAYPAL_CURRENCY } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.paypal.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <div>
      <a-form-item :label="FIELDS.pp_type.label" :name="FIELDS.pp_type.value">
        <a-select v-model:value="formState[FIELDS.pp_type.value]" @change="onSubmit">
          <a-select-option v-for="item in PAYPAL_PAYMENT_TYPES" :value="item.value">{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :label="FIELDS.pp_email.label" :name="FIELDS.pp_email.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.pp_email.value]"
          :placeholder="FIELDS.pp_email.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.pp_name.label" :name="FIELDS.pp_name.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.pp_name.value]"
          :placeholder="FIELDS.pp_name.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.pp_id.label" :name="FIELDS.pp_id.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.pp_id.value]"
          :placeholder="FIELDS.pp_id.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.pp_price.label" :name="FIELDS.pp_price.value">
        <a-input-number
          :min="0"
          v-model:value="formState[FIELDS.pp_price.value]"
          :placeholder="FIELDS.pp_price.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.pp_currency.label" :name="FIELDS.pp_currency.value">
        <a-select v-model:value="formState[FIELDS.pp_currency.value]" @change="onSubmit">
          <a-select-option v-for="item in PAYPAL_CURRENCY" :value="item.value">{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.pp_shipping.label" :name="FIELDS.pp_shipping.value">
        <a-input-number
          :min="0"
          v-model:value="formState[FIELDS.pp_shipping.value]"
          :placeholder="FIELDS.pp_shipping.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.pp_tax.label" :name="FIELDS.pp_tax.value">
        <a-input-number
          :formatter="(value) => value ? `${value}%` : ''"
          :parser="(value) => value.replace('%', '')"
          :min="0"
          v-model:value="formState[FIELDS.pp_tax.value]"
          :placeholder="FIELDS.pp_tax.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
  </div>
</template>
