<script setup>
defineProps({
  benefitData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div
    :class="benefitData.length === 3 ? 'grid-cols-3' : 'grid-cols-2'"
    class="grid max-lg:grid-cols-1 gap-x-6 max-lg:gap-y-10 items-center justify-items-center justify-center mt-[60px]"
  >
    <template v-for="(data, index) in benefitData" :key="index">
      <div v-if="typeof data !== 'string'" class="flex flex-col gap-y-16 max-lg:gap-y-8">
        <div v-for="item in data" :key="item.text" class="flex items-center gap-x-6">
          <nuxt-picture loading="lazy" :src="item.imageUrL" class="shrink-0" width="85" :imgAttrs="{ alt: 'benefit-' + index }" />

          <div>
            <div class="subtitle-2 mb-2" v-if="item.subtitle">{{ item.subtitle }}</div>
            {{ item.text }}
          </div>
        </div>
      </div>

      <div v-else class="py-[100px] px-[80px] bg-[rgba(207,161,122,0.10)] rounded-[120px]">
        <nuxt-picture loading="lazy" :src="data" width="237"  :imgAttrs="{ alt: 'benefit-v2-' + index }"  />
      </div>
    </template>
  </div>
</template>
