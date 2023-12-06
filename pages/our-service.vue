<script setup>
import ScrollDown from "@/components/ScrollDown.vue";
import VueScrollTo from "vue-scrollto";

const scrollToTop = () => {
  VueScrollTo.scrollTo("#scrollDown", 500, { easing: "ease-in-out" });
};

const serviceOffered = ref([
  {
    title: "Implementation",
    description: ["BICC/ACOE", "Data management/ governance solutions", "Analytics"],
    icon: "/images/our-service/our-service-2.png",
  },
  {
    title: "Training",
    description: ["Basic and advanced statistics", "Analytical modeling/ BI", "Resource augmentation"],
    icon: "/images/our-service/our-service-3.png",
  },
  {
    title: "Consulting",
    description: ["Data-driven framework/ BICC* /ACOE**", "Data strategy", "Data management/ governance framework"],
    icon: "/images/our-service/our-service-4.png",
  },
]);
</script>

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
        />
      </div>

      <div class="absolute left-1/2 top-[320px] -translate-x-1/2 flex flex-col gap-[8px] items-center max-sm:hidden">
        <h1 class="text-secondary text-center max-sm:text-white">OUR SERVICE</h1>

        <p
          class="w-2/3 text-[16px] text-secondary text-center mx-auto max-sm:text-[12px] max-sm:w-full font-[600] max-sm:text-white mt-2 max-sm:mt-4 text-black"
        >
          Committed to deliver best possible solutions that cater to our clients’ needs.
        </p>
      </div>
      <ScrollDown @scrollToTop="scrollToTop" />
    </section>

    <section id="scrollDown"></section>

    <section id="service-offered">
      <div class="flex gap-[32px]">
        <div class="flex-1">
          <nuxt-picture
            loading="lazy"
            src="/images/our-service/our-service-1.png"
            :imgAttrs="{ alt: 'our-service' }"
            class="w-full"
          />
        </div>
        <div class="flex-1">
          <div class="my-[40px] service-item" v-for="(item, index) in serviceOffered" :key="index">
            <NuxtPicture :src="item.icon" :imgAttrs="{ alt: 'our-icon' }" class="w-full" width="80" />
            <div>
              <h3>{{ item.title }}</h3>
              <ul class="list-disc">
                <li v-for="(description, index) in item.description" :key="index">{{ description }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CustomerCarousel class="mt-[80px]" id="a" />

    <section class="relative mt-[80px]">
      <nuxt-picture
        loading="lazy"
        src="/images/our-service/gb-our-sevice3.png"
        :imgAttrs="{ alt: 'our-service-2' }"
        class="object-cover"
        width="100%"
      />

      <div class="absolute top-0 left-0">
        <div class="text-center">
          <h2>Analytics Applications</h2>

          <div class="subtitle-2 text-neutral mt-4 px-60 max-xl:px-20 max-sm:px-0">
            We believe in creating tangible value for you, we tailor our solutions according to your needs and we are
            conscious of your cost to offer our suitable services
          </div>
        </div>

        <div class="flex gap-[32px] justify-center items-center mt-[28px]">
          <div class="flex flex-col gap-[160px] text-right">
            <p class="text-[#23262F] text-[20px] font-medium">HR analytics</p>
            <p class="text-[#23262F] text-[20px] font-medium">Operations analytics</p>
            <p class="text-[#23262F] text-[20px] font-medium">Finance analytics</p>
          </div>
          <div class="flex flex-col gap-[24px] items-center">
            <p class="text-[#23262F] text-[20px] font-medium">Customer analytics</p>
            <NuxtPicture
              src="/images/our-service/our-service-5.png"
              :imgAttrs="{ alt: 'our-service' }"
              class="w-full"
              width="584"
            />
            <p class="text-[#23262F] text-[20px] font-medium">Risk/ Fraud/ Collections analytics</p>
          </div>
          <div class="flex flex-col gap-[160px]">
            <p class="text-[#23262F] text-[20px] font-medium">Sales & Service analytics</p>
            <p class="text-[#23262F] text-[20px] font-medium">Marketing analytics</p>
            <p class="text-[#23262F] text-[20px] font-medium">Product analytics</p>
          </div>
        </div>
      </div>
    </section>

    <Contact class="mt-[80px]" />
  </div>
</template>

