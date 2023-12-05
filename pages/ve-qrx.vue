<script setup>
const seoTitle = "Về QRX";
const seoDescription =
  "QRX - Giải pháp quản trị trải nghiệm bán hàng đa kênh dựa trên công nghệ Qr Code. Qr Code marketing, Qr code chống giả, Qr Code bảo hành, Zalo mini app...";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "QRX" },
  ],
});

const linkMapCompanyHaNoi =
  "https://www.google.com/maps/dir/20.9802753,105.7703291/C%C3%B4ng+Ty+C%E1%BB%95+Ph%E1%BA%A7n+Miraway+Gi%E1%BA%A3i+Ph%C3%A1p+C%C3%B4ng+Ngh%E1%BB%87,+T%C3%B2a+galaxy,+69+P.+T%E1%BB%91+H%E1%BB%AFu,+V%E1%BA%A1n+Ph%C3%BAc,+H%C3%A0+%C4%90%C3%B4ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.982063,105.767474,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135ab71492421e3:0x795ad91ea915a4c!2m2!1d105.7766424!2d20.9834725?authuser=0&entry=ttu";
const linkMapCompanyHCM =
  "https://www.google.com/maps/dir/20.9802753,105.7703291/211+%C4%90.+s%E1%BB%91+9A,+B%C3%ACnh+H%C6%B0ng,+B%C3%ACnh+Ch%C3%A1nh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@15.7953568,102.1680698,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31752fbaec9b3169:0x9903ecf96b8e585e!2m2!1d106.689718!2d10.7335699?entry=ttu";
</script>

<template>
  <section
    class="flex items-center 2xl:container m-auto max-lg:flex-col-reverse gap-10 py-14 px-[40px] max-lg:p-10 max-md:p-4 bg-white rounded-[48px] max-lg:rounded-[25px]"
  >
    <div>
      <h1 class="text-secondary">VỀ QRX</h1>

      <div class="mt-8">
        QRX là một dòng sản phẩm công nghệ của công ty Miraway Technology Solution. Với mục tiêu trở thành thương hiệu
        CNTT tốt nhất tại Việt Nam, MIRAWAY tuân thủ các tiêu chuẩn toàn cầu và luôn cam kết cung cấp các sản phẩm và
        dịch vụ tiêu chuẩn, giúp khách hàng đạt được các mục tiêu kinh doanh.
      </div>
    </div>

    <nuxt-picture
      loading="lazy"
      src="/images/about.png"
      class="shrink-0 max-lg:w-full"
      :imgAttrs="{ class: 'w-full', alt: 'about-miraway' }"
    />
  </section>
  <section class="mt-[80px] 2xl:container m-auto max-lg:mt-[80px]">
    <h2 class="text-center">Tầm nhìn-Sứ mệnh-Đội ngũ</h2>

    <div class="flex flex-col gap-y-12 mt-16">
      <div class="flex max-lg:flex-col-reverse items-center gap-x-6">
        <div>
          <h2>Tầm nhìn</h2>
          <div class="mt-6 max-lg:mt-2">
            Trong cơn bão sự phát triển của ngành công nghệ hiện nay, chúng tôi phát hiện thấy rằng mã QR Code là một
            ứng dụng hỗ trợ cực kỳ hiệu quả và dễ sử dụng cho người dùng thiết bị di động. Chỉ bằng việc quét mã QR
            Code, người dùng có thể dễ dàng tiếp cận các tiện ích phù hợp với nhu cầu tại đúng thời điểm họ cần một cách
            chính xác và nhanh chóng. Vì vậy trong tương lai, chúng tôi muốn trở thành một chuyên gia hàng đầu về cung
            cấp các giải pháp và dịch vụ ứng dụng mã QR Code trong lĩnh vực supply chain và truy xuất nguồn gốc.
          </div>
        </div>

        <div class="px-20 max-xl:px-10 max-lg:mb-8 shrink-0">
          <nuxt-picture loading="lazy" src="/images/vision.png" width="455" :imgAttrs="{ alt: 'miraway-vision' }" />
        </div>
      </div>

      <div class="flex max-lg:flex-col-reverse flex-row-reverse items-center gap-x-6">
        <div>
          <h2>Sứ mệnh</h2>
          <div class="mt-6 max-lg:mt-2">
            Với mục đích trở thành công ty IT tốt nhất tại Việt Nam, chúng tôi tuân thủ theo các tiêu chuẩn toàn cầu và
            luôn cam kết cung cấp các sản phẩm và dịch vụ đủ tiêu chuẩn, giúp khách hàng đạt được mục tiêu kinh doanh và
            khách hàng.
          </div>
        </div>

        <div class="px-20 max-xl:px-10 max-lg:mb-8 shrink-0">
          <nuxt-picture loading="lazy" src="/images/target.png" width="296" :imgAttrs="{ alt: 'miraway-target' }" />
        </div>
      </div>

      <div class="flex max-lg:flex-col-reverse items-center gap-x-6">
        <div>
          <h2>Đội ngũ</h2>
          <div class="mt-6 max-lg:mt-2">
            Với một đội ngũ trẻ trung, nhiệt huyết và đam mê ứng dụng QR Code, cùng với sự dẫn dắt từ các lãnh đạo của
            Miraway, là những người đã từng du học và làm việc nhiều năm ở nước ngoài như Mỹ, Pháp, Đức, Úc… chúng tôi,
            những con người yêu thích công nghệ, mong muốn đơn giản hóa công nghệ để mang lại nhiều lợi ích cho xã hội.
            Với khách hàng, QRX luôn cam kết sự trung thực, ngay thẳng và đồng hành trên con đường phát triển cùng với
            khách hàng.
          </div>
        </div>

        <div class="px-20 max-xl:px-10 max-lg:mb-8 shrink-0">
          <nuxt-picture loading="lazy" src="/images/team.png" width="356" :imgAttrs="{ alt: 'miraway-team' }" />
        </div>
      </div>
    </div>
  </section>
  <section class="mt-[80px] 2xl:container m-auto max-lg:mt-[80px]">
    <h2 class="text-center">Khách hàng & Đối tác của QRX</h2>

    <div class="flex gap-x-6 max-lg:gap-[6px] mt-14">
      <div class="flex flex-1 flex-col gap-y-6 pb-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/iprint.png" :imgAttrs="{ alt: 'customers-iprint' }" />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/bidv.png" :imgAttrs="{ alt: 'customers-bidv' }" />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 pt-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/buu-dien.png" :imgAttrs="{ alt: 'customers-buu-dien' }" />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/daikin.png" :imgAttrs="{ alt: 'customers-daikin' }" />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 pb-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/in-hong-chinh.png"
            :imgAttrs="{ alt: 'customers-in-hong-chinh.png' }"
          />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/dien-quang.png"
            :imgAttrs="{ alt: 'customers-dien-quang.png' }"
          />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 pt-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/in-ha-noi.png"
            :imgAttrs="{ alt: 'customers-in-ha-noi.png' }"
          />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/mainetti.png"
            :imgAttrs="{ alt: 'customers-mainetti.png' }"
          />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 pb-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/ariston.png" :imgAttrs="{ alt: 'customers-ariston' }" />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/viglacera.png"
            :imgAttrs="{ alt: 'customers-viglacera' }"
          />
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 pt-20 max-lg:p-0">
        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture loading="lazy" src="/images/customers/vietbank.png" :imgAttrs="{ alt: 'customers-vietbank' }" />
        </div>

        <div class="bg-white aspect-square flex-center rounded-3xl max-lg:rounded-md px-1">
          <nuxt-picture
            loading="lazy"
            src="/images/customers/bibo-mart.png"
            :imgAttrs="{ alt: 'customers-bibo-mart' }"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="mt-[80px] 2xl:container m-auto max-lg:mt-[80px] max-lg:px-0 max-lg:-mx-4">
    <div class="p-16 max-lg:px-4 max-lg:py-8 bg-white rounded-[48px] max-lg:rounded-none">
      <h2 class="text-center">Chi tiết liên hệ</h2>

      <div class="mt-8">
        <div
          class="flex max-md:flex-col gap-x-4 gap-y-1 py-6 px-10 max-md:p-2 rounded-xl max-md:rounded-lg bg-[#F5F5F5]"
        >
          <div class="w-[150px] font-normal">Trụ sở Hà Nội</div>
          <div class="flex-1">Tầng 4 - Tòa nhà GTC, Số 69, phố Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội</div>
          <div class="text-primary w-[100px] max-sm:w-[80px] text-center cursor-pointer ml-auto">
            <nuxt-link :to="linkMapCompanyHaNoi" target="_blank">Chỉ đường</nuxt-link>
          </div>
        </div>

        <div class="flex max-md:flex-col gap-x-4 gap-y-1 py-6 px-10 max-md:p-2 rounded-xl max-md:rounded-lg">
          <div class="w-[150px] font-normal">Trụ sở Hồ Chí Minh</div>
          <div class="flex-1">211, đường 9A Trung Sơn, Bình Hưng, Bình Chánh, TP Hồ Chí Minh</div>
          <div class="text-primary w-[100px] max-sm:w-[80px] text-center cursor-pointer ml-auto">
            <nuxt-link :to="linkMapCompanyHCM" target="_blank">Chỉ đường</nuxt-link>
          </div>
        </div>

        <div
          class="flex max-md:flex-col gap-x-4 gap-y-1 py-6 px-10 max-md:p-2 rounded-xl max-md:rounded-lg bg-[#F5F5F5]"
        >
          <div class="w-[150px] font-normal">Hotline 24/7</div>
          <div class="flex-1">0969.059.786</div>
          <div class="text-primary w-[100px] max-sm:w-[80px] text-center cursor-pointer ml-auto">
            <nuxt-link href="tel:0969059786">Gọi</nuxt-link>
          </div>
        </div>

        <div class="flex max-md:flex-col gap-x-4 gap-y-1 py-6 px-10 max-md:p-2 rounded-xl max-md:rounded-lg">
          <div class="w-[150px] font-normal">Email</div>
          <div class="flex-1">qrcode@miraway.vn</div>
        </div>

        <div
          class="flex max-md:flex-col gap-x-4 gap-y-1 py-6 px-10 max-md:p-2 rounded-xl max-md:rounded-lg bg-[#F5F5F5]"
        >
          <div class="w-[150px] font-normal">Facebook</div>
          <div class="flex-1">https://www.facebook.com/qrx.com.vn</div>
          <a
            href="https://www.facebook.com/qrx.com.vn/"
            target="_blank"
            class="text-primary w-[100px] max-sm:w-[80px] text-center cursor-pointer ml-auto"
          >
            Truy cập
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
