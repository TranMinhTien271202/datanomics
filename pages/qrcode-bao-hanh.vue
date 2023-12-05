<script setup>
const seoTitle = "QRX - Qr Bảo hành";
const seoDescription =
  "QR Bảo hành QRX - Giải quyết vấn nạn truy xuất bảo hành, Tiết kiệm chi phí in ấn QR, Cải thiện hiệu quả quy trình bảo hành.";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "QR Bảo hành" },
  ],
});

const windowQrIcon = "/images/icons/window-qr.png";
const image7 = "/images/icons/7.png";
const codeBokIcon = "/images/icons/code-box.png";
const image2 = "/images/icons/2.png";
const userIcon = "/images/icons/user.png";
const imageBlackPhone = "/images/iPhone-12-Pro-Mockup-Front-View2.png";

const benefitData = [
  [
    {
      imageUrL: windowQrIcon,
      text: "Tem QR Code thay thế giấy bảo hành để giảm chi phí in ấn, thiết kế và quản lý lưu trữ.",
    },
    {
      imageUrL: image7,
      text: "Up-sell sản phẩm khác hoặc gói gia hạn bảo hành thông qua tính năng nhắc nhở lịch bảo hành.",
    },
    {
      imageUrL: codeBokIcon,
      text: "Hệ thống đồng bộ dữ liệu giúp giảm thời gian và công sức triển khai quy trình bảo hành.",
    },
  ],
  imageBlackPhone,
  [
    {
      imageUrL: image2,
      text: "Tối ưu hoá chăm sóc khách hàng và tăng cường remarketing thông qua việc hệ thống tổng hợp dữ liệu chi tiết về khách hàng.",
    },
    {
      imageUrL: windowQrIcon,
      text: "Tối ưu quản lý toàn trình  sản phẩm bằng việc tích hợp tính năng chống giả và bảo hành trên cùng 1 tem.",
    },
    {
      imageUrL: userIcon,
      text: "Tiếp nhận dữ liệu khách hàng mà không đòi hỏi quá trình nghiên cứu hay triển khai phức tạp.",
    },
  ],
];
</script>

<template>
  <section
    class="py-[120px] px-[40px] max-lg:p-10 max-md:p-4 bg-white lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] relative max-lg:flex max-lg:flex-row-reverse max-lg:justify-between max-lg:items-center max-md:flex-col"
  >
    <div class="absolute max-lg:static max-lg:mb-3 right-[-20px] bottom-[-30px] z-10">
      <nuxt-picture
        loading="lazy"
        src="/images/qrwarranty.png"
        :imgAttrs="{ alt: 'qrwarranty', width: 565, height: 580 }"
        class="mx-auto"
      />
    </div>

    <div class="xl:max-w-[55%]">
      <h1 class="text-secondary">BẢO HÀNH ĐIỆN TỬ QR CODE</h1>

      <ul class="mt-9 list-disc max-lg:w-full">
        <li>Thay thế phiếu bảo hành - đơn giản hóa quy trình bảo hành</li>
        <li class="mt-2">Theo dõi tình trạng bảo hành và báo cáo kết quả tự động</li>
      </ul>

      <div class="flex max-md:flex-col items-center gap-5 mt-[44px]">
        <a href="https://mktv2.qrx.com.vn/#/auth/login" target="_blank" class="max-md:w-full" aria-label="register now">
          <button class="primary max-md:w-full" aria-label="register">Dùng thử miễn phí</button>
        </a>
      </div>
    </div>
  </section>

  <section class="mt-[80px]">
    <AboutQrx />
  </section>

  <section class="mt-[80px] xl:-mx-20 py-[40px] bg-[#F5F5F5]">
    <div class="text-center w-4/5 m-auto">
      <h2>Xác thực điện tử</h2>
      <p class="ubtitle-2 text-third mt-4">
        Bạn và khách hàng vô cùng an tâm chỉ sau 3 bước truy xuất thông tin đơn giản.
      </p>
    </div>
    <div class="flex max-lg:flex-wrap justify-center max-xl:mt-[16px] px-[20px]">
      <div class="flex flex-wrap">
        <div class="flex flex-col items-center">
          <div class="xl:h-[321px] lg:h-[268px] flex justify-center items-center">
            <nuxt-picture
              loading="lazy"
              src="/images/qrcode-anti-fake/tem-chong-gia-qrcode.png"
              :imgAttrs="{ alt: 'tem-chong-gia' }"
            />
          </div>
          <div class="text-center">
            <h2 class="text-[24px]">Cào phủ lớp bạc</h2>
            <p>Để lấy mã xác thực và mã QR Code</p>
          </div>
        </div>
      </div>
      <div class="mt-[125px] xl:mx-[54px] max-lg:w-full max-xl:mt-[20px] max-xl:flex justify-center items-center">
        <div class="w-[80px] h-[2px] m-auto bg-[#D9D9D9] md:my-10 max-lg:hidden"></div>
        <div class="w-[2px] h-[80px] bg-[#D9D9D9] lg:hidden"></div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-col items-center">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-warranty/chonggia_tem1-5.png"
            :imgAttrs="{ alt: 'tem-chong-gia' }"
          />
          <div class="text-center">
            <h2 class="text-[24px]">Quét mã QR</h2>
            <p>Để xác thực sản phẩm</p>
          </div>
        </div>
      </div>
      <div class="mt-[125px] xl:mx-[54px] max-lg:w-full max-xl:mt-[20px] max-xl:flex justify-center items-center">
        <div class="w-[80px] h-[2px] m-auto bg-[#D9D9D9] md:my-10 max-lg:hidden"></div>
        <div class="w-[2px] h-[80px] bg-[#D9D9D9] lg:hidden"></div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-col items-center">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-warranty/chonggia_tem1-6.png"
            :imgAttrs="{ alt: 'tem-chong-gia' }"
          />
          <div class="text-center">
            <h2 class="text-[24px]">Hoàn tất nhập mã</h2>
            <p>Hệ thống trả về thông tin xác thực</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 2xl:container m-auto pt-[40px] pb-[60px] max-lg:py-0 mt-[80px]">
    <div class="text-center">
      <h2>Lợi ích của giải pháp QRCode bảo hành</h2>

      <div class="subtitle-2 text-third mt-4">
        Sử dụng tem QR Code giúp tiết kiệm chi phí và cải thiện hiệu quả quy trình bảo hành.
      </div>
    </div>

    <SolutionBenefits :benefitData="benefitData" />
  </section>

  <section class="mt-[80px]">
    <div class="text-center">
      <div class="text-center">
        <h2>Tem bảo hành QRX</h2>
        <div class="subtitle-2 text-third mt-4">
          Tem QR Code bảo hành của QRX cấu tạo đặc biệt để tránh hành vi làm giả tem
        </div>
      </div>
      <div class="flex flex-wrap max-lg:flex-col max-lg:justify-center mt-[50px]">
        <div class="flex flex-col justify-center lg:hidden">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-warranty/tem-product2.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode3' }"
            width="343px"
            class="m-auto"
          />
          <div class="flex justify-center flex-col mt-[10px] max-lg:mt-[30px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-warranty/chonggia_tem1-4.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode4' }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">Mã xác thực</p>
              <p class="text-[16px] mt-[5px]">Khách hàng đối chiếu hoặc nhập vào hệ thống để xác thực sản phẩm.</p>
            </div>
          </div>
        </div>
        <div class="w-1/3 max-lg:w-full flex flex-col max-lg:my-[60px]">
          <div class="flex justify-center flex-col">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-1.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode5' }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">Logo thương hiệu</p>
              <p class="text-[16px] mt-[5px]">Giúp người dùng nhận diện thương hiệu một cách nhanh chóng và mạnh mẽ</p>
            </div>
          </div>
          <div class="flex justify-center flex-col mt-[70px] max-xl:mt-[40px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-2.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode5' }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">Tổng đài tin nhắn</p>
              <p class="text-[16px] mt-[5px]">Xác thực sản phẩm nhanh chóng, chính xác với cú pháp tin nhắn SMS.</p>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex justify-center max-lg:w-full max-lg:my-[60px] max-lg:hidden">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-warranty/tem-product.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode6' }"
          />
        </div>
        <div class="w-1/3 max-lg:w-full flex flex-col mt-[20px]">
          <div class="flex justify-center flex-col relative -top-[50px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-3.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode7' }"
                width="113px"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">QRCode Bảo hành</p>
              <p class="text-[16px] mt-[5px]">
                Mã QR Code cố định hoặc biến đổi tùy thuộc vào từng loại tem QR Code bảo hành.
              </p>
            </div>
          </div>
          <div class="flex justify-center flex-col -mt-[10px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-4.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode8' }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">Serial</p>
              <p class="text-[16px] mt-[5px]">Số serial độc nhất trên từng tem QR Code QRX</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col mt-[10px] max-lg:mt-[30px] max-lg:hidden">
        <div class="flex justify-center">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-warranty/chonggia_tem1-4.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode8' }"
          />
        </div>
        <div class="w-[302px] m-auto mt-[18px]">
          <p class="text-[#ED7F22] text-[24px]">Mã xác thực</p>
          <p class="text-[16px] mt-[5px]">Khách hàng đối chiếu hoặc nhập vào hệ thống để xác thực sản phẩm.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-[80px]">
    <AppAntiFakeQrx />
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
