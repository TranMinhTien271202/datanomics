<script setup>
import { listProduct } from "~/constants/product";

const seoTitle = "Sản phẩm";
const seoDescription = "Trang sản phẩm";

const { userid } = useApiQrx();

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "Trang sản phẩm" },
  ],
});
const productName = ref("");
const checkLogin = (val) => {
  if (userid.value) {
    productName.value = val;
  } else {
    window.location.href = "/register"; // nếu chưa đăng nhập, chuyển về trang đăng nhập
  }
};
</script>
<template>
  <h1 class="text-center font-semibold text-[36px] mt-[80px] mb-[50px]">Sản phẩm</h1>
  <div class="flex flex-wrap justify-between px-[109px] max-md:px-[0] m-auto max-md:gap-[10px]">
    <div
      v-for="item in listProduct"
      :key="item.id"
      class="w-[calc((100%-100px)/5)] max-xl:w-[calc((100%-20px)/3)] max-md:w-[calc((100%-20px)/2)] my-[12.5px] max-md:my-[5px] py-[20px] bg-white rounded-[16px] border text-center hover:border-[#ED7F22] cursor-pointer"
      @click="checkLogin(item.title)"
    >
      <p class="font-semibold">{{ item.title }}</p>
      <div class="w-[85px] h-[85px] m-auto flex justify-center items-center">
        <nuxt-picture
          loading="lazy"
          :src="item.image"
          :imgAttrs="{ alt: 'qrproduct' + item.id }"
          class="object-cover"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <!-- model -->
    <div
      class="fixed top-0 left-0 hidden z-[1000]"
      :class="{ '!block': productName !== '' }"
      v-for="item in listProduct"
    >
      <div v-show="productName === item.title">
        <div class="w-screen h-screen bg-[#1D1414] opacity-20"></div>
        <div
          class="w-[70%] max-md:w-full bg-white rounded-[18px] text-center px-[60px] max-md:px-[20px] py-[17px] absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <h2 class="text-[32px] m-auto max-md:text-[24px] max-md:max-w-[330px] font-semibold uppercase mt-[15px]">
            THÔNG TIN DÙNG THỬ {{ productName }}
          </h2>
          <button class="absolute top-0 right-0 border-none text-[#ED7F22] text-4xl" @click="productName = ''">
            &times;
          </button>
          <div class="flex justify-center gap-[37px] mt-[25px]">
            <div class="max-w-[519px]">
              <div class="flex justify-between gap-[5px]">
                <div class="text-left">
                  <p class="my-[10px] text-black font-black">
                    <nuxt-picture
                      loading="lazy"
                      src="/images/icons/fi-sr-fingerprint.png"
                      :imgAttrs="{ alt: 'fingerprint' }"
                      class="inline-block"
                    />
                    User
                  </p>
                  <p class="my-[10px] text-black">Tài khoản: {{ item.userAccount.userName }}</p>
                  <p class="my-[10px] text-black">Mật khẩu: {{ item.userAccount.password }}</p>
                  <nuxt-link target="_blank" :to="item.url">
                    <button class="bg-[#ED7F22] text-white border-none mt-[13px]">Đi tới User demo</button>
                  </nuxt-link>
                </div>
              </div>
              <div class="mt-[42px]">
                <p class="text-justify">
                  Trong bản demo của mình, bạn sẽ có quyền truy cập vào tất cả các tính năng của hệ thống. Nếu không
                  biết bắt đầu từ đâu vui lòng liên hệ hotline: 0909.802.998 để được demo online.
                  <br />
                  <br />
                  <span>
                    <span class="text-[red]">*</span>Xin lưu ý: Các chức năng email mặc định bị tắt. Ngoài ra, trang
                    demo của chúng tôi được thiết lập lại sau mỗi 30 phút.
                  </span>
                </p>
              </div>
            </div>
            <nuxt-picture
              loading="lazy"
              src="/images/39823051.png"
              :imgAttrs="{ alt: 'product-hero' }"
              class="max-xl:hidden"
              width="50%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
