<script setup>
defineProps({
  features: {
    type: Array,
    default: () => [{ name: "", descriptions: [], imageUrl: undefined }],
  },
});
</script>

<template>
  <div class="py-[64px] px-[150px] max-xl:px-10 flex flex-col gap-y-[84px] bg-white -mx-20 max-xl:-mx-4">
    <div
      v-for="(feature, index) in features"
      :key="feature.name"
      class="flex max-lg:flex-col items-center gap-x-6 justify-between"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
    >
      <nuxt-picture loading="lazy" :src="feature.imageUrl" class="w-full" :imgAttrs="{ class: 'w-full', alt: 'feature-' + index }" />

      <div class="max-xl:mt-8">
        <div class="subtitle-1">{{ feature.name }}</div>

        <div class="flex flex-col gap-y-[34px] max-xl:gap-y-3 mt-[16px]">
          <div v-for="des in feature.descriptions" :key="des" class="flex items-baseline gap-x-3">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                <circle cx="6.1084" cy="6" r="6" fill="#ED7F22" />
              </svg>
            </div>

            {{ des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
