<script setup>
import { SolutionBenefits, CustomerCarousel, Contact, ServicePackagePrice } from "#components";

const seoTitle = "QRX - Zalo Mini App";
const seoDescription =
  "Zalo mini app OA QRX thúc đẩy kinh doanh và chăm sóc khách hàng một cách toàn diện tiếp cận rộng rãi với người dùng Zalo";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Zalo Mini App" },
  ],
});

const featureMiniAppData = [
  {
    name: "Xây dựng các chiến dịch CSKH tự động",
    descriptions: [
      "Hệ thống cá nhân hóa phân phối ưu đãi, voucher,... đến từng khách hàng.",
      "Tùy chỉnh thông điệp Marketing theo từng cá nhân.",
      "Tạo một quy trình chăm sóc đặc biệt cho khách hàng mới.",
      "Tiếp thị lại đối tượng khách hàng cũ bằng thông điệp cá nhân hóa.",
    ],
    imageUrl: "/images/zalo/qrcode-campaign.png",
    imageWidth: 245,
  },
  {
    name: "Tạo hệ thống thẻ thành viên điện tử để xây dựng tệp khách hàng trung thành.",
    descriptions: [
      "Thiết kế chương trình tích điểm và thẻ thành viên online ngay trên app.",
      "Sử dụng công nghệ QR Code để mua hàng tích điểm.",
      "Quy đổi ưu đãi, Voucher để mua hàng nhanh chóng, tiện lợi.",
      "Theo dõi lịch sử tích điểm theo thời gian thực, mọi lúc, mọi nơi. ",
    ],
    imageUrl: "/images/zalo/qrcode-pay-card.png",
    imageWidth: 245,
  },
  {
    name: "Xây dựng chân dung khách hàng thông qua giải pháp quản trị dữ liệu.",
    descriptions: [
      "Dễ dàng phân loại nhóm khách hàng theo lead và khách hàng đã mua thông qua giải pháp quản trị dữ liệu.",
      "Quản lý trực tiếp lịch sử mua sắm và cung cấp báo cáo tổng quan cho khách hàng.",
      "Tích hợp dữ liệu từ các hệ thống CRM/ERP/POS vào một nguồn dữ liệu duy nhất.",
    ],
    imageUrl: "/images/zalo/qrcode-user.png",
    noBackground: true,
    imageWidth: 360,
  },
];
const featuresMiniApp = ref([]);

const featuresBenefitsZaloData = [
  "/images/zalo/phone-benefits.png",
  [
    {
      imageUrL: "/images/icons/serial.png",
      subtitle: "Dung lượng nhỏ",
      text: "Tối ưu hóa hiệu suất ứng dụng để đem lại trải nghiệm mượt mà và nhanh chóng, tạo cảm giác thú vị cho khách hàng.",
    },
    {
      imageUrL: "/images/icons/qrcode.png",
      subtitle: "Chi phí thấp",
      text: "Doanh nghiệp có thể sở hữu một mini app mà không cần đầu tư hàng tỷ đồng như các super app, dễ dàng triển khai và tiếp cận ngay với khách hàng.",
    },
    {
      imageUrL: "/images/icons/sms.png",
      subtitle: "Dễ dàng tích hợp",
      text: "Tại đây, doanh nghiệp Start-up và SMEs Việt có thể tận dụng tất cả những tính năng cần thiết để gia tăng doanh số, quản lý vận hành và tối ưu hóa quy trình làm việc.",
    },
    {
      imageUrL: "/images/icons/sms.png",
      subtitle: "ALL-IN-ONE",
      text: "Tại đây, doanh nghiệp Start-up và SMEs Việt có thể tận dụng tất cả những tính năng cần thiết để gia tăng doanh số, quản lý vận hành và tối ưu hóa quy trình làm việc.",
    },
  ],
];
const featuresBenefitsZalo = ref();

const onInit = async () => {
  featuresMiniApp.value = featureMiniAppData;
  featuresBenefitsZalo.value = featuresBenefitsZaloData;
};
onInit();
</script>

<template>
  <section
    class="py-[120px] px-[40px] max-lg:p-10 max-md:p-4 bg-white lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] relative max-lg:flex max-lg:flex-row-reverse max-lg:justify-between max-lg:items-center max-md:flex-col"
  >
    <div class="absolute max-lg:static max-lg:mb-3 right-[-77px] bottom-0 z-10">
      <nuxt-picture
        loading="lazy"
        src="/images/qrzalo.png"
        :imgAttrs="{ alt: 'qrzalo', width: 543, height: 607 }"
        class="mx-auto"
      />
    </div>

    <div>
      <h1 class="text-secondary">ZALO MINI APP</h1>

      <div class="my-5 max-w-[60%]">
        Giải pháp đa năng trên Zalo OA để kinh doanh và chăm sóc khách hàng một cách toàn diện.
      </div>

      <div class="flex max-md:flex-col items-center gap-5 mt-[44px]">
        <a href="https://mktv2.qrx.com.vn/#/auth/login" target="_blank" class="max-md:w-full" aria-label="register now">
          <button class="primary max-md:w-full" aria-label="register">Đăng ký ngay</button>
        </a>
      </div>
    </div>
  </section>

  <section class="mini-app-in-zalo">
    <h2 class="text-center my-20">Mini App trên Zalo</h2>

    <div
      class="py-[64px] px-[150px] 2xl:container m-auto max-xl:px-10 flex flex-col gap-y-[84px] bg-white rounded-[48px]"
    >
      <div
        v-for="(feature, index) in featuresMiniApp"
        :key="feature.name"
        class="flex max-lg:flex-col items-center gap-x-6 justify-between"
        :class="{ 'flex-row-reverse': index % 2 !== 0 }"
      >
        <div
          :class="{
            'py-[70px] px-[80px] max-lg:py-[50px] max-lg:px-[50px] bg-[#CFA17A1A] rounded-[120px] max-lg:rounded-[100px]':
              !feature.noBackground,
          }"
        >
          <nuxt-picture
            loading="lazy"
            :src="feature.imageUrl"
            :width="feature.imageWidth"
            :imgAttrs="{ alt: feature.name }"
          />
        </div>

        <div class="max-xl:mt-8">
          <div class="subtitle-1">{{ feature.name }}</div>

          <div class="flex flex-col gap-y-[34px] max-xl:gap-y-3 mt-[16px]">
            <div v-for="des in feature.descriptions" :key="des" class="flex items-baseline gap-x-3">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                  <circle cx="6.1084" cy="6" r="6" fill="#ED7F22" />
                </svg>
              </div>

              {{ des }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-center mt-10 2xl:container m-auto pb-[120px] pt-16 bg-white rounded-[25px]">
    <h2>Lợi ích của giải pháp Zalo Mini App</h2>
    <div class="subtitle-2 text-secondary w-3/6 mx-auto mt-4 mb-[100px]">
      Công nghệ chăm sóc khách hàng mang đến giải pháp giúp Doanh nghiệp sở hữu một ứng dụng nhỏ đầy đủ tính năng.
    </div>

    <div class="w-[80%] mx-auto">
      <SolutionBenefits :benefitData="featuresBenefitsZalo" class="text-left" />
    </div>
  </section>

  <section class="mt-[80px]">
    <CustomerCarousel />
  </section>
  <section class="mt-[80px]">
    <ServicePackagePrice />
  </section>

  <section class="mt-[80px]">
    <Contact />
  </section>
</template>
