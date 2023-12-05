<script setup>
const seoTitle = "Tạo QRCode";
const seoDescription = "Tạo QRCode";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Tạo QRCode" },
  ],
});
</script>

<template>
  <section class="qrcode-website max-lg:py-0 max-lg:mx-[-16px]">
    <QrcodeCreateMain />
  </section>
</template>
