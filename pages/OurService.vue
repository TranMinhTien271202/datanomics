<script setup></script>

<template>
  <div class="home-page">
    <section class="rounded-[48px] relative">
      <div class="max-sm:hidden">
        <nuxt-picture
          loading="lazy"
          src="/images/our-service/bg-our-services.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner' }"
          class="w-full"
        />
      </div>
      <div class="sm:hidden -mx-20">
        <nuxt-picture
          loading="lazy"
          src="/images/our-service/bg-our-services.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner-mobile' }"
          class="w-full"
          v-smooth-scroll="{ offset: 25 }"
        />
      </div>

      <div
        class="absolute max-2xl:bottom-[15px] top-1/2 max-md:top-[90px] max-md:left-[16px] left-[80px] md:-translate-y-1/2"
      >
        <h1 class="text-secondary text-center max-sm:text-white">Data Driven Origanization</h1>

        <p
          class="w-2/3 text-[16px] text-secondary text-center mx-auto max-sm:text-[12px] max-sm:w-full font-[600] max-sm:text-white mt-2 max-sm:mt-4 text-black"
        >
          We aspire to be the partner of choice in your transformation into a data-driven organization and enable you to
          manage and monetize data through effective use of people, process and technology.
        </p>
      </div>
      <NuxtLink to="#a" class="absolute left-1/2 bottom-[60px] -translate-x-1/2 flex flex-col gap-[8px] items-center max-sm:hidden">
        <p class="text-white font-bold">Scroll Down</p>
        <nuxt-picture
          loading="lazy"
          src="/images/our-service/Arrow-down.png"
          :imgAttrs="{ alt: 'scroll-down' }"
          width="16"
        />
      </NuxtLink>
    </section>

    <CustomerCarousel class="mt-[80px]" id="a" />

    <CustomerCarouselTwo class="mt-[80px]" />

    <Contact class="mt-[80px]" />
  </div>
</template>

