<script setup>
import { TABS, FRAMES, FONTS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const FIELDS = TABS.frame.fields;

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <!-- Frame image -->
    <div class="grid gap-6 justify-around md:justify-between grid-cols-[repeat(auto-fill,112px)]">
      <template v-for="(item, key) in FRAMES" :key="key">
        <template v-if="!item.hidden">
          <input
            class="hidden"
            type="radio"
            :id="`outer-frame-${key}`"
            v-model="formState[FIELDS.outer_frame.value]"
            :value="key"
            @change="onSubmit"
            autocomplete="off"
          />
          <label
            :for="`outer-frame-${key}`"
            class="cursor-pointer p-5 w-[112px] h-[112px] flex items-center justify-center border rounded-[3px] border-[#D9D9D9] text-black hover:border-[#ED7E22] transition-all duration-300"
            :class="{ 'border-[#ED7F22]': key === formState[FIELDS.outer_frame.value] }"
          >
            <svg
              class="w-full h-full"
              :viewBox="`0 0 24 ${
                item.label_size != null && item.label_offset != null ? 24 + item.label_size + 2 + item.label_offset : 24
              }`"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              v-html="item.path"
            ></svg>
          </label>
        </template>
      </template>
    </div>

    <!-- Frame option -->
    <div class="md:grid md:grid-cols-2 gap-4 mt-8">
      <a-form-item :label="FIELDS.label_font.label">
        <a-select v-model:value="formState[FIELDS.label_font.value]" @change="onSubmit">
          <a-select-option v-for="(item, key) in FONTS" :key="key" :value="item.value">{{ key }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <template #label>
          <a-checkbox
            class="me-2"
            v-model:checked="formState[FIELDS.custom_frame_color.value]"
            @change="onSubmit"
          />{{ FIELDS.custom_frame_color.label }}
        </template>
        <a-input
          class="ant-input-group-wrapper--color"
          v-model:value="formState[FIELDS.framecolor.value]"
          @change="onSubmit"
          :disabled="!formState[FIELDS.custom_frame_color.value]"
        >
          <template #addonAfter>
            <input
              type="color"
              v-model="formState[FIELDS.framecolor.value]"
              :disabled="!formState[FIELDS.custom_frame_color.value]"
              @change="onSubmit"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item :label="FIELDS.framelabel.label">
        <a-input class="rounded-xl" v-model:value="formState[FIELDS.framelabel.value]" @change="onSubmit" />
      </a-form-item>
      <a-form-item :label="FIELDS['label-text-size'].label">
        <a-input-number
          :formatter="(value) => `${value}%`"
          :parser="(value) => value.replace('%', '')"
          :min="1"
          :max="100"
          v-model:value="formState[FIELDS['label-text-size'].value]"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
  </div>
</template>
