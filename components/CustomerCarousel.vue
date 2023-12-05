<template>
  <section id="customer">
    <div class="mt-9 py-[32px] bg-gradient-to-r from-cyan-500 to-blue-500">
      <a-carousel autoplay :autoplay-speed="2000" :dots="false">
        <div class="!grid grid-cols-4 justify-items-center gap-x-6 max-lg:gap-x-2">
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
        </div>

        <div class="!grid grid-cols-4 justify-items-center gap-x-6 max-lg:gap-x-2">
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
          <nuxt-picture loading="lazy" src="/images/logo-white.png" />
        </div>
      </a-carousel>
    </div>
  </section>
</template>