<script setup>
const seoTitle = "QrX - Quản trị trải nghiệm bán hàng";
const seoDescription =
  "QRX - Giải pháp quản trị trải nghiệm bán hàng đa kênh dựa trên công nghệ Qr Code. Qr Code marketing, Qr code chống giả, Qr Code bảo hành, Zalo mini app...";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "QrX" },
  ],
});

const blogs = ref([]);

const getBlogsAll = async () => {
  blogs.value = await getBlogsBase(3, [], [9]);
};

onMounted(() => {
  getBlogsAll();
});
</script>

<template>
  <div class="home-page">
    <section class="rounded-[48px] relative">
      <div class="max-sm:hidden -mx-20 max-lg:-mx-4">
        <nuxt-picture
          loading="lazy"
          src="/images/home-banner.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner' }"
          class="w-full"
        />
      </div>
      <div class="sm:hidden -mx-4">
        <nuxt-picture
          loading="lazy"
          src="/images/home-banner-mobile.png"
          :imgAttrs="{ class: 'w-full', alt: 'home-banner-mobile' }"
          class="w-full"
        />
      </div>

      <div
        class="absolute max-2xl:bottom-[15px] top-1/2 max-md:top-[90px] max-md:left-[16px] left-[80px] md:-translate-y-1/2"
      >
        <h1 class="text-secondary max-sm:text-white">QR EXPERIENCE</h1>

        <p class="w-2/4 text-[16px] max-sm:text-[12px] max-sm:w-full font-[600] max-sm:text-white mt-2 max-sm:mt-4 text-black">
          QRX - Bộ giải pháp hỗ trợ doanh nghiệp chuyển đổi số kinh doanh theo mô hình Direct to Consumer (phân phối sản
          phẩm trực tiếp đến tay người tiêu dùng)
        </p>

        <div class="relative pt-3">
          <nuxt-link to="/tao-ma-qr">
            <button
              class="rounded-[12px] w-[209px] h-[56px] bg-[#ED7F22] text-[#fff] border-e-0 max-md:hidden border-none"
              aria-label="solution-miraway"
            >
              Tìm hiểu ngay
            </button>
          </nuxt-link>
        </div>
      </div>
    </section>

    <section id="solutions" class="mt-[80px]">
      <div class="text-center">
        <h2>Hệ sinh thái QRX</h2>
        <div class="subtitle-2 text-secondary mt-4">
          Hệ sinh thái quản lý trải nghiệm bán hàng đa kênh dựa trên QRcode
        </div>
      </div>

      <div class="flex max-lg:flex-col flex-wrap gap-x-[24px] max-lg:gap-y-4 mt-[80px] max-lg:mt-[50px]">
        <div class="flex-1">
          <div class="py-[70px] px-[80px] bg-[#CFA17A1A] rounded-[120px]">
            <div class="rounded-[30px] mx-auto w-fit" style="box-shadow: -36px 54px 97px 0px rgba(0, 0, 0, 0.25)">
              <nuxt-picture
                loading="lazy"
                src="/images/phone-tich-diem.png"
                width="239"
                :imgAttrs="{ alt: 'phone-tich-diem' }"
              />
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div id="qr-marketing" class="flex items-start gap-x-6">
            <nuxt-picture
              loading="lazy"
              src="/images/icons/7.png"
              class="shrink-0"
              width="85"
              :imgAttrs="{ alt: 'icon' }"
            />
            <div>
              <h3>QR Marketing</h3>
              <div class="mt-3">
                Dễ dàng tạo mã QR Code sinh động, cá nhân hóa. Lan tỏa thông điệp của bạn và thấu hiểu hành vi khách
                hàng.
              </div>
              <div class="mt-5">
                <nuxt-link to="/qrcode-marketing" class="text-primary"> Xem thêm </nuxt-link>
              </div>
            </div>
          </div>

          <div id="qr-chong-gia" class="flex items-start mt-[35px] gap-x-6">
            <nuxt-picture
              loading="lazy"
              src="/images/icons/6.png"
              class="shrink-0"
              width="85"
              :imgAttrs="{ alt: 'icon' }"
            />

            <div>
              <h3>QR Chống giả</h3>

              <div class="mt-3">
                QRX giúp doanh nghiệp chống giả qua nhiều phương thức có độ an toàn phù hợp: URL, SMS, QR Code, Mini
                Zalo App..
              </div>

              <div class="mt-5">
                <nuxt-link to="/qrcode-chong-gia" class="text-primary"> Xem thêm </nuxt-link>
              </div>
            </div>
          </div>

          <div id="qr-mini-zalo-app" class="flex items-start gap-x-6 mt-[35px] max-lg:mt-4">
            <nuxt-picture
              loading="lazy"
              src="/images/icons/8.png"
              class="shrink-0"
              width="85"
              :imgAttrs="{ alt: 'icon' }"
            />

            <div>
              <h3>QR Mini Zalo App</h3>

              <div class="mt-3">
                Ứng dụng marketing và loyalty tối ưu hóa theo mô hình kinh doanh, chạy trực tiếp trên nền tảng Zalo, kết
                nối tới 75 triệu người dùng thường xuyên.
              </div>

              <div class="mt-5">
                <nuxt-link to="/zalo-mini-app" class="text-primary"> Xem thêm </nuxt-link>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <div id="qr-bao-hanh" class="flex items-start gap-x-6 max-lg:mt-4">
            <nuxt-picture
              loading="lazy"
              src="/images/icons/5.png"
              class="shrink-0"
              width="85"
              :imgAttrs="{ alt: 'icon' }"
            />

            <div>
              <h3>QR Bảo hành</h3>

              <div class="mt-3">
                Bảo vệ quyền lợi và tăng lòng trung thành khách hàng, chỉ một lượt quét mã sẽ truy xuất thông tin bảo
                hành lập tức.
              </div>

              <div class="mt-5">
                <nuxt-link to="/qrcode-bao-hanh" class="text-primary"> Xem thêm </nuxt-link>
              </div>
            </div>
          </div>

          <div class="flex items-start gap-x-6 mt-[35px] max-lg:mt-4">
            <nuxt-picture
              loading="lazy"
              src="/images/icons/discount.png"
              class="shrink-0"
              width="85"
              :imgAttrs="{ alt: 'icon' }"
            />

            <div>
              <h3>QRX quản lý loyalty</h3>

              <div class="mt-3">
                Tương tác với khách hàng qua hành vi quét QR Code, cho phép doanh nghiệp giới thiệu sản phẩm, điểm bán,
                survey…
              </div>

              <div class="mt-5">
                <nuxt-link to="/qrcode-loyalty" class="text-primary"> Xem thêm </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CustomerCarousel class="mt-[80px]" />

    <section id="zalo-app" class="mt-[80px] 2xl:container m-auto">
      <div class="text-center">
        <h2>QRX mini Zalo app</h2>
        <div class="subtitle-2 text-third mt-4">
          Ứng dụng chính chủ chạy trên nền tảng Zalo, kết nối mạnh mẽ với 75 triệu người dùng thường xuyên.
        </div>
      </div>

      <div class="flex gap-[45px] max-lg:flex-wrap max-lg:gap-y-4 mt-[80px] max-lg:mt-6">
        <div class="w-5/12 max-lg:w-full px-[33px] pt-[38px] pb-[14px] bg-primary rounded-[30px]">
          <h3 class="text-white text-center">
            Công cụ tối ưu nhất hiện nay giúp Doanh nghiệp giữ liên lạc với người tiêu dùng
          </h3>

          <div class="mt-[15px] mx-auto flex-center">
            <nuxt-picture
              loading="lazy"
              src="/images/iPhone-12-Pro-Mockup-Front-View6.png"
              width="221"
              :imgAttrs="{ alt: 'phone-mini-zalo-app' }"
            />
          </div>
        </div>

        <div
          class="w-4/12 max-lg:w-full flex gap-[32px] flex-col justify-between min-h-[50vh] bg-white pb-[27px] px-[30px] rounded-[30px] overflow-hidden"
        >
          <div class="w-full h-[363px] relative -right-6">
            <nuxt-picture
              loading="lazy"
              src="/images/iPhone-12-Pro-Mockup-Front-View-10.png"
              class="absolute top-0 right-0"
              width="255"
              :imgAttrs="{ alt: 'iPhone-12-Pro-Mockup' }"
            />
          </div>
          <div class="">
            <h3>Xác minh danh tính khách hàng tự động</h3>
            <div class="text-[16px] mt-5">
              Ngay sau khi quét QR, hệ thống điều hướng khách hàng đến Zalo mini app của doanh nghiệp và yêu cầu truy
              cập thông tin trên Zalo
            </div>
          </div>
        </div>

        <div class="w-3/12 max-lg:w-full bg-white p-[20px] pt-[50px] rounded-[30px]">
          <h3>Gửi thông tin đến khách hàng miễn phí</h3>
          <div class="mt-5">
            Gửi mọi thông báo từ đơn hàng, chương trình khuyến mãi, hỗ trợ đến khách hàng miễn phí.
          </div>

          <div class="mt-[55px] flex-center">
            <nuxt-picture
              loading="lazy"
              src="/images/iPhone-12-Pro-Mockup-Front-View5.png"
              width="179"
              :imgAttrs="{ alt: 'iPhone-12-Pro-Mockup' }"
            />
          </div>
        </div>
      </div>

      <div class="text-center mt-[41px] max-lg:hidden">
        <nuxt-link to="/zalo-mini-app">
          <button class="rounded-[12px] w-[209px] h-[56px] bg-[#ED7F22] text-[#fff] border-e-0" aria-label="see-more">
            Tìm hiểu thêm
          </button>
        </nuxt-link>
      </div>
    </section>

    <section id="knowledge" class="mt-[80px] 2xl:container mx-auto">
      <div class="text-center">
        <h2>Tin tức sự kiện</h2>
        <div class="subtitle-2 text-third mt-4">
          Cập nhật xu hướng trải nghiệm khách hàng và tăng trưởng kinh doanh.
        </div>
      </div>

      <div class="flex flex-wrap justify-center mt-[27px] md:mt-[10px]">
        <div
          class="max-sm:w-full max-lg:w-1/2 w-1/3 rounded-[24px] py-[17.5px] px-[11.5px]"
          v-for="item in blogs"
          :key="item.id"
        >
          <nuxt-link target="_blank" :to="item.link">
            <div class="rounded-[24px] overflow-hidden">
              <nuxt-picture
                loading="lazy"
                :src="item.featured_image_url"
                :imgAttrs="{
                  alt: `featured_media_url_${item.slug}`,
                  class: 'block h-[224px] w-full object-cover mx-auto',
                }"
              />
            </div>
            <p class="font-semibold text-base leading-8 text-black max-w-[385px] mt-[24px] md:mt-[10px]">
              {{ stripHtml(item.title?.rendered) }}
            </p>
          </nuxt-link>
        </div>
      </div>
    </section>

    <BlogStory class="mt-[80px] 2xl:container mx-auto" />

    <Contact class="mt-[80px] 2xl:container mx-auto" />
  </div>
</template>
