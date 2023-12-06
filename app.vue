<script setup>
const visible = ref(false);
const collapseProduct = ref(false);
const domain = "https://qrx.com.vn/";
const route = useRoute();

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
const isOurService = computed(() => route.path === "/our-service");
const isContactUs = computed(() => route.path === "/contact-us");
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
</script>

<template>
  <div class="home-page min-h-[100vh]" :class="{ scroll: isScrolled }">
    <header class="shadow-lg bg-[#fff] shadow-[#c6c6c6]">
      <div>
        <nuxt-link to="/">
          <nuxt-picture
            loading="lazy"
            :src="isScrolled ? '/images/logo-1.png' : '/images/logo-white.png'"
            :img-attrs="{ alt: 'logo' }"
            width="136"
          />
        </nuxt-link>
      </div>

      <div class="nav-menu flex gap-x-[40px] subtitle-3 max-xl:hidden">
        <nuxt-link to="/our-service" class="nav-item" :class="isOurService ? 'nav-item-active' : ''"
          >Our Service</nuxt-link
        >
        <nuxt-link to="#" class="nav-item">Offerings</nuxt-link>
        <nuxt-link to="#" class="nav-item">About Us</nuxt-link>
        <nuxt-link to="/contact-us" class="nav-item" :class="isContactUs ? 'nav-item-active' : ''"
          >Contact us</nuxt-link
        >
      </div>

      <button class="small !px-2 bg-[#F0F0F0] border-none xl:hidden" @click="visible = true" aria-label="icon-3-dot">
        <svg viewBox="0 -53 384 384" width="20px" height="20px" class="fill-[#0066E6]">
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
        :headerStyle="{ background: '#23262F' }"
        :contentWrapperStyle="{ width: '100vw' }"
        body
        :closable="false"
        placement="right"
      >
        <template #title>
          <div class="flex items-center justify-between">
            <nuxt-link to="/"
              ><nuxt-picture loading="lazy" src="/images/logo-1.png" :img-attrs="{ alt: 'logo' }" width="136"
            /></nuxt-link>

            <button class="small !px-2 bg-[#F0F0F0] border-none" @click="visible = false" aria-label="collapse-icon">
              <svg viewBox="0 0 329.26933 329" width="20px" height="20px" class="fill-[#0066E6]">
                <path
                  d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                />
              </svg>
            </button>
          </div>
        </template>

        <div class="py-3 px-2 text-base-color rounded-[12px] hover:text-[#0066E6]">
          <nuxt-link to="#" @click="visible = false">Our Service</nuxt-link>
        </div>
        <div class="py-3 px-2">
          <nuxt-link to="#" :external="true" class="text-base-color rounded-[12px] hover:!text-[#0066E6]"
            >Offerings</nuxt-link
          >
        </div>
        <div class="py-3 px-2 text-base-color rounded-[12px] hover:text-[#0066E6]">
          <nuxt-link to="#" @click="visible = false">About us</nuxt-link>
        </div>
        <div class="py-3 px-2 text-base-color rounded-[12px] hover:text-[#0066E6]">
          <nuxt-link to="/contact-us" @click="visible = false">Contact Us</nuxt-link>
        </div>
        <div class="py-3 px-2 text-base-color rounded-[12px] hover:text-[#0066E6]"></div>
      </a-drawer>
    </header>

    <div class="page-content py-10 max-sm:mx-4 max-xl:pt-0 mt-[80px] max-xl:mt-[64px] mb-[120px]">
      <NuxtPage />
    </div>

    <footer class="bg-[url('/images/bg-footer.png')] bg-no-repeat bg-cover">
      <nuxt-picture loading="lazy" src="/images/logo-white.png" :img-attrs="{ alt: 'logo' }" width="273" />

      <div class="flex max-lg:flex-wrap gap-[40px] mt-[40px]">
        <div id="company-info" class="max-lg:w-full">
          <div id="HN-address">
            <div class="flex items-center subtitle-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26744 11.872C9.25635 11.3591 12.67 9.34622 12.67 6.00103C12.67 3.42295 10.5801 1.33301 8.002 1.33301C5.42393 1.33301 3.33398 3.42295 3.33398 6.00103C3.33398 9.34622 6.74766 11.3591 7.73657 11.872C7.90519 11.9595 8.09882 11.9595 8.26744 11.872ZM8.00204 8.00116C9.10693 8.00116 10.0026 7.10547 10.0026 6.00058C10.0026 4.89569 9.10693 4 8.00204 4C6.89715 4 6.00146 4.89569 6.00146 6.00058C6.00146 7.10547 6.89715 8.00116 8.00204 8.00116Z"
                  fill="#fff"
                />
                <path
                  d="M12.0446 11.0032C12.4543 11.3073 12.67 11.6523 12.67 12.0035C12.67 12.3547 12.4543 12.6997 12.0446 13.0038C11.6349 13.3079 11.0456 13.5605 10.336 13.7361C9.62639 13.9116 8.82141 14.0041 8.002 14.0041C7.1826 14.0041 6.37762 13.9117 5.66799 13.7361C4.95837 13.5605 4.36909 13.3079 3.95938 13.0038C3.54968 12.6997 3.33398 12.3547 3.33398 12.0035C3.33398 11.6523 3.54968 11.3073 3.95938 11.0032"
                  stroke="#fff"
                  stroke-width="1.33372"
                  stroke-linecap="round"
                />
              </svg>

              Hanoi office: 41, Phu Kieu 1, Kieu Mai, Bac Tu Liem, Ha Noi
            </div>
          </div>

          <div id="HCM-address" class="mt-3">
            <div class="flex items-center subtitle-2">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.26744 11.872C9.25635 11.3591 12.67 9.34622 12.67 6.00103C12.67 3.42295 10.5801 1.33301 8.002 1.33301C5.42393 1.33301 3.33398 3.42295 3.33398 6.00103C3.33398 9.34622 6.74766 11.3591 7.73657 11.872C7.90519 11.9595 8.09882 11.9595 8.26744 11.872ZM8.00204 8.00116C9.10693 8.00116 10.0026 7.10547 10.0026 6.00058C10.0026 4.89569 9.10693 4 8.00204 4C6.89715 4 6.00146 4.89569 6.00146 6.00058C6.00146 7.10547 6.89715 8.00116 8.00204 8.00116Z"
                  fill="#fff"
                />
                <path
                  d="M12.0446 11.0032C12.4543 11.3073 12.67 11.6523 12.67 12.0035C12.67 12.3547 12.4543 12.6997 12.0446 13.0038C11.6349 13.3079 11.0456 13.5605 10.336 13.7361C9.62639 13.9116 8.82141 14.0041 8.002 14.0041C7.1826 14.0041 6.37762 13.9117 5.66799 13.7361C4.95837 13.5605 4.36909 13.3079 3.95938 13.0038C3.54968 12.6997 3.33398 12.3547 3.33398 12.0035C3.33398 11.6523 3.54968 11.3073 3.95938 11.0032"
                  stroke="#fff"
                  stroke-width="1.33372"
                  stroke-linecap="round"
                />
              </svg>

              HCM offcice: No 10, Pham Van Hai, Tan Binh, HCM
            </div>
          </div>

          <div id="phone-number" class="flex items-center mt-6">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_180177_21763)">
                <path
                  d="M10.6599 0.666016H5.32982C4.22384 0.666016 3.33105 1.5588 3.33105 2.66478V13.3249C3.33105 14.4308 4.22384 15.3236 5.32982 15.3236H10.6599C11.7658 15.3236 12.6586 14.4308 12.6586 13.3249V2.66478C12.6586 1.5588 11.7658 0.666016 10.6599 0.666016ZM11.3261 11.9923H4.66356V2.66478H11.3261V11.9923ZM9.32735 13.9911H6.66233V13.3249H9.32735V13.9911Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_180177_21763">
                  <rect width="15.9901" height="15.9901" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div class="subtitle-3 ml-2">Tel: (+84)2432007319</div>
          </div>

          <div id="email" class="flex items-center mt-3">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.00685 6.80301C1.99805 7.16204 1.99805 7.56966 1.99805 8.03467V9.36686C1.99805 11.2509 1.99805 12.1929 2.58333 12.7782C3.16862 13.3634 4.11062 13.3634 5.99463 13.3634H9.99121C11.8752 13.3634 12.8172 13.3634 13.4025 12.7782C13.9878 12.1929 13.9878 11.2509 13.9878 9.36686V8.03467C13.9878 7.56966 13.9878 7.16204 13.979 6.80301L8.63989 9.76918C8.23754 9.99271 7.7483 9.99271 7.34595 9.76918L2.00685 6.80301ZM2.15995 5.38984C2.21513 5.4037 2.26943 5.42492 2.32153 5.45386L7.99292 8.60463L13.6643 5.45386C13.7164 5.42492 13.7707 5.40371 13.8259 5.38984C13.7393 5.07454 13.6064 4.8273 13.4025 4.62337C12.8172 4.03809 11.8752 4.03809 9.99121 4.03809H5.99463C4.11062 4.03809 3.16862 4.03809 2.58333 4.62337C2.3794 4.8273 2.24653 5.07454 2.15995 5.38984Z"
                fill="#fff"
              />
            </svg>

            <div class="subtitle-3 ml-2">Email: contact@datanomics.com.vn</div>
          </div>
        </div>

        <div class="flex flex-col gap-y-6 max-lg:w-1/2 max-lg:flex-1">
          <nuxt-link to="#" class="subtitle-3 text-white">Our Service</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">About us</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">Contact us</nuxt-link>
        </div>

        <div class="flex flex-col gap-y-6 max-lg:w-1/2 max-lg:flex-1">
          <div class="subtitle-3 text-white">Offerings</div>
          <nuxt-link to="#" class="subtitle-3 text-white">Data Management</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">BI & Data Analytics</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">Data Strategy</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">Data Governance</nuxt-link>
          <nuxt-link to="#" class="subtitle-3 text-white">Customer data platform</nuxt-link>
        </div>
      </div>
      <div class="text-white text-[14px] mt-[92px]">© Copyright – 2023 | DATANOMICS | All Rights Reserved</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.querySelector("section").scrollIntoView({ behavior: "smooth" });
  },
};
</script>

