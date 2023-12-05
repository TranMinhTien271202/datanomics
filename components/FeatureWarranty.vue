<script setup>
import { onUnmounted, ref } from "#imports";

const props = defineProps({
  activeTab: {
    type: String,
    default: "",
  },

  sliders: {
    type: Array,
    default: [
      {
        tab: "",
        no: 1,
      },
    ],
  },
});

const emit = defineEmits("update:activeTab");

const timeoutData = ref();
const showContent = ref(true);

const changeTab = (tab) => {
  showContent.value = false;
  emit("update:activeTab", tab);

  timeoutData.value = setTimeout(() => {
    showContent.value = true;
  }, 550);
};

const showArrowOpen = (slider) => {
  const indexCurrent = props.sliders.findIndex((tab) => tab.no === slider.no);
  const indexActive = props.sliders.findIndex((item) => item.tab === props.activeTab);

  // item is first
  if (!indexCurrent && slider.tab != props.activeTab) {
    return false;
  }

  return slider.tab != props.activeTab && indexCurrent > indexActive;
};

onUnmounted(() => {
  clearTimeout(timeoutData.value);
});
</script>

<template>
  <div class="bg-primary -mx-20 max-xl:-mx-4 mt-16 max-md:mt-10 pt-10" v-if="sliders?.length">
    <div class="flex gap-2 border-[5px] border-solid border-white bg-white overflow-hidden max-lg:hidden">
      <div v-for="(slider, i) in sliders" :key="i" :class="activeTab === slider.tab ? 'flex-1 bg-white' : 'bg-primary'"
        class="duration-500 ease-in-out w-[220px] h-[770px]" @click="changeTab(slider.tab)">
        <div class="flex flex-col h-full justify-between items-end cursor-pointer" v-if="activeTab != slider.tab">
          <div class="p-[24px]">
            <nuxt-picture loading="lazy" src="/images/icons/ic-arrow-left.svg" v-if="showArrowOpen(slider)"
              :imgAttrs="{ alt: 'ic-arrow-left' }" />
            <nuxt-picture loading="lazy" src="/images/icons/ic-arrow-right.svg" v-else
              :imgAttrs="{ alt: 'ic-arrow-right' }" />
          </div>

          <span class="text-[180px] leading-[160px] text-white">{{ slider.no }}</span>
        </div>

        <div class="flex items-center justify-center h-full" v-else>
          <a-spin :spinning="!showContent">
            <div class="px-20 pt-12 pb-16" v-show="showContent">
              <h3>{{ slider?.title }}</h3>

              <div class="flex items-center gap-5 mt-12" v-for="(item, index) in slider?.content" :key="index"
                :class="{ 'flex-row-reverse': index > 0 && index % 2 !== 0 }">
                <nuxt-picture loading="lazy" src="/images/solutions/img-manage-product.png" width="328" class="shrink-0"
                  :imgAttrs="{ alt: 'img-manage-product' }" />

                <div class="flex flex-col gap-3">
                  <div class="subtitle-1">{{ item.subtitle }}</div>

                  <div>{{ item?.description }}</div>
                </div>
              </div>
            </div>
          </a-spin>
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white justify-between items-end overflow-hidden xl:hidden">
      <div v-for="(slider, i) in sliders" :key="i" :class="activeTab === slider.tab ? 'flex-1 bg-white' : 'bg-primary'"
        class="duration-500 ease-in-out w-full h-[70px]" @click="changeTab(slider.tab)">
        <div class="flex justify-between h-full items-center border-b border-white" v-if="activeTab != slider.tab">
          <span class="pl-6 text-[64px] text-white">{{ slider.no }}</span>

          <div class="p-6">
            <nuxt-picture loading="lazy" src="/images/icons/ic-arrow-up.svg" v-if="showArrowOpen(slider)"
              :imgAttrs="{ alt: 'ic-arrow-left' }" />
            <nuxt-picture loading="lazy" v-else src="/images/icons/ic-arrow-right.svg" class="rotate-90"
              :imgAttrs="{ alt: 'ic-arrow-right' }" />
          </div>
        </div>

        <div class="items-center justify-center h-fit xl:hidden" v-else>
          <a-spin :spinning="!showContent" wrapper-class-name="spinner-feature-warranty">
            <div class="py-6" v-show="showContent">
              <h3 class="px-10">{{ slider?.title }}</h3>

              <div class="gap-5" v-for="(item, index) in slider?.content" :key="index">
                <nuxt-picture :imgAttrs="{ class: 'w-full', alt: 'img-manage-product' }" loading="lazy"
                  src="/images/solutions/img-manage-product.png" class="w-full" />

                <div class="flex flex-col gap-3">
                  <div class="subtitle-1 px-10">{{ item.subtitle }}</div>

                  <div class="px-10">{{ item?.description }}</div>
                </div>
              </div>
            </div>
          </a-spin>
        </div>
      </div>
    </div>
  </div>
</template>
