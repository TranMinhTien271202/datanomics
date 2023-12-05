<script setup>
defineProps({
  features: {
    type: Array,
    default: () => [{ name: "", descriptions: [], imageUrl: undefined }],
  },
});
</script>

<template>
  <div class="py-[40px] flex flex-col gap-y-[84px] bg-white">
    <div
      v-for="(feature, index) in features"
      :key="feature.name"
      class="flex max-lg:flex-col items-center gap-x-28 justify-between"
      :class="{ 'flex-row-reverse': index % 2 !== 0 }"
    >
      <nuxt-picture loading="lazy" :src="feature.imageUrl" class="w-full" :imgAttrs="{ class: 'w-full' }" />

      <div class="max-xl:mt-8 w-full">
        <div class="subtitle-1">{{ feature.name }}</div>

        <div class="mt-[16px]">
          <div v-for="des in feature.descriptions" :key="des" class="flex items-baseline gap-x-3">
            {{ des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
