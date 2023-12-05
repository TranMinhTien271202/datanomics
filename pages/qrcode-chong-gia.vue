<script setup>
const seoTitle = "Tem chống giả QRX - Giải pháp Qr Code chống giả";
const seoDescription =
  "Giải pháp Qr Code chống giả QrX - Chấm dứt nỗi lo hàng giả hàng nhái của doanh nghiệp với sự hỗ trợ từ hệ thống tem chống giả và quản lý sản phẩm";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Qr Code chống giả" },
  ],
});
</script>

<template>
  <section
    class="qr-customer-benefits bg-white lg:h-[576px] rounded-[48px] max-lg:rounded-[25px] py-[120px] px-[40px] max-lg:p-10 max-md:p-4 relative max-2xl:overflow-hidden max-lg:flex max-lg:flex-row-reverse max-lg:justify-between max-lg:items-center max-md:flex-col"
  >
    <div class="lg:absolute static 2xl:top-[-10px] top-[-20px] 2xl:right-[-10px] right-[-80px] z-10">
      <nuxt-picture
        loading="lazy"
        src="/images/qr-anti-fake-2.png"
        class="mx-auto"
        :imgAttrs="{ alt: 'qr-anti-fake', width: 739, height: 645 }"
      />
    </div>

    <div class="xl:max-w-[55%]">
      <h1 class="text-secondary">TEM CHỐNG HÀNG GIẢ-QRX</h1>

      <ul class="list-disc mt-9">
        <li>Bảo toàn trải nghiệm khách hàng.</li>
        <li class="mt-2">Bảo vệ thanh danh thương hiệu.</li>
      </ul>

      <div class="flex max-md:flex-col items-center gap-5 mt-[44px]">
        <a href="https://mktv2.qrx.com.vn/#/auth/login" target="_blank" class="max-md:w-full" aria-label="register now">
          <button class="primary max-md:w-full" aria-label="register">Dùng thử miễn phí</button>
        </a>
      </div>
    </div>
  </section>

  <section class="flex flex-col mt-[80px]">
    <AboutQrx />
  </section>

  <section class="px-6 pt-[40px] 2xl:container m-auto pb-[60px] max-lg:py-0 mt-[80px]">
    <div class="text-center">
      <h2 class="max-lg:text-[20px]">
        Lợi ích của <br class="hidden max-lg:block" />
        Tem chống giá QRX
      </h2>
    </div>
    <div class="flex flex-wrap max-lg:flex-col justify-center items-center mt-[40px]">
      <div class="flex-1 mx-[10px] max-lg:my-[10px]">
        <div class="flex gap-[24px]">
          <div class="w-[85px]">
            <nuxt-picture loading="lazy" src="/images/icons/icon-tem-1.png" :imgAttrs="{ alt: 'icon' }" />
          </div>
          <div class="items-center max-w-[302px]">
            <p class="font-[500] max-lg:text-[20px] text-[28px] text-[#333333]">Thao tác đơn giản</p>
            <ul class="list-disc">
              <li>Định danh sản phẩm bằng smartphone, serial và QR code.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex-1 mx-[10px] max-lg:my-[10px]">
        <div class="flex gap-[24px]">
          <div class="w-[85px]">
            <nuxt-picture loading="lazy" src="/images/icons/icon-tem-2.png" :imgAttrs="{ alt: 'icon' }" />
          </div>
          <div class="items-center max-w-[302px]">
            <p class="font-[500] max-lg:text-[20px] text-[28px] text-[#333333]">Bảo vệ tuyệt đối</p>
            <ul class="list-disc">
              <li>Bảo vệ sản phẩm - uy tín của doanh nghiệp.</li>
              <li>Bảo vệ quyền lợi chính đáng của người tiêu dùng.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex-1 mx-[10px] max-lg:my-[10px]">
        <div class="flex gap-[24px]">
          <div class="w-[85px]">
            <nuxt-picture loading="lazy" src="/images/icons/icon-tem-3.png" :imgAttrs="{ alt: 'icon' }" />
          </div>
          <div class="items-center max-w-[302px]">
            <p class="font-[500] max-lg:text-[20px] text-[28px] text-[#333333]">Thấu hiểu khách hàng</p>
            <ul class="list-disc">
              <li>Hỗ trợ thu nhập thông tin để chăm sóc khách hàng và Marketing.</li>
              <li>Nắm bắt được mức độ quan tâm hàng hóa theo thời gian thực.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-[80px] xl:-mx-20 py-[40px] bg-[#F5F5F5]">
    <div class="text-center w-4/5 m-auto">
      <h2>Xác thực bảo hành điện tử</h2>
      <p class="ubtitle-2 text-third mt-4">
        Sử dụng tem QR Code giúp tiết kiệm chi phí và cải thiện hiệu quả quy trình bảo hành.
      </p>
    </div>
    <div class="flex max-lg:flex-wrap justify-center max-xl:mt-[16px] px-[20px]">
      <div class="flex flex-wrap">
        <div class="flex flex-col items-center">
          <div class="xl:h-[321px] flex items-center">
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
            src="/images/qrcode-anti-fake/man-hinh-chong-gia.png"
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
            src="/images/qrcode-anti-fake/man-hinh-chong-gia-1.png"
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

  <section class="mt-[80px]">
    <div class="text-center">
      <div class="text-center">
        <h2>Tem chống giả QRX</h2>
        <div class="subtitle-2 text-third mt-4">
          Tem QR Code chống giả của QRX cấu tạo đặc biệt để tránh hành vi làm giả tem
        </div>
      </div>
      <div class="flex flex-wrap max-lg:flex-col max-lg:justify-center mt-[50px]">
        <div class="flex flex-col justify-center lg:hidden">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-anti-fake/tem-product-mobie.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode3' }"
            width="343px"
            class="m-auto"
          />
          <div class="flex justify-center flex-col mt-[10px] max-lg:mt-[30px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-5.png"
                :imgAttrs="{ alt: 'tem-chong-gia-qrcode4' }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">Mã xác thực</p>
              <p class="text-[16px] mt-[5px]">
                Mã xác thực bên dưới lớp phủ bạc, giúp bảo mật thông tin cho người dùng xác thực trên hệ thống.
              </p>
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
              <p class="text-[16px] mt-[5px]">
                Logo là biểu trưng thương hiệu của công ty, cần làm theo nhận diện mỗi đơn vị
              </p>
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
              <p class="text-[16px] mt-[5px]">
                Cú pháp tin nhắn SMS giúp người dùng thực hiện theo để xác thực sản phẩm chính xác nhất.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/3 flex justify-center items-center max-lg:w-full max-lg:my-[60px] max-lg:hidden">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-anti-fake/tem-product.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode6' }"
          />
        </div>
        <div class="w-1/3 max-lg:w-full flex flex-col mt-[20px]">
          <div class="flex justify-center flex-col relative -top-[50px]">
            <div class="flex justify-center">
              <nuxt-picture
                loading="lazy"
                src="/images/qrcode-anti-fake/tem-chong-gia-3.png"
                :imgAttrs="{ alt: 'tem-chong-gia', width: 113, height: 113 }"
              />
            </div>
            <div class="w-[302px] m-auto mt-[18px]">
              <p class="text-[#ED7F22] text-[24px]">QRCode Chống giả</p>
              <p class="text-[16px] mt-[5px]">
                Mã QR Code cố định hoặc biến đổi tùy thuộc vào từng loại tem QR Code chống giả.
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
              <p class="text-[16px] mt-[5px]">
                Mã QR Code cố định hoặc biến đổi tùy thuộc vào từng loại tem QR Code chống giả.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col mt-[10px] max-lg:mt-[30px] max-lg:hidden">
        <div class="flex justify-center">
          <nuxt-picture
            loading="lazy"
            src="/images/qrcode-anti-fake/tem-chong-gia-5.png"
            :imgAttrs="{ alt: 'tem-chong-gia-qrcode8' }"
          />
        </div>
        <div class="w-[302px] m-auto mt-[18px]">
          <p class="text-[#ED7F22] text-[24px]">Mã xác thực</p>
          <p class="text-[16px] mt-[5px]">
            Mã xác thực bên dưới lớp phủ bạc, giúp bảo mật thông tin cho người dùng xác thực trên hệ thống.
          </p>
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
