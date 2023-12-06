<template>
  <section id="customer">
    <div class="text-center">
      <span class="text-[36px] text-[#23262F] font-bold">Trusted by many <span class="text-primary text-[36px] font-bold">companies</span></span>
    </div>
    <div class="mt-9 py-[32px]">
      <a-carousel :dots="false">
        <div class="!grid grid-cols-4 justify-items-center gap-x-6 max-lg:gap-x-2">
          <nuxt-picture loading="lazy" src="/images/logo/ING_logo.png" />
          <nuxt-picture loading="lazy" src="/images/logo/miraway.png" />
          <nuxt-picture loading="lazy" src="/images/logo/ark.png" />
          <nuxt-picture loading="lazy" src="/images/logo/vpbank.png" />
        </div>

        <div class="!grid grid-cols-4 justify-items-center gap-x-6 max-lg:gap-x-2">
          <nuxt-picture loading="lazy" src="/images/logo/ING_logo.png" />
          <nuxt-picture loading="lazy" src="/images/logo/miraway.png" />
          <nuxt-picture loading="lazy" src="/images/logo/ark.png" />
          <nuxt-picture loading="lazy" src="/images/logo/vpbank.png" />
        </div>
      </a-carousel>
    </div>
  </section>
</template>

