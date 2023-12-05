<script setup lang="ts">
const logo = [
  {
    logo: "/images/logo/Logo.png",
  },
  {
    logo: "/images/logo/Logo-1.png",
  },
  {
    logo: "/images/logo/Logo-2.png",
  },
  {
    logo: "/images/logo/Logo-3.png",
  },
  {
    logo: "/images/logo/Logo-4.png",
  },
  {
    logo: "/images/logo/Logo-5.png",
  },
  {
    logo: "/images/logo/Logo-6.png",
  },
  {
    logo: "/images/logo/Logo-7.png",
  },
  {
    logo: "/images/logo/Logo-8.png",
  },
  {
    logo: "/images/logo/Logo-9.png",
  },
  {
    logo: "/images/logo/Logo-10.png",
  },
  {
    logo: "/images/logo/Logo-11.png",
  },
  {
    logo: "/images/logo/Logo-12.png",
  },
  {
    logo: "/images/logo/Logo-13.png",
  },
  {
    logo: "/images/logo/Logo-14.png",
  },
  {
    logo: "/images/logo/Logo-15.png",
  },
  {
    logo: "/images/logo/Logo-16.png",
  },
  {
    logo: "/images/logo/Logo-17.png",
  },
  {
    logo: "/images/logo/Logo-18.png",
  },
  {
    logo: "/images/logo/Logo-19.png",
  },
  {
    logo: "/images/logo/Logo-20.png",
  },
  {
    logo: "/images/logo/Logo-21.png",
  },
  {
    logo: "/images/logo/Logo-22.png",
  },
  {
    logo: "/images/logo/Logo-23.png",
  },
  {
    logo: "/images/logo/Logo-24.png",
  },
  {
    logo: "/images/logo/Logo-25.png",
  },
  {
    logo: "/images/logo/Logo-26.png",
  },
  {
    logo: "/images/logo/Logo-27.png",
  },
  {
    logo: "/images/logo/Logo-28.png",
  },
  {
    logo: "/images/logo/Logo-29.png",
  },
  {
    logo: "/images/logo/Logo-30.png",
  },
  {
    logo: "/images/logo/Logo-31.png",
  },
  {
    logo: "/images/logo/Logo-32.png",
  },
  {
    logo: "/images/logo/Logo-33.png",
  },
  {
    logo: "/images/logo/Logo-34.png",
  },
  {
    logo: "/images/logo/Logo-35.png",
  },
  {
    logo: "/images/logo/Logo-36.png",
  },
  {
    logo: "/images/logo/Logo-37.png",
  },
  {
    logo: "/images/logo/Logo-38.png",
  },
  {
    logo: "/images/logo/Logo-39.png",
  },
  {
    logo: "/images/logo/Logo-40.png",
  },
  {
    logo: "/images/logo/Logo-41.png",
  },
  {
    logo: "/images/logo/Logo-42.png",
  },
  {
    logo: "/images/logo/Logo-43.png",
  },
];
</script>
<template>
  <section id="customer">
    <div class="text-center">
      <h2>Khách hàng của QRX</h2>
      <div class="subtitle-2 text-third mt-4">20.000+ khách hàng đã tin tưởng sử dụng giải pháp QRX</div>
    </div>
    <div class="mt-5 slide-container 2xl:container m-auto">
      <a-carousel :dots="false">
        <div class="columns-11 max-md:columns-6 gap-3 slide">
          <div v-for="(item, index) in logo" :key="index">
            <div class="break-inside-avoid 2xl:p-[10px] max-md:p-[3px]"><nuxt-picture class="w-full h-full" loading="lazy" :src="item.logo" :imgAttrs="{ alt: 'logo-v1' }" /></div>
          </div>
        </div>
        <div class="columns-11 max-md:columns-6 gap-3 slide">
          <div v-for="(item, index) in logo" :key="index">
            <div class="break-inside-avoid 2xl:p-[10px] max-md:p-[3px]"><nuxt-picture class="w-full h-full" loading="lazy" :src="item.logo" :imgAttrs="{ alt: 'logo-v2' }" /></div>
          </div>
        </div>
      </a-carousel>
    </div>
  </section>
</template>
