<script setup>
const seoTitle = "Hỗ trợ";
const seoDescription = "Hỗ trợ";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Hỗ trợ" },
  ],
});
</script>

<template>
  <section class="px-10 py-[160px] 2xl:container m-auto max-md:p-10 max-sm:p-4 bg-white rounded-[48px] relative">
    <div class="absolute max-md:static max-md:mb-8 top-[-20px] max-xl:top-0 right-[30px]">
      <nuxt-picture
        loading="lazy"
        src="/images/support.png"
        class="max-sm:w-full"
        :imgAttrs="{ class: 'w-full', alt: 'support' }"
      />
    </div>

    <h1 class="text-secondary md:w-1/2">Chào mừng bạn đến với trang hỗ trợ của QRX</h1>
  </section>

  <CommonQuestion class="mt-[80px] 2xl:container m-auto max-lg:mt-[80px]" />

  <section class="mt-[80px] 2xl:container m-auto max-lg:mt-[80px]">
    <div class="text-center">
      <h2>Tài liệu hướng dẫn</h2>
      <div class="subtitle-2 text-third mt-8 max-lg:mt-2">
        Giúp bạn tìm hiểu cách sử dụng phần mềm và giải pháp QR Code
      </div>

      <div class="flex max-lg:flex-col gap-x-6 max-lg:gap-y-4 mt-16 max-lg:mt-8">
        <div class="flex-1 bg-white rounded-3xl py-6 px-4 text-center">
          <nuxt-picture loading="lazy" src="/images/pdf.png" width="120" :imgAttrs="{ class: 'mx-auto', alt: 'pdf' }" />

          <div class="subtitle-1 mt-9">HDSD Tem QR Code chống giả</div>

          <div class="flex gap-x-5 mt-7">
            <button class="primary flex-1 small" aria-label="see-now">Xem ngay</button>
            <button class="flex-1 small" aria-label="download">Tải xuống</button>
          </div>
        </div>

        <div class="flex-1 bg-white rounded-3xl py-6 px-4 text-center">
          <nuxt-picture loading="lazy" src="/images/pdf.png" width="120" :imgAttrs="{ class: 'mx-auto', alt: 'pdf' }" />

          <div class="subtitle-1 mt-9">Hướng dẫn quét mã QR Code</div>

          <div class="flex gap-x-5 mt-7">
            <button class="primary flex-1 small" aria-label="see-now">Xem ngay</button>
            <button class="flex-1 small" aria-label="download">Tải xuống</button>
          </div>
        </div>

        <div class="flex-1 bg-white rounded-3xl py-6 px-4 text-center">
          <nuxt-picture loading="lazy" src="/images/pdf.png" width="120" :imgAttrs="{ class: 'mx-auto', alt: 'pdf' }" />

          <div class="subtitle-1 mt-9">Hướng dẫn tạo QR Code</div>

          <div class="flex gap-x-5 mt-7">
            <button class="primary flex-1 small" aria-label="see-now">Xem ngay</button>
            <button class="flex-1 small" aria-label="download">Tải xuống</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-[80px] max-lg:mt-[80px]">
    <Contact />
  </section>
</template>
