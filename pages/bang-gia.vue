<script setup>
const seoTitle = "Bảng giá QRX";
const seoDescription = "Bảng giá QRX";
useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Bảng giá QRX" },
  ],
});
</script>

<template>
  <section class="qrcode-website max-lg:py-0 max-lg:mx-[-16px]">
    <PaymentForm />
  </section>
</template>
