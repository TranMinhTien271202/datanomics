<script setup>
import { SECTIONS, EVENT_REMIDER_BEFORE_EVENT } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const FIELDS = SECTIONS.event.fields;

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <div>
      <a-form-item :label="FIELDS.eventtitle.label" :name="FIELDS.eventtitle.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.eventtitle.value]"
          :placeholder="FIELDS.eventtitle.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.eventlocation.label" :name="FIELDS.eventlocation.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.eventlocation.value]"
          :placeholder="FIELDS.eventlocation.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.eventstarttime.label" :name="FIELDS.eventstarttime.value">
        <a-date-picker
          show-time
          class="rounded-xl h-[56px] w-full"
          v-model:value="formState[FIELDS.eventstarttime.value]"
          :placeholder="FIELDS.eventstarttime.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.eventendtime.label" :name="FIELDS.eventendtime.value">
        <a-date-picker
          show-time
          class="rounded-xl h-[56px] w-full"
          v-model:value="formState[FIELDS.eventendtime.value]"
          :placeholder="FIELDS.eventendtime.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <a-form-item :label="FIELDS.eventreminder.label" :name="FIELDS.eventreminder.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.eventreminder.value]">
        <a-select-option v-for="item in EVENT_REMIDER_BEFORE_EVENT" :value="item.value">{{
          item.name
        }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="FIELDS.eventlink.label" :name="FIELDS.eventlink.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.eventlink.value]"
        :placeholder="FIELDS.eventlink.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.notes.label" :name="FIELDS.notes.value">
      <a-textarea
        class="rounded-xl"
        :rows="4"
        v-model:value="formState[FIELDS.notes.value]"
        :placeholder="FIELDS.notes.label"
        @change="onSubmit"
      >
      </a-textarea>
    </a-form-item>
  </div>
</template>
