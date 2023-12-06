<script setup>
import ScrollDown from '@/components/ScrollDown.vue';
import VueScrollTo from 'vue-scrollto'; 

const scrollToTop = () => {
  VueScrollTo.scrollTo('#scrollDown', 500, { easing: 'ease-in-out' });
};
</script>

<template>
  <div class="home-page">
    <section class="rounded-[48px] relative">
      <div class="max-sm:hidden">
        <nuxt-picture loading="lazy" src="/images/our-service/bg-our-services.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner' }" class="w-full" />
      </div>
      <div class="sm:hidden -mx-20">
        <nuxt-picture
          loading="lazy"
          src="/images/our-service/bg-our-services.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner-mobile' }"
          class="w-full"
        />
      </div>

      <div
        class="absolute left-1/2 top-[320px] -translate-x-1/2 flex flex-col gap-[8px] items-center max-sm:hidden">
        <h1 class="text-secondary text-center max-sm:text-white">OUR SERVICE</h1>

        <p
          class="w-2/3 text-[16px] text-secondary text-center mx-auto max-sm:text-[12px] max-sm:w-full font-[600] max-sm:text-white mt-2 max-sm:mt-4 text-black">
          Committed to deliver best possible solutions that cater to our clients’ needs.
        </p>
      </div>
      <ScrollDown @scrollToTop="scrollToTop"/>
    </section>

    <section id="scrollDown"></section>

    <CustomerCarousel class="mt-[80px]" id="a" />

    <CustomerCarouselTwo class="mt-[80px]" />

    <Contact class="mt-[80px]" />
  </div>
</template>

