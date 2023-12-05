<script setup>
import { CATEGORY_BASE, CATEGORY_BRANCHES as CATEGORY_BRANCHES_BASE } from "~/constants/post-category";

const CATEGORY_BRANCHES = {
  all: { value: "all", name: "Tất cả", id: CATEGORY_BASE.successCase.id },
  ...CATEGORY_BRANCHES_BASE,
};

const getBlogsStoryData = async () => {
  storyData.value = await getBlogsBase(6, [CATEGORY_BASE.successCase.id, CATEGORY_BRANCHES[stateBranch.value].id]);
};

const storyData = ref([]);
const stateBranch = ref(CATEGORY_BRANCHES.all.value);

watch(stateBranch, () => {
  getBlogsStoryData();
});

onMounted(() => {
  getBlogsStoryData();
});
</script>

<template>
  <section id="story">
    <div class="text-center">
      <h2>Câu chuyện thành công cùng QRX</h2>
      <div class="subtitle-2 text-third mt-4">
        Những doanh nghiệp đã áp dụng chiến lược của QRX và gặt hái được thành tựu
      </div>
    </div>
    <div class="flex flex-row justify-center mt-[33px] max-lg:flex-wrap">
      <div
        v-for="(item, key) in CATEGORY_BRANCHES"
        :key="key"
        class="py-[18px] px-[27px] bg-[#8C8C8C] rounded-[12px] mx-[19px] text-center flex justify-center items-center max-lg:m-[5px] max-lg:w-[46%] cursor-pointer"
        @click="stateBranch = item.value"
        :class="{ 'button-active': stateBranch === item.value }"
      >
        <span class="text-white text-base font-bold">{{ item.name }}</span>
      </div>
      
    </div>
    <div class="flex flex-wrap justify-center mt-[27px]">
      <div
        v-for="item in storyData"
        :key="item.id"
        class="max-sm:w-full max-lg:w-1/2 w-1/3 rounded-[24px] py-[17.5px] px-[11.5px]"
      >
        <nuxt-link target="_blank" :to="item.link">
          <div class="rounded-[24px] overflow-hidden">
            <nuxt-picture
              loading="lazy"
              :src="item.featured_image_url"
              :imgAttrs="{
                alt: 'storyData_' + item.slug,
                class: 'block h-[224px] w-full object-cover mx-auto',
              }"
            />
          </div>
          <p class="font-semibold text-base leading-8 text-black max-w-[385px] mt-[24px]">
            {{ stripHtml(item.title?.rendered) }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
