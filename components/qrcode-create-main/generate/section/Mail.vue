<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.email.fields;

const emit = defineEmits(["submit"]);

const toggle = ref(false);

const toggleButton = () => {
  toggle.value = !toggle.value;
};

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.mailto.label" :name="FIELDS.mailto.value">
      <a-input
        type="email"
        class="rounded-xl"
        v-model:value="formState[FIELDS.mailto.value]"
        :placeholder="FIELDS.mailto.label"
        @change="onSubmit"
      />
    </a-form-item>

    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" @click="toggleButton" value="" class="sr-only peer">
      <div class="w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ed7f22]"></div>
      <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Cc, Bcc</span>
    </label>

    <div v-if="toggle === true">
      <a-form-item :label="FIELDS.cc.label" :name="FIELDS.cc.value">
        <a-input
          type="text"
          class="rounded-xl"
          v-model:value="formState[FIELDS.cc.value]"
          :placeholder="FIELDS.cc.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.bcc.label" :name="FIELDS.bcc.value">
        <a-input
          type="text"
          class="rounded-xl"
          v-model:value="formState[FIELDS.bcc.value]"
          :placeholder="FIELDS.bcc.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>

    <a-form-item :label="FIELDS.subject.label" :name="FIELDS.subject.value">
      <a-input
        class="rounded-xl"
        v-model:value="formState[FIELDS.subject.value]"
        :placeholder="FIELDS.subject.label"
        @change="onSubmit"
      />
    </a-form-item>
    <a-form-item :label="FIELDS.body.label" :name="FIELDS.body.value">
      <a-textarea
        class="rounded-xl"
        v-model:value="formState[FIELDS.body.value]"
        :placeholder="FIELDS.body.label"
        :rows="4"
        @change="onSubmit"
      />
    </a-form-item>
  </div>
</template>
