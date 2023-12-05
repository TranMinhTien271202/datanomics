<script setup>
const seoTitle = "QRX - Qr Code marketing";
const seoDescription =
  "Qr Code Marketing - Lan tỏa thương hiệu rộng khắp, tương tác với người dùng thông qua việc sử dụng hành vi quét mã QR trong hoạt động tiếp thị.";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Qr Code marketing" },
  ],
});

const imageLaptop3 = "/images/New-Macbook-Pro-Mockup-Front-View2.png";
const imageLaptop4 = "/images/New-Macbook-Pro-Mockup-Front-View3.png";
const imageLaptop5 = "/images/New-Macbook-Pro-Mockup-Front-View4.png";

const image1 = "/images/icons/1.png";
const image2 = "/images/icons/2.png";
const image3 = "/images/icons/3.png";
const image4 = "/images/icons/4.png";
const image5 = "/images/icons/5.png";
const image7 = "/images/icons/7.png";
const imageBlackPhone = "/images/iPhone-12-Pro-Mockup-Front-View1.png";

const benefitData = [
  [
    {
      imageUrL: image1,
      text: "Sử dụng các kênh đa dạng như bao bì sản phẩm và kênh online,.., để kết nối hiệu quả với khách hàng tiềm năng.",
    },
    {
      imageUrL: image3,
      text: "Nâng cao sự tin cậy vào sản phẩm và thương hiệu bằng cách cung cấp thông tin chi tiết và hình ảnh thực tế.",
    },
    {
      imageUrL: image7,
      text: "Tăng doanh thu bằng cách tăng tỷ lệ up-sell/cross-sell thông qua việc sử dụng dữ liệu về nhu cầu của khách hàng.",
    },
  ],
  imageBlackPhone,
  [
    {
      imageUrL: image2,
      text: "Doanh nghiệp có khả năng tự cài đặt, vận hành và tùy chỉnh thông tin mà không cần phải in lại hoặc thay đổi mã QR Code.",
    },
    {
      imageUrL: image5,
      text: "Ngăn chặn quá tải thông tin trên bao bì và tiết kiệm thời gian bằng cách tối ưu hóa giao diện cho thiết bị di động.",
    },
    {
      imageUrL: image4,
      text: "Quản lý dễ dàng với quy trình vận hành đơn giản, giúp tiết kiệm thời gian trong việc báo cáo và truy xuất dữ liệu.",
    },
  ],
];

const features = [
  {
    name: "Tùy chỉnh thông tin hiển thị của QR Code sau khi đã in và phân phối ra thị trường.",
    descriptions: [
      "Có khả năng thay đổi trang đích liên kết với QR Code một cách dễ dàng, cho phép chỉnh sửa thông tin sau QR Code, ngay cả sau khi đã in và phân phối ra thị trường.",
      "Khóa tem từ xa trên hệ thống khi phát hiện cảnh báo hàng giả.",
    ],
    imageUrl: imageLaptop3,
  },
  {
    name: "Tạo QR Code được thiết kế với màu sắc và logo để tăng tính nhận diện.",
    descriptions: [
      "Dễ dàng tích hợp màu sắc chủ đạo hoặc logo vào QR Code để tạo sự nhất quán với bộ nhận diện thương hiệu, tạo ấn tượng lâu dài và giúp khách hàng ghi nhớ về doanh nghiệp.",
    ],
    imageUrl: imageLaptop4,
  },
  {
    name: "Hệ thống quản trị giúp quản lý và thống kê thông tin sản phẩm nhanh chóng và tối ưu.",
    descriptions: [
      "Doanh nghiệp được cung cấp tài khoản quản lý riêng, giúp dễ dàng quản lý và tùy chỉnh thông tin của mã QR Code.",
      "Sử dụng dữ liệu người dùng thu thập được để hỗ trợ hoạt động Marketing và chăm sóc khách hàng.",
      "Tạo báo cáo thống kê về khách hàng và lịch sử tương tác với mã QR Code.",
    ],
    imageUrl: imageLaptop5,
  },
];

const activeFeatureTab = ref("manageProduct");
const featureWarrantySliders = [
  {
    tab: "manageProduct",
    no: 1,
    title: "1. Quản lý sản phẩm",
    content: [
      {
        image: "/images/solutions/img-manage-product.svg",
        subtitle: "Quản lý hàng hóa, thuộc tính đa dạng",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
      {
        image: "/images/solutions/img-manage-qrcode.svg",
        subtitle: "Quản lý QR Code",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
    ],
  },
  {
    tab: "manageContact",
    no: 2,
    title: "2. Quản lý contact",
    content: [
      {
        image: "/images/solutions/img-manage-content.svg",
        subtitle: "Quản lý thông tin khách hàng hiệu quả, nhanh chóng",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
      {
        image: "/images/solutions/img-feedback.svg",
        subtitle: "Phản hồi ý kiến khách hàng",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
    ],
  },
  {
    tab: "manageReport",
    no: 3,
    title: "3. Báo cáo doanh thu, tài chính",
    content: [
      {
        image: "/images/solutions/img-manage-content.svg",
        subtitle: "Tinh chỉnh và tối ưu hóa việc quản lý doanh thu",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
      {
        image: "/images/solutions/img-manage-qrcode.svg",
        subtitle: "Quản lý QR Code",
        description:
          "Hàng hoá được sắp xếp theo danh mục, quản lý bằng mã số riêng. Tùy biến đa dạng các kiểu phân loại sản phẩm.",
      },
    ],
  },
];
</script>

<template>
  <section
    class="py-[120px] 2xl:container m-auto px-[40px] max-lg:p-10 max-md:p-4 bg-white lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] relative"
  >
    <div class="absolute max-lg:static max-lg:mb-3 right-[-30px] bottom-[-10px] z-10">
      <nuxt-picture
        loading="lazy"
        src="/images/qrmarketing.png"
        :imgAttrs="{ alt: 'qrmarketing', width: 615, height: 617 }"
        class="mx-auto"
      />
    </div>

    <h1 class="text-secondary">QR CODE MARKETING</h1>

    <ul class="mt-9 list-disc lg:w-1/2">
      <li>Số hóa đa dạng thông tin chỉ qua QR Code với nhiều định dạng (Landing page, Video, Hình ảnh,…)</li>
      <li class="mt-2">Dễ dàng cập nhật và chỉnh sửa nội dung sau khi QR Code đã được in và phát hành.</li>
      <li class="mt-2">
        Nâng cao sự nhận biết thương hiệu bằng cách tạo ra mã QR Code độc quyền được tùy chỉnh cho công ty..
      </li>
    </ul>

    <div class="flex max-md:flex-col items-center gap-5 mt-[44px]">
      <a href="https://mktv2.qrx.com.vn/#/auth/login" target="_blank" class="max-md:w-full" aria-label="register now">
        <button class="primary max-md:w-full" aria-label="register">Đăng ký ngay</button>
      </a>
    </div>
  </section>

  <section class="px-6 pt-[40px] 2xl:container m-auto pb-[60px] max-lg:py-0 mt-[80px]">
    <div class="text-center">
      <h2>Lợi ích của giải pháp QRCode Marketing</h2>

      <div class="subtitle-2 text-third mt-4">
        Hỗ trợ doanh nghiệp tương tác với người dùng thông qua việc sử dụng hành vi quét mã <br class="max-md:hidden"> QR Code trong hoạt động tiếp
        thị.
      </div>
    </div>

    <SolutionBenefits :benefitData="benefitData" />
  </section>

  <section class="mt-[80px] 2xl:container m-auto">
    <h2 class="text-center">Tính năng nổi trội của gói giải pháp Marketing</h2>

    <FeatureWarranty :sliders="featureWarrantySliders" v-model:active-tab="activeFeatureTab" />

    <h3 class="text-center py-5 text-white bg-primary -mx-20 max-xl:-mx-4">4. Tính năng quản lý QR Marketing</h3>

    <Features :features="features" />
  </section>

  <section class="mt-[80px]">
    <CustomerCarousel />
  </section>

  <section class="mt-[80px]">
    <QouteProduct />
  </section>

  <section class="mt-[80px]">
    <Contact />
  </section>
</template>
