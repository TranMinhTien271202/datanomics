<script setup>
import { TABS, MARKERS_BORDER, MARKERS_OUTER } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const FIELDS = TABS.design.fields;

const onSubmit = () => {
  emit("submit");
};

const activeKey = ref(["pattern"]);
</script>

<template>
  <div class="flex flex-col gap-8">
    <a-collapse
      :bordered="false"
      ghost
      expand-icon-position="right"
      class="ant-collapse-borderless--qrcreate"
      v-model:activeKey="activeKey"
    >
      <template #expandIcon>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="cursor-pointer"
        >
          <circle cx="16" cy="16" r="12" fill="#ED7F22" fill-opacity="0.25" />
          <path d="M21.334 16L10.6673 16" stroke="#ED7F22" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </template>
      <!-- Pattern -->
      <a-collapse-panel key="pattern" class="!border-b !border-[#F0F0F0] !border-solid pb-5">
        <template #header>
          <p class="font-semibold text-black">Họa tiết</p>
        </template>

        <div class="grid gap-4 justify-between grid-cols-[repeat(auto-fill,42px)] pt-5">
          <template v-for="(item, key) in MARKERS_OUTER" :key="key">
            <template v-if="item.preview">
              <input
                class="hidden"
                type="radio"
                :id="`pattern-${key}`"
                v-model="formState[FIELDS.pattern.value]"
                :value="key"
                @change="onSubmit"
                autocomplete="off"
              />
              <label
                :for="`pattern-${key}`"
                class="cursor-pointer p-1 w-[42px] h-[42px] flex items-center justify-center border rounded-[3px] border-[#D9D9D9] text-black hover:border-[#ED7E22] transition-all duration-300"
                :class="{ 'border-[#ED7F22]': key === formState[FIELDS.pattern.value] }"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 6 6"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  v-html="item.preview"
                ></svg>
              </label>
            </template>
          </template>
        </div>
      </a-collapse-panel>

      <!-- Marker Border -->
      <a-collapse-panel key="marker-border" class="mt-5 !border-b !border-[#F0F0F0] !border-solid pb-5">
        <template #header>
          <p class="font-semibold text-black">Viền dấu</p>
        </template>

        <div class="grid gap-4 justify-between grid-cols-[repeat(auto-fill,42px)] pt-5">
          <template v-for="(item, key) in MARKERS_BORDER" :key="key">
            <input
              class="hidden"
              type="radio"
              :id="`marker-out-${key}`"
              v-model="formState[FIELDS.marker_out.value]"
              :value="key"
              @change="onSubmit"
              autocomplete="off"
            />
            <label
              :for="`marker-out-${key}`"
              class="cursor-pointer p-1 w-[42px] h-[42px] flex items-center justify-center border rounded-[3px] border-[#D9D9D9] text-black hover:border-[#ED7E22] transition-all duration-300"
              :class="{ 'border-[#ED7F22]': key === formState[FIELDS.marker_out.value] }"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 14 14"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                v-html="item.path"
              ></svg>
            </label>
          </template>
        </div>
      </a-collapse-panel>

      <!-- Marker center -->
      <a-collapse-panel key="marker-center" class="mt-5 pb-5">
        <template #header>
          <p class="font-semibold text-black">Tâm dấu</p>
        </template>

        <div class="grid gap-4 justify-between grid-cols-[repeat(auto-fill,42px)] pt-5">
          <template v-for="(item, key) in MARKERS_OUTER" :key="key">
            <template v-if="item.marker">
              <input
                class="hidden"
                type="radio"
                :id="`maker-in-${key}`"
                v-model="formState[FIELDS.marker_in.value]"
                :value="key"
                @change="onSubmit"
                autocomplete="off"
              />
              <label
                :for="`maker-in-${key}`"
                class="cursor-pointer p-1 w-[42px] h-[42px] flex items-center justify-center border rounded-[3px] border-[#D9D9D9] text-black hover:border-[#ED7E22] transition-all duration-300"
                :class="{ 'border-[#ED7F22]': key === formState[FIELDS.marker_in.value] }"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 6 6"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                  v-html="item.path"
                ></svg>
              </label>
            </template>
          </template>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>
