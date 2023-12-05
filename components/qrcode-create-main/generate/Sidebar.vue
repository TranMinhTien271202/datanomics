<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};

const isShowMoreSection = ref(false);
</script>

<template>
  <section>
    <a-radio-group
      v-model:value="formState.section"
      class="grid grid-cols-[repeat(auto-fill,160px)] lg:grid-cols-[repeat(auto-fill,193px)] justify-between gap-2 lg:gap-1 max-xl:hidden"
    >
      <a-radio
        class="tab-links w-full h-[50px] flex items-center p-2"
        :class="{ hidden: index >= 8 && !isShowMoreSection }"
        v-for="(item, key, index) in SECTIONS"
        :key="key"
        :value="item.value"
        @change="onSubmit"
      >
        <div class="flex items-center">
          <nuxt-picture
            class="w-[24px] h-[24px] mr-4"
            :src="`/images/qrcode-create/generate/sidebar/${key}.svg`"
            :img-attrs="{ alt: 'tab-icon' }"
          />
          <div>{{ item.name }}</div>
        </div>
      </a-radio>
      <div
        class="flex items-center p-2 h-[50px] cursor-pointer rounded-l"
        v-if="!isShowMoreSection"
        @click="isShowMoreSection = true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-4 ml-2"
        >
          <path d="M22 7L12 17L2 7" stroke="#ED7F22" stroke-width="3.33333" />
        </svg>
        <div class="text-[#ED7F22]">Xem thêm</div>
      </div>
    </a-radio-group>

    <div class="xl:hidden flex-col w-full">
      <label for="" class="font-bold text-[14px] text-black">Chọn loại QR</label>
      <a-select class="w-full ant-select--fix mt-4" v-model:value="formState.section" @change="onSubmit">
        <a-select-option v-for="(item, key) in SECTIONS" :key="key" :value="item.value" class="1text">
          <div class="flex items-center h-[40px] p-2">
            <nuxt-picture
              class="w-[24px] h-[24px] mr-4"
              :src="`/images/qrcode-create/generate/sidebar/${key}.svg`"
              :img-attrs="{ alt: 'tab-icon' }"
            />
            <div>{{ item.name }}</div>
          </div>
        </a-select-option>
      </a-select>
    </div>
  </section>
</template>
