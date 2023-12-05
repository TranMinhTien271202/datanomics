<template>
  <section
    class="py-[120px] 2xl:container m-auto px-[40px] max-lg:p-10 max-md:p-4 bg-[#f9eee4] lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] relative"
  >
    <div
      class="absolute max-lg:static max-lg:mb-3 max-lg:flex max-lg:justify-center right-[-2px] top-[-45px] bottom-[-10px] z-10"
    >
      <nuxt-picture loading="lazy" src="/images/coin.png" :imgAttrs="{ alt: 'qrmarketing' }" class="mx-auto" />
    </div>
    <h1
      class="max-w-[512px] text-secondary mt-9 list-disc lg:w-1/2 max-lg:text-center max-md:max-w-[278px] max-lg:m-auto"
    >
      Dùng thử miễn phí ngay hôm nay
    </h1>
    <nuxt-link to="/register">
      <button class="primary max-md:w-full mt-[24px] w-full list-disc lg:w-1/2" aria-label="register">
        Dùng thử miễn phí
      </button>
    </nuxt-link>
  </section>
</template>
