<script setup>
import { ref } from "vue";
const tab = ref("register");

const router = useRouter();
const route = useRoute();
if (route.query.tab) {
  tab.value = route.query.tab;
}

const changeTab = (value) => {
  tab.value = value;
  router.replace({ ...route, query: { tab: value } });
};
</script>
<template>
  <div class="flex items-center">
    <div
      v-if="tab === 'register'"
      class="basis-1/2 max-lg:hidden rounded-l-[30px] bg-[url('/images/home-banner.png')] bg-no-repeat bg-right bg-cover h-[880px] max-xl:h-[873px]"
    ></div>
    <div
      v-if="tab === 'login'"
      class="basis-1/2 max-lg:hidden rounded-l-[30px] bg-[url('/images/home-banner.png')] bg-no-repeat bg-right bg-cover h-[798px] max-xl:h-[791px]"
    ></div>

    <div class="flex-1 p-16 max-xl:px-8 max-lg:py-0 max-sm:p-0 bg-white rounded-r-[24px] max-xl:rounded-none">
      <div class="flex justify-center max-lg:hidden"><nuxt-picture loading="lazy" src="/images/logo.png" :imgAttrs="{ alt: 'logo' }" /></div>

      <div class="flex mt-5">
        <button
          class="flex-1 button-login-register"
          :class="{ 'primary-login-register': tab === 'register' }"
          @click="changeTab('register')"
          aria-label="register"
        >
          Đăng Ký
        </button>

        <button
          class="flex-1 button-login-register"
          :class="{ 'primary-login-register': tab === 'login' }"
          @click="changeTab('login')"
          aria-label="login"
        >
          Đăng nhập
        </button>
      </div>

      <a-form layout="vertical" class="mt-5">
        <a-form-item label="Nhập email">
          <a-input class="rounded-[12px]"></a-input>
        </a-form-item>

        <a-form-item label="Mật khẩu">
          <a-input-password class="rounded-[12px]"></a-input-password>
        </a-form-item>

        <a-form-item v-if="tab === 'register'" label="Nhập lại mật khẩu">
          <a-input-password class="rounded-[12px]"></a-input-password>
        </a-form-item>

        <a-form-item>
          <button v-if="tab === 'register'" class="primary text-white w-full" aria-label="register">Đăng ký</button>

          <div v-else>
            <div class="text-right">
              <nuxt-link class="text-primary" to="/forgot-password"> Quên mật khẩu? </nuxt-link>
            </div>

            <button class="primary text-white w-full mt-5" aria-label="login">Đăng nhập</button>
          </div>
        </a-form-item>
      </a-form>

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
