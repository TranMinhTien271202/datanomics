<script setup>
const listProduct = [
  {
    title: "Điện tử tiêu dùng",
    data: [
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/xac-pisen.png",
        slug: "xac-pisen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/xac-pisen-1.png",
        slug: "xac-pisen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/cong-chuyen-doi-pisen.png",
        slug: "hub-pinsen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/tu-lanh-pisen.png",
        slug: "tu-lanh-pisen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/loa-pisen.png",
        slug: "loa-pisen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/binh-phun-xuong-pisen.png",
        slug: "binh-phun-xuong-pisen",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "images/pisen/xac-pisen-2.png",
        slug: "xac-pisen-2",
      },
      {
        title: "Điện tử tiêu dùng",
        images: "/images/pisen/quat-pisen.png",
        slug: "quat-pinsen",
      },
    ],
  },
  {
    title: "Dược phẩm",
    data: [
      {
        title: "Dược phẩm",
        images: "/images/pisen/duoc-pham2.png",
        slug: "duoc-pham2",
      },
      {
        title: "Dược phẩm",
        images: "/images/pisen/duoc-pham4.png",
        slug: "duoc-pham4",
      },
      {
        title: "Dược phẩm",
        images: "images/pisen/duoc-pham5.png",
        slug: "duoc-pham5",
      },
      {
        title: "Dược phẩm",
        images: "images/pisen/duoc-pham6.png",
        slug: "duoc-pham6",
      },
      {
        title: "Dược phẩm",
        images: "images/pisen/duoc-pham7.png",
        slug: "duoc-pham7",
      },
      {
        title: "Dược phẩm",
        images: "/images/pisen/duoc-pham8.png",
        slug: "duoc-pham8",
      },
      {
        title: "Dược phẩm",
        images: "/images/pisen/duoc-pham9.png",
        slug: "duoc-pham9",
      },
      {
        title: "Dược phẩm",
        images: "/images/pisen/duoc-pham10.png",
        slug: "duoc-pham10",
      },
    ],
  },
  {
    title: "Hàng tiêu dùng",
    data: [
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/duoc-pham.png",
        slug: "duoc-pham",
      },
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/tra-xanh.png",
        slug: "tra-xanh",
      },
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/tieudung6.png",
        slug: "tieudung6",
      },
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/tieudung2.png",
        slug: "tieudung2",
      },
      {
        title: "Hàng tiêu dùng",
        images: "images/pisen/golden_pen_in_boxes_mockup-2.png",
        slug: "golden_pen_in_boxes_mockup-2",
      },
      {
        title: "Hàng tiêu dùng",
        images: "images/pisen/tieudung3.png",
        slug: "tieudung3",
      },
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/tieudung4.png",
        slug: "tieudung4",
      },
      {
        title: "Hàng tiêu dùng",
        images: "/images/pisen/tieudung5.png",
        slug: "tieudung5",
      },
    ],
  },
  {
    title: "Thực phẩm, đồ uống",
    data: [
      {
        title: "Thực phẩm, đồ uống",
        images: "/images/pisen/thuc-pham.png",
        slug: "thuc-pham",
      },
      {
        title: "Thực phẩm, đồ uống",
        images: "/images/pisen/thuc-pham2.png",
        slug: "thuc-pham2",
      },
      {
        title: "Thực phẩm, đồ uống",
        images: "/images/pisen/tieudung2.png",
        slug: "tieudung2",
      },
      {
        title: "Thực phẩm, đồ uống",
        images: "/images/pisen/thuc-pham3.png",
        slug: "thuc-pham3",
      },
      {
        title: "Thực phẩm, đồ uống",
        images: "/images/pisen/thuc-pham4.png",
        slug: "thuc-pham4",
      },
    ],
  },
  {
    title: "Mỹ phẩm",
    data: [
      {
        title: "Mỹ phẩm",
        images: "/images/pisen/my-pham1.png",
        slug: "my-pham1",
      },
      {
        title: "Mỹ phẩm",
        images: "/images/pisen/my-pham2.png",
        slug: "my-pham2",
      },
      {
        title: "Mỹ phẩm",
        images: "/images/pisen/my-pham3.png",
        slug: "my-pham3",
      },
      {
        title: "Mỹ phẩm",
        images: "/images/pisen/my-pham4.png",
        slug: "my-pham4",
      },
      {
        title: "Mỹ phẩm",
        images: "/images/pisen/my-pham5.png",
        slug: "my-pham5",
      },
    ],
  },
];
const stepCurrent = ref(0);
</script>

<template>
  <section class="xl:-mx-20 py-[80px] bg-[#FAFAFA]">
    <div class="text-center w-[715px] max-lg:w-3/4 m-auto">
      <h2>Các mẫu thiết kế mã QR Code</h2>
      <p class="ubtitle-2 text-third mt-4">
        Mẫu tem QR Code của QRX với nhiều thiết kế đa dạng, phù hợp sẽ đáp ứng mọi yêu cầu và sở thích của khách hàng
      </p>
    </div>
    <div class="flex lg:flex-wrap max-lg:overflow-scroll gap-[5px] justify-center max-lg:justify-start py-[24px]">
      <div v-for="(products, index) in listProduct" :key="index" @click="stepCurrent = index">
        <button class="w-max h-fit rounded-[24px] border-[3px]" :class="{ 'border-[#ED7F22]': stepCurrent === index }">
          {{ products.title }}
        </button>
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center max-xl:justify-around mt-[40px]"
      v-for="(products, index) in listProduct"
      :key="index"
      :class="{ hidden: index != stepCurrent }"
    >
      <div class="w-1/5 m-[5px] max-lg:w-1/3" v-for="product in products.data" :key="product.slug">
        <nuxt-picture loading="lazy" :src="product.images" :imgAttrs="{ alt: product.slug }" />
      </div>
    </div>
  </section>
</template>
