<script setup>
const emit = defineEmits(["scrollToTop"]);
const scrollToTop = () => {
    emit('scrollToTop')
}
</script>
<template>
    <NuxtLink @click="scrollToTop"
        class="absolute left-1/2 bottom-[60px] -translate-x-1/2 flex flex-col gap-[8px] items-center max-sm:hidden">
        <p class="text-white font-bold">Scroll Down</p>
        <nuxt-picture loading="lazy" src="/images/our-service/Arrow-down.png" :imgAttrs="{ alt: 'scroll-down' }"
            width="16" />
    </NuxtLink>
</template>