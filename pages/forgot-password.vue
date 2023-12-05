<script setup>
const router = useRouter();

const backToLogin = (tab) => {
  router.push({ path: "/login", query: { tab } });
};
</script>

<template>
  <div class="flex items-center">
    <div
      class="basis-1/2 max-lg:hidden rounded-l-[30px] bg-[url('/images/home-banner.png')] bg-no-repeat bg-right bg-cover h-[677px] max-xl:h-[670px]"
    ></div>

    <div class="flex-1 p-16 max-xl:px-8 max-lg:py-0 max-sm:p-0 bg-white rounded-r-[30px]">
      <div class="flex justify-center max-sm:hidden"><nuxt-picture loading="lazy" src="/images/logo.png" :imgAttrs="{ alt: 'logo' }" /></div>

      <h2 class="text-center max-lg:text-[30px] max-sm:text-[24px] mt-5">Quên mật khẩu?</h2>

      <div class="text-center text-[#8C8C8C] text-[16px] max-lg:text-[12px] max-sm:text-[12px] mt-2">
        Chỉ cần nhập địa chỉ email của bạn dưới đây và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của
        bạn!
      </div>

      <a-form layout="vertical" class="mt-5">
        <a-form-item label="Nhập email">
          <a-input class="rounded-[12px]"></a-input>
        </a-form-item>
      </a-form>

      <div class="mt-5">
        <button class="primary text-white w-full" aria-label="reset-password">Đặt lại mật khẩu</button>
      </div>
      <section class="mt-5">
        <div class="w-full relative my-6 flex items-center py-3">
          <hr class="bg-[#66666640] w-full h-[2px]" />

          <span class="subtitle-4 text-[#666666] bg-white absolute top-[3px] w-[12%] left-[44%] text-center"> OR </span>
        </div>

        <div class="flex flex-col gap-y-4">
          <button class="w-full flex-center gap-x-2" aria-label="login-google">
            <nuxt-picture loading="lazy" src="/images/logo_google.png" width="25px" :imgAttrs="{ alt: 'logo-google' }" />
            Đăng nhập với Google
          </button>

          <button class="w-full flex-center gap-x-2" aria-label="login-facebook">
            <nuxt-picture loading="lazy" src="/images/logo_facebook.png" width="25px" :imgAttrs="{ alt: 'logo-facebook' }" />
            Đăng nhập với Facebook
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
