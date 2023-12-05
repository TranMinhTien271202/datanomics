<script setup>
const seoTitle = "404";
const seoDescription =
  "QRX - Giải pháp quản trị trải nghiệm bán hàng đa kênh dựa trên công nghệ Qr Code. Qr Code marketing, Qr code chống giả, Qr Code bảo hành, Zalo mini app...";

const config = useRuntimeConfig();
const crmBaseUrl = config.public.baseUrl.crm;

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "error 404" },
  ],
});
</script>

<template>
  <div class="text-center max-w-[800px] m-auto">
    <h1 class="mt-[80px] mb-[40px]">Bạn chưa đăng nhập!, Hãy đăng nhập để sử dụng tính năng này.</h1>
    <div class="flex justify-center gap-4 max-md:flex-col">
      <nuxt-link to="/register" aria-label="qrcode solution register">
        <button
          class="large bg-white border border-solid border-[#D9D9D9] shadow-[0px_2px_0px_0px_#0000000B] max-md:w-full"
          aria-label="try-it"
        >
          Đăng ký dùng thử
        </button>
      </nuxt-link>
      <nuxt-link :to="`${crmBaseUrl}/authentication/login`" aria-label="qrcode solution login">
        <button class="primary large shadow-[0px_2px_0px_0px_#0000000B] max-md:w-full" aria-label="login">
          Đăng nhập
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
