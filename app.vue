<script setup>
const visible = ref(false);
const collapseProduct = ref(false);
const domain = "https://qrx.com.vn/";
const route = useRoute();
const { apiQrxData, userid, token, getApi, saveParamsToSessionStorage, getParamsFromSessionStorage } = useApiQrx();

useHead({
  link: [{ rel: "canonical", href: domain + route.path }],
  meta: [
    { name: "og:url", content: domain + route.path },
    { name: "twitter:card", content: "summary" },
    { name: "og:image", content: "https://miraway.vn/wp-content/uploads/2021/05/LOGO_MIRAWAY_ver2-01.svg" },
    { name: "twitter:image", content: "https://miraway.vn/wp-content/uploads/2021/05/LOGO_MIRAWAY_ver2-01.svg" },
  ],
});

const config = useRuntimeConfig();
const crmBaseUrl = config.public.baseUrl.crm;

watch(
  route,
  () => {
    if (visible.value) {
      visible.value = false;
    }
  },
  { deep: true },
);
const isHomePage = computed(() => route.path === "/");
const isPaymentPage = computed(() => route.path === "/bang-gia");
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  Array.from(document.querySelectorAll("a[href^='http://localhost']")).forEach((node) => {
    node.href = node.href.replace("http://localhost", window.location.origin);
  });

  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

onMounted(() => {
  // Get the "token" query parameter from the URL
  const urlSearchParams = new URLSearchParams(window.location.search);
  token.value = urlSearchParams.get("token");
  userid.value = urlSearchParams.get("userID");
  saveParamsToSessionStorage(token.value, userid.value);
  const getParams = getParamsFromSessionStorage();
  getApi(getParams.token, getParams.userid);
});
</script>

<template>
  <div class="min-h-[100vh]" :class="{ 'home-page': isHomePage, scroll: isScrolled }">
    <header class="shadow-lg bg-[#fff] shadow-[#c6c6c6]" v-if="apiQrxData.company == null">
      <div>
        <nuxt-link to="/">
          <nuxt-picture loading="lazy" src="/images/logo.png" :img-attrs="{ alt: 'logo' }" width="122" />
        </nuxt-link>
      </div>

      <div class="nav-menu flex gap-x-[40px] subtitle-3 max-xl:hidden">
        <nuxt-link to="/tao-ma-qr" class="hover:text-[#ed7f22]">Tạo mã QR</nuxt-link>
        <div class="relative hover:text-[#ed7f22]">
          Sản phẩm

          <div class="sub-menu hidden absolute top-[100%] left-0 pt-5 shadow-sm shadow-[#dfdfdf]">
            <nuxt-link to="/giai-phap" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Tất cả sản phẩm</nuxt-link
            >
            <nuxt-link to="/qrcode-marketing" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Marketing</nuxt-link
            >
            <nuxt-link to="/qrcode-chong-gia" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Chống giả</nuxt-link
            >
            <nuxt-link to="/qrcode-bao-hanh" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Bảo hành</nuxt-link
            >
            <nuxt-link to="/qrcode-loyalty" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Loyalty</nuxt-link
            >
            <nuxt-link to="/zalo-mini-app" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Zalo mini app</nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="https://qrx.com.vn/blog" :external="true" class="hover:text-[#ed7f22]">Blog</nuxt-link>
        <nuxt-link to="/ve-qrx" class="hover:text-[#ed7f22]">Giới thiệu</nuxt-link>
        <nuxt-link to="/ho-tro" class="hover:text-[#ed7f22]">Hỗ trợ</nuxt-link>
        <!-- <nuxt-link to="/bang-gia" class="hover:text-[#ed7f22]">Bảng giá</nuxt-link> -->
      </div>
      <div
        class="flex gap-x-4 max-xl:hidden"
        :class="($route.path.includes('/login') ? 'invisible' : '', { hidden: userid })"
      >
        <nuxt-link :to="`${crmBaseUrl}/authentication/loginRedirect`" aria-label="qrcode solution register">
          <button
            class="small bg-white border border-solid border-[#D9D9D9] shadow-[0px_2px_0px_0px_#0000000B]"
            aria-label="try-it"
          >
            Đăng nhập
          </button>
        </nuxt-link>
        <nuxt-link to="/register" aria-label="qrcode solution login">
          <button class="primary small shadow-[0px_2px_0px_0px_#0000000B]" aria-label="login">Dùng thử miễn phí</button>
        </nuxt-link>
      </div>

      <div class="nav-menu max-xl:hidden" :class="{ hidden: !userid }">
        <div class="relative hover:text-[#ed7f22]">
          <div>
            <nuxt-picture
              loading="lazy"
              src="/images/icons/user-line.svg"
              :img-attrs="{ alt: 'user-icon', width: 45, height: 45 }"
            />
          </div>

          <div class="sub-menu hidden absolute top-[100%] right-0 pt-5 shadow-sm shadow-[#dfdfdf]">
            <nuxt-link :to="`${crmBaseUrl}/clients/company`" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Profile</nuxt-link
            >
            <nuxt-link
              :to="`${crmBaseUrl}/authentication/logoutRedirect`"
              class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Đăng xuất</nuxt-link
            >
          </div>
        </div>
      </div>

      <button class="small !px-2 bg-[#F0F0F0] border-none xl:hidden" @click="visible = true" aria-label="icon-3-dot">
        <svg viewBox="0 -53 384 384" width="20px" height="20px" class="fill-[#ed7f22]">
          <path
            d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
        </svg>
      </button>

      <a-drawer
        v-model:visible="visible"
        :bodyStyle="{ paddingTop: '45px' }"
        :contentWrapperStyle="{ width: '100vw' }"
        body
        :closable="false"
        placement="right"
      >
        <template #title>
          <div class="flex items-center justify-between">
            <nuxt-link to="/"
              ><nuxt-picture loading="lazy" src="/images/logo.png" :img-attrs="{ alt: 'logo' }" width="122"
            /></nuxt-link>

            <button class="small !px-2 bg-[#F0F0F0] border-none" @click="visible = false" aria-label="collapse-icon">
              <svg viewBox="0 0 329.26933 329" width="20px" height="20px" class="fill-[#ed7f22]">
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                />
              </svg>
            </button>
          </div>
        </template>

        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link to="/tao-ma-qr" @click="visible = false">Tạo mã QR</nuxt-link>
        </div>

        <div
          class="py-3 px-2 border-solid border-b border-[#E0E0E0] flex items-center justify-between"
          @click="collapseProduct = !collapseProduct"
        >
          <span>Sản phẩm</span>

          <svg
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
            class="fill-[#ed7f22] transition-all"
            :class="{ 'rotate-180 ': !collapseProduct }"
          >
            <g id="_16" data-name="16">
              <path
                d="m12 16a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1 -.7.29z"
              />
            </g>
          </svg>
        </div>

        <div
          class="sub-menu flex flex-col gap-y-4 px-2 py-4 overflow-hidden transition-all"
          :class="{ 'h-0 !py-0': collapseProduct }"
        >
          <nuxt-link to="/giai-phap" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Tất cả sản phẩm
          </nuxt-link>
          <nuxt-link to="/qrcode-marketing" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Quản lý Marketing
          </nuxt-link>
          <nuxt-link to="/qrcode-chong-gia" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Quản lý Chống giả
          </nuxt-link>
          <nuxt-link to="/qrcode-bao-hanh" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >QRX Quản lý Bảo hành</nuxt-link
          >
          <nuxt-link to="/qrcode-loyalty" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >QRX Quản lý Loyalty</nuxt-link
          >
          <nuxt-link to="/zalo-mini-app" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >Zalo mini app</nuxt-link
          >
        </div>
        <div class="py-3 px-2">
          <nuxt-link to="https://qrx.com.vn/blog" :external="true" class="hover:text-[#ed7f22]">Blog</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link to="/ve-qrx" @click="visible = false">Giới thiệu</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link to="/ho-tro" @click="visible = false">Hỗ trợ</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <!-- <nuxt-link to="/bang-gia" @click="visible = false">Bảng giá</nuxt-link> -->
        </div>

        <div class="flex-center max-sm:flex-col gap-4 mt-4">
          <nuxt-link
            :to="`${crmBaseUrl}/authentication/loginRedirect`"
            class="flex-1 w-full"
            aria-label="qrcode solution try"
          >
            <button class="large w-full" aria-label="register" @click="visible = false">Đăng nhập</button>
          </nuxt-link>

          <nuxt-link to="/register" class="flex-1 w-full" aria-label="qrcode solution login">
            <button class="primary large w-full" aria-label="login" @click="visible = false">Dùng thử miễn phí</button>
          </nuxt-link>
        </div>
      </a-drawer>
    </header>

    <header class="shadow-lg bg-[#fff] shadow-[#c6c6c6]" v-if="apiQrxData.company != null">
      <div>
        <nuxt-link to="/">
          <nuxt-picture loading="lazy" src="/images/logo.png" :img-attrs="{ alt: 'logo' }" width="122" />
        </nuxt-link>
      </div>

      <div class="nav-menu flex gap-x-[40px] subtitle-3 max-xl:hidden">
        <div class="relative hover:text-[#ed7f22]">
          Sản phẩm

          <div class="sub-menu hidden absolute top-[100%] left-0 pt-5 shadow-sm shadow-[#dfdfdf]">
            <nuxt-link to="/product" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Tất cả sản phẩm</nuxt-link
            >
            <nuxt-link to="/qrcode-marketing" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Marketing</nuxt-link
            >
            <nuxt-link to="/qrcode-chong-gia" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Chống giả</nuxt-link
            >
            <nuxt-link to="/qrcode-bao-hanh" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Bảo hành</nuxt-link
            >
            <nuxt-link to="/qrcode-loyalty" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >QRX Quản lý Loyalty</nuxt-link
            >
            <nuxt-link to="/zalo-mini-app" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Zalo mini app</nuxt-link
            >
          </div>
        </div>
        <nuxt-link :to="`${crmBaseUrl}/clients/projects`" class="hover:text-[#ed7f22]">Dự án</nuxt-link>
        <nuxt-link :to="`${crmBaseUrl}/clients/invoices`" class="hover:text-[#ed7f22]">Hóa đơn</nuxt-link>
        <nuxt-link :to="`${crmBaseUrl}/clients/contracts`" class="hover:text-[#ed7f22]">Hợp đồng</nuxt-link>
        <nuxt-link :to="`${crmBaseUrl}/clients/estimates`" class="hover:text-[#ed7f22]">Báo giá</nuxt-link>
        <nuxt-link :to="`${crmBaseUrl}/clients/proposals`" class="hover:text-[#ed7f22]">Đề xuất</nuxt-link>
        <nuxt-link :to="`${crmBaseUrl}/clients/tickets`" class="hover:text-[#ed7f22]">Hỗ trợ khách hàng</nuxt-link>
        <!-- <nuxt-link to="/bang-gia" class="hover:text-[#ed7f22]">Bảng giá</nuxt-link> -->
      </div>

      <div class="nav-menu max-xl:hidden">
        <div class="relative hover:text-[#ed7f22]">
          <div>
            <nuxt-picture
              loading="lazy"
              src="/images/icons/user-line.svg"
              :img-attrs="{ alt: 'user-icon', width: 45, height: 45 }"
            />
          </div>

          <div class="sub-menu hidden absolute top-[100%] right-0 pt-5 shadow-sm shadow-[#dfdfdf]">
            <nuxt-link :to="`${crmBaseUrl}/clients/company`" class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Profile</nuxt-link
            >
            <nuxt-link
              :to="`${crmBaseUrl}/authentication/logoutRedirect`"
              class="subtitle-3 sub-menu-item hover:text-[#ed7f22]"
              >Đăng xuất</nuxt-link
            >
          </div>
        </div>
      </div>

      <button class="small !px-2 bg-[#F0F0F0] border-none xl:hidden" @click="visible = true" aria-label="icon-3-dot">
        <svg viewBox="0 -53 384 384" width="20px" height="20px" class="fill-[#ed7f22]">
          <path
            d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
        </svg>
      </button>

      <a-drawer
        v-model:visible="visible"
        :bodyStyle="{ paddingTop: '45px' }"
        :contentWrapperStyle="{ width: '100vw' }"
        body
        :closable="false"
        placement="right"
      >
        <template #title>
          <div class="flex items-center justify-between">
            <nuxt-link to="/"
              ><nuxt-picture loading="lazy" src="/images/logo.png" :img-attrs="{ alt: 'logo' }" width="122"
            /></nuxt-link>

            <button class="small !px-2 bg-[#F0F0F0] border-none" @click="visible = false" aria-label="collapse-icon">
              <svg viewBox="0 0 329.26933 329" width="20px" height="20px" class="fill-[#ed7f22]">
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                />
              </svg>
            </button>
          </div>
        </template>

        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link to="/tao-ma-qr" @click="visible = false">Tạo mã QR</nuxt-link>
        </div>

        <div
          class="py-3 px-2 border-solid border-b border-[#E0E0E0] flex items-center justify-between"
          @click="collapseProduct = !collapseProduct"
        >
          <span>Sản phẩm</span>

          <svg
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
            class="fill-[#ed7f22] transition-all"
            :class="{ 'rotate-180 ': !collapseProduct }"
          >
            <g id="_16" data-name="16">
              <path
                d="m12 16a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1 -.7.29z"
              />
            </g>
          </svg>
        </div>

        <div
          class="sub-menu flex flex-col gap-y-4 px-2 py-4 overflow-hidden transition-all"
          :class="{ 'h-0 !py-0': collapseProduct }"
        >
          <nuxt-link to="/product" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Tất cả sản phẩm
          </nuxt-link>
          <nuxt-link to="/qrcode-marketing" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Quản lý Marketing
          </nuxt-link>
          <nuxt-link to="qrcode-chong-gia" class="sub-menu-item subtitle-3 text-primary" @click="visible = false">
            QRX Quản lý Chống giả
          </nuxt-link>
          <nuxt-link to="qrcode-bao-hanh" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >QRX Quản lý Bảo hành</nuxt-link
          >
          <nuxt-link to="qrcode-loyalty" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >QRX Quản lý Loyalty</nuxt-link
          >
          <nuxt-link to="/zalo-mini-app" class="sub-menu-item subtitle-3 text-primary" @click="visible = false"
            >Zalo mini app</nuxt-link
          >
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/projects`" @click="visible = false">Dự án</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/invoices`" @click="visible = false">Hóa đơn</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/contracts`" @click="visible = false">Hợp đồng</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/estimates`" @click="visible = false">Báo giá</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/proposals`" @click="visible = false">Đề xuất</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <nuxt-link :to="`${crmBaseUrl}/clients/tickets`" @click="visible = false">Hỗ trợ khách hàng</nuxt-link>
        </div>
        <div class="py-3 px-2 hover:text-[#ed7f22]">
          <!-- <nuxt-link to="/bang-gia" @click="visible = false">Bảng giá</nuxt-link> -->
        </div>

        <div class="py-3 px-2">
          <p>Hello {{ apiQrxData.company }}</p>
        </div>
        <div class="flex-center max-sm:flex-col gap-4 mt-4">
          <nuxt-link
            :to="`${crmBaseUrl}/clients/company`"
            class="flex-1 w-full"
            aria-label="qrcode solution login"
            @click="visible = false"
          >
            <button class="large w-full" aria-label="login">Profile</button>
          </nuxt-link>
          <nuxt-link
            :to="`${crmBaseUrl}/authentication/logoutRedirect`"
            class="flex-1 w-full"
            aria-label="qrcode solution logout"
          >
            <button class="primary large w-full" aria-label="login">Đăng xuất</button>
          </nuxt-link>
        </div>
      </a-drawer>
    </header>

    <div class="page-content px-20 max-xl:px-4 py-10 max-xl:pt-0 mt-[80px] max-xl:mt-[64px] mb-[120px]">
      <NuxtPage />
    </div>

    <footer :class="{'pb-[100px]' : isPaymentPage}">
      <nuxt-picture loading="lazy" src="/images/logo.png" :img-attrs="{ alt: 'logo' }" width="122" />

      <div class="flex max-lg:flex-wrap gap-[40px] justify-between mt-[40px]">
        <div id="company-info" class="max-lg:w-full">
          <div id="HN-address">
            <div class="flex items-center subtitle-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26744 11.872C9.25635 11.3591 12.67 9.34622 12.67 6.00103C12.67 3.42295 10.5801 1.33301 8.002 1.33301C5.42393 1.33301 3.33398 3.42295 3.33398 6.00103C3.33398 9.34622 6.74766 11.3591 7.73657 11.872C7.90519 11.9595 8.09882 11.9595 8.26744 11.872ZM8.00204 8.00116C9.10693 8.00116 10.0026 7.10547 10.0026 6.00058C10.0026 4.89569 9.10693 4 8.00204 4C6.89715 4 6.00146 4.89569 6.00146 6.00058C6.00146 7.10547 6.89715 8.00116 8.00204 8.00116Z"
                  fill="#666666"
                />
                <path
                  d="M12.0446 11.0032C12.4543 11.3073 12.67 11.6523 12.67 12.0035C12.67 12.3547 12.4543 12.6997 12.0446 13.0038C11.6349 13.3079 11.0456 13.5605 10.336 13.7361C9.62639 13.9116 8.82141 14.0041 8.002 14.0041C7.1826 14.0041 6.37762 13.9117 5.66799 13.7361C4.95837 13.5605 4.36909 13.3079 3.95938 13.0038C3.54968 12.6997 3.33398 12.3547 3.33398 12.0035C3.33398 11.6523 3.54968 11.3073 3.95938 11.0032"
                  stroke="#666666"
                  stroke-width="1.33372"
                  stroke-linecap="round"
                />
              </svg>

              HÀ NỘI
            </div>

            <small>Tầng 4 - Tòa nhà GTC, Số 69, phố Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội</small>
          </div>

          <div id="HCM-address" class="mt-3">
            <div class="flex items-center subtitle-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26744 11.872C9.25635 11.3591 12.67 9.34622 12.67 6.00103C12.67 3.42295 10.5801 1.33301 8.002 1.33301C5.42393 1.33301 3.33398 3.42295 3.33398 6.00103C3.33398 9.34622 6.74766 11.3591 7.73657 11.872C7.90519 11.9595 8.09882 11.9595 8.26744 11.872ZM8.00204 8.00116C9.10693 8.00116 10.0026 7.10547 10.0026 6.00058C10.0026 4.89569 9.10693 4 8.00204 4C6.89715 4 6.00146 4.89569 6.00146 6.00058C6.00146 7.10547 6.89715 8.00116 8.00204 8.00116Z"
                  fill="#666666"
                />
                <path
                  d="M12.0446 11.0032C12.4543 11.3073 12.67 11.6523 12.67 12.0035C12.67 12.3547 12.4543 12.6997 12.0446 13.0038C11.6349 13.3079 11.0456 13.5605 10.336 13.7361C9.62639 13.9116 8.82141 14.0041 8.002 14.0041C7.1826 14.0041 6.37762 13.9117 5.66799 13.7361C4.95837 13.5605 4.36909 13.3079 3.95938 13.0038C3.54968 12.6997 3.33398 12.3547 3.33398 12.0035C3.33398 11.6523 3.54968 11.3073 3.95938 11.0032"
                  stroke="#666666"
                  stroke-width="1.33372"
                  stroke-linecap="round"
                />
              </svg>

              TP. HỒ CHÍ MINH
            </div>

            <small>211, đường 9A Trung Sơn, Bình Hưng, Bình Chánh, TP Hồ Chí Minh</small>
          </div>

          <div id="phone-number" class="flex items-center mt-6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_180177_21763)">
                <path
                  d="M10.6599 0.666016H5.32982C4.22384 0.666016 3.33105 1.5588 3.33105 2.66478V13.3249C3.33105 14.4308 4.22384 15.3236 5.32982 15.3236H10.6599C11.7658 15.3236 12.6586 14.4308 12.6586 13.3249V2.66478C12.6586 1.5588 11.7658 0.666016 10.6599 0.666016ZM11.3261 11.9923H4.66356V2.66478H11.3261V11.9923ZM9.32735 13.9911H6.66233V13.3249H9.32735V13.9911Z"
                  fill="#666666"
                />
              </g>
              <defs>
                <clipPath id="clip0_180177_21763">
                  <rect width="15.9901" height="15.9901" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div class="subtitle-3 ml-2">0969 059 786</div>
          </div>

          <div id="email" class="flex items-center mt-3">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.00685 6.80301C1.99805 7.16204 1.99805 7.56966 1.99805 8.03467V9.36686C1.99805 11.2509 1.99805 12.1929 2.58333 12.7782C3.16862 13.3634 4.11062 13.3634 5.99463 13.3634H9.99121C11.8752 13.3634 12.8172 13.3634 13.4025 12.7782C13.9878 12.1929 13.9878 11.2509 13.9878 9.36686V8.03467C13.9878 7.56966 13.9878 7.16204 13.979 6.80301L8.63989 9.76918C8.23754 9.99271 7.7483 9.99271 7.34595 9.76918L2.00685 6.80301ZM2.15995 5.38984C2.21513 5.4037 2.26943 5.42492 2.32153 5.45386L7.99292 8.60463L13.6643 5.45386C13.7164 5.42492 13.7707 5.40371 13.8259 5.38984C13.7393 5.07454 13.6064 4.8273 13.4025 4.62337C12.8172 4.03809 11.8752 4.03809 9.99121 4.03809H5.99463C4.11062 4.03809 3.16862 4.03809 2.58333 4.62337C2.3794 4.8273 2.24653 5.07454 2.15995 5.38984Z"
                fill="#666666"
              />
            </svg>

            <div class="subtitle-3 ml-2">qrcode@miraway.vn</div>
          </div>
        </div>

        <div id="product" class="flex flex-col gap-y-6 max-lg:w-1/2 max-lg:flex-1">
          <div class="subtitle-1">Sản phẩm</div>
          <nuxt-link to="/qrcode-marketing" class="subtitle-3 text-primary">QR Marketing</nuxt-link>
          <nuxt-link to="/qrcode-chong-gia" class="subtitle-3 text-primary">QR Chống giả</nuxt-link>
          <nuxt-link to="/qrcode-bao-hanh" class="subtitle-3 text-primary">QR Bảo hành</nuxt-link>
          <nuxt-link to="/qrcode-loyalty" class="subtitle-3 text-primary">QR Loyalty</nuxt-link>
          <nuxt-link to="/zalo-mini-app" class="subtitle-3 text-primary">Zalo mini app</nuxt-link>
        </div>

        <div id="QRX" class="flex flex-col gap-y-6 max-lg:w-1/2 max-lg:flex-1">
          <div class="subtitle-1">QRX</div>

          <nuxt-link to="https://miraway.vn/" class="subtitle-3 text-primary">Tập đoàn Miraway</nuxt-link>
          <nuxt-link href="tel:0969059786" class="subtitle-3 text-primary">Liên hệ</nuxt-link>
        </div>

        <div id="ho-tro" class="flex flex-col gap-y-6 max-md:w-full">
          <div class="subtitle-1">Hỗ trợ</div>

          <nuxt-link to="/ho-tro" class="subtitle-3 text-primary">FAQ</nuxt-link>
          <nuxt-link to="/ho-tro" class="subtitle-3 text-primary">Question Form</nuxt-link>
          <nuxt-link to="/ho-tro" class="subtitle-3 text-primary">Tài liệu hướng dẫn</nuxt-link>
        </div>
      </div>

      <div class="border border-solid border-[#D9D9D9] mt-[56px]"></div>

      <div class="flex justify-between items-center py-4">
        <small>Copyright © 2023 Miraway</small>

        <div class="flex gap-x-2">
          <nuxt-link to="https://www.facebook.com/qrx.com.vn/" target="_blank" class="cursor-pointer">
            <nuxt-picture :img-attrs="{ alt: 'facebook' }" loading="lazy" src="/images/socials/fb.png" width="32" />
          </nuxt-link>

          <nuxt-link to="https://m.me/289094798208556" target="_blank" class="cursor-pointer">
            <nuxt-picture
              :img-attrs="{ alt: 'messenger' }"
              loading="lazy"
              src="/images/socials/messenger.png"
              width="32"
            />
          </nuxt-link>

          <nuxt-link to="https://www.tiktok.com/@qrx.com.vn" target="_blank" class="cursor-pointer">
            <nuxt-picture :img-attrs="{ alt: 'tiktok' }" loading="lazy" src="/images/socials/tiktok.png" width="32" />
          </nuxt-link>
        </div>
      </div>

      <!-- telephone -->
      <ContactPhoneNumber />

      <ClientOnly>
        <FacebookChat />
      </ClientOnly>
    </footer>
  </div>
</template>
