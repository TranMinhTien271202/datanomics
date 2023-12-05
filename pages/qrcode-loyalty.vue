<script setup>
const seoTitle = "QRX - QR Code Loyalty";
const seoDescription =
  "Theo dõi quá trình và tạo báo cáo tự động, độc lập với dữ liệu từ đại lý Triển khai ngay trên sản phẩm, không cần thẻ cứng";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Tích điểm sản phẩm" },
  ],
});

const imageFeatures = "/images/New-Macbook-Pro-Mockup-Front-View.png";
const imageFeatures2 = "/images/New-Macbook-Pro-Mockup-Front-View8.png";
const imageFeatures3 = "/images/New-Macbook-Pro-Mockup-Front-View9.png";
const windowQrIcon = "/images/icons/window-qr.png";
const image7 = "/images/icons/7.png";
const eye = "/images/icons/eye.png";
const discountIcon = "/images/icons/discount.png";
const image2 = "/images/icons/2.png";
const imageBlackPhone = "/images/iPhone-12-Pro-Mockup-Front-View3.png";

const benefitData = [
  [
    {
      imageUrL: windowQrIcon,
      text: "Tiết kiệm chi phí in ấn thẻ tích điểm bằng cách in mã QR trực tiếp lên sản phẩm.",
    },
    {
      imageUrL: image7,
      text: "Tự sở hữu và quản lý 100% dữ liệu khách hàng tham gia trên hệ thống, đơn giản trong việc sao lưu và truy xuất.",
    },
    {
      imageUrL: discountIcon,
      text: "Tăng cường trải nghiệm khách hàng với việc tích điểm và đổi quà trực tiếp trên điện thoại, tiết kiệm thời gian không cần đến cửa hàng.",
    },
  ],
  imageBlackPhone,
  [
    {
      imageUrL: image7,
      text: "Tối ưu hoá chất lượng chăm sóc khách hàng và tăng cường chiến lược remarketing thông qua việc sử dụng dữ liệu chi tiết về khách hàng.",
    },
    {
      imageUrL: eye,
      text: "Đảm bảo kiểm soát và giới hạn tình trạng gian lận trong quá trình hoạt động của các đại lý.",
    },
    {
      imageUrL: image2,
      text: "Tự động phân phối giải thưởng một cách hợp lý và hiệu quả, tránh tình trạng giải thưởng chưa được sử dụng hoặc còn dư thừa.",
    },
  ],
];

const features = [
  {
    name: "Tự do sắp xếp kịch bản và phân phối giải thưởng theo ý muốn.",
    descriptions: [
      "Dễ dàng cài đặt chương trình: Tạo chương trình khuyến mãi, chọn kịch bản, quyết định phần thưởng cho khách hàng và lên lịch triển khai.",
      "Tinh chỉnh tỷ lệ trúng thưởng, điều chỉnh tỷ lệ rơi quà để tránh việc dư thừa quà có giá trị cao sau khi chương trình kết thúc.",
    ],
    imageUrl: imageFeatures,
  },
  {
    name: "Phân quyền cho nhân viên quản lý và đại lý để tham gia vào chương trình và quản lý.",
    descriptions: [
      "Thêm mới và phân quyền cho đại lý tham gia vào chương trình và sử dụng các quà tặng của chương trình.",
      "Qua việc sử dụng mã QR Code trên sản phẩm, có thể dễ dàng phân luồng khuyến mãi riêng cho cả đại lý và người tiêu dùng.",
      "Cung cấp quyền hạn cho nhân viên có thể quản lý các khía cạnh như quản lý quà tặng, tài trợ và quản lý trúng thưởng.",
    ],
    imageUrl: imageFeatures2,
  },
  {
    name: "Hệ thống tự động sẽ tiến hành báo cáo và quản lý khách hàng tham gia chương trình.",
    descriptions: [
      "Hệ thống tự động ghi nhận thông tin của tất cả người tham gia chương trình, không chỉ giới hạn trong việc lấy thông tin của người thắng giải như trong trường hợp sử dụng thẻ cứng.",
      "Hệ thống cung cấp báo cáo chi tiết về thông tin khách hàng tham gia và khách hàng trúng giải theo thời gian thực.",
    ],
    imageUrl: imageFeatures3,
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
]
</script>

<template>
  <section
    class="py-[120px] px-[40px] max-lg:p-10 max-md:p-4 bg-white lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] relative max-2xl:overflow-hidden max-lg:flex max-lg:flex-row-reverse max-lg:justify-between max-lg:items-center max-md:flex-col"
  >
    <div class="absolute max-lg:static max-lg:mb-3 right-[-30px] bottom-[50px] z-10">
      <nuxt-picture
        loading="lazy"
        src="/images/qrloyalty.png"
        :imgAttrs="{ alt: 'qrloyalty', width: 618, height: 501 }"
        class="mx-auto"
      />
    </div>

    <div>
      <h1 class="text-secondary">QR CODE LOYALTY</h1>

      <ul class="mt-9 list-disc lg:w-1/2">
        <li>Theo dõi quá trình và tạo báo cáo tự động - Độc lập với dữ liệu từ đại lý.</li>
        <li class="mt-2">Triển khai ngay trên sản phẩm - Không cần thẻ cứng.</li>
      </ul>

      <div class="flex max-md:flex-col items-center gap-5 mt-[44px]">
        <a href="https://mktv2.qrx.com.vn/#/auth/login" target="_blank" class="max-md:w-full" aria-label="register now">
          <button class="primary max-md:w-full" aria-label="register">Đăng ký ngay</button>
        </a>
      </div>
    </div>
  </section>

  <section class="2xl:container m-auto pb-[60px] max-lg:py-0 mt-[80px]">
    <div class="text-center">
      <h2>Lợi ích của giải pháp QRCode Loyalty</h2>

      <div class="subtitle-2 text-third mt-4 px-60 max-xl:px-20 max-sm:px-0">
        Triển khai khuyến mãi, trúng thưởng, tích điểm ngay trên sản phẩm thông qua hành vi quét mã QR, có thể áp dụng
        đồng thời cho người tiêu dùng (QR Code Loyalty) và kênh phân phối.
      </div>
    </div>

    <SolutionBenefits :benefitData="benefitData" />
  </section>

  <section class="mt-[80px] 2xl:container m-auto">
    <h2 class="text-center">Tính năng nổi trội của gói giải pháp QRCode Loyalty</h2>

    <FeatureWarranty :sliders="featureWarrantySliders" v-model:active-tab="activeFeatureTab" />

    <h3 class="text-center py-5 text-white bg-primary -mx-20 max-xl:-mx-4">4. Tính năng quản lý QR Loyalty</h3>

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
