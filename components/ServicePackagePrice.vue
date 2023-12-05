<script setup>
import { ref } from "#imports";
import { formatCurrency } from "~/utils/string";
const servicePackages = ref([
  {
    title: "Giá gói dịch vụ Mini app của Miraway",
    price: 0,
    description: "Giá cả sẽ được điều chỉnh tùy theo nhu cầu và mức độ mở rộng của dịch vụ!",
  },
  {
    title: "Giá gói dịch vụ Mini app chính chủ-Cơ bản",
    price: 50000000,
    description: "Giá cả sẽ được điều chỉnh tùy theo nhu cầu và mức độ mở rộng của dịch vụ!",
  },
  {
    title: "Giá gói dịch vụ Mini app của Miraway",
    price: Infinity,
    description: "Giá cả sẽ được điều chỉnh tùy theo nhu cầu và mức độ mở rộng của dịch vụ!",
  },
]);

const getLabel = (servicePackage) => {
  if (!servicePackage.price) {
    return "Free";
  }

  if (servicePackage.price != Infinity) {
    return formatCurrency(servicePackage.price);
  }

  return "Liên hệ";
};
</script>

<template>
  <section class="service-package-price 2xl:container m-auto">
    <div class="grid grid-cols-3 max-md:grid-cols-1 gap-10 text-center">
      <div
        v-for="(servicePackage, index) in servicePackages"
        :key="index"
        class="bg-white rounded-[25px] py-[24px] max-md:py-[32px]"
      >
        <div class="px-[24px] ">
          <div class="subtitle-1">Giá gói dịch vụ Mini app của Miraway</div>
          <div class="border-[2px] border-solid border-gray-100 w-full max-md:w-3/6 my-12 max-md:my-8 mx-auto" />
          <div class="flex flex-row items-baseline justify-center">
            <h1 class="text-primary">
              {{ getLabel(servicePackage) }}
            </h1>
            <span v-if="servicePackage.price && servicePackage.price != Infinity">đ/app</span>
          </div>
        </div>

        <div class="border-[2px] border-solid border-gray-100 w-full my-12 max-md:my-10" />

        <div class="px-[24px]">{{ servicePackage.description }}</div>
      </div>
    </div>
  </section>
</template>
