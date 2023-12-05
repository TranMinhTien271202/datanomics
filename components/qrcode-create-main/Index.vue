<script setup>
import { SECTIONS } from "~/constants/qrcode-generate";

const STEP_TABS = [
  {
    name: "selectSection",
    label: "Chọn loại",
  },
  {
    name: "form",
    label: "Tùy chỉnh QR",
  },
  {
    name: "finish",
    label: "Hoàn tất",
  },
];
const currentStepOrder = ref(0);
const stepFinishRef = ref();

const onClickStep = (newStepOrder) => {
  if (newStepOrder >= currentStepOrder.value) return;

  currentStepOrder.value = newStepOrder;
};

const nextStep = () => {
  if (currentStepOrder === STEP_TABS.length - 1) return;

  currentStepOrder.value += 1;

  nextTick(() => {
    if (currentStepOrder.value === 2) {
      const stepFinishElement = stepFinishRef.value;
      const header = document.querySelector("header");
      const position = stepFinishElement.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 24;
      window.scrollTo({ top: position, behavior: "smooth" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const qrcodeTypesSelected = ref();
const selectQrcodeType = (value) => {
  qrcodeTypesSelected.value = value;
  nextStep();
};
</script>

<template>
  <div class="bg-white 2xl:container m-auto pt-20 max-lg:pt-5 pb-24 px-[70px] max-lg:px-5" ref="mainContent">
    <h2 class="text-center mb-14 max-lg:mb-5">Tạo QRCode</h2>

    <ul class="step-form xl:px-20">
      <li
        v-for="(step, order) in STEP_TABS"
        :key="order"
        :class="{ active: order <= currentStepOrder }"
        class="subtitle-1 cursor-pointer"
        @click="onClickStep(order)"
      >
        <span class="max-xl:hidden">{{ step.label }}</span>
      </li>
    </ul>

    <div class="xl:hidden text-center subtitle-2 w-full">{{ STEP_TABS[currentStepOrder]?.label }}</div>

    <div class="step-content pb-[80px] pt-20 max-md:pt-5 clear-both">
      <div
        v-if="currentStepOrder === 0"
        class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(208px,1fr))] gap-6 xl:px-40"
      >
        <div
          v-for="(item, key) in SECTIONS"
          :key="key"
          @click="selectQrcodeType(item.value)"
          class="qr-icon cursor-pointer"
        >
          <div
            class="flex flex-wrap gap-5 qr-icon-content items-center px-[20px] py-[16px] rounded border border-solid border-[#999999] h-[64px] transition-all duration-300"
          >
            <nuxt-picture
              loading="lazy"
              :src="`/images/qrcode-create/generate/sidebar/${key}.svg`"
              :img-attrs="{ alt: key, class: 'w-[32px]' }"
            />
            <div class="qr-icon-text">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <KeepAlive>
        <LazyQrcodeCreateMainGenerate
          v-if="currentStepOrder === 1"
          v-model:select-section="qrcodeTypesSelected"
          @next-step="nextStep"
        />
      </KeepAlive>

      <div v-if="currentStepOrder === 2" ref="stepFinishRef">
        <div class="text-center from-success border-4 rounded-[12px] border-[#ED7F22] m-auto xl:w-[846px]">
          <div
            class="bg-[url('/images/qrcode-create/generate/step/finish/bg-finish.png')] opacity-75 flex justify-center rounded-t-xl items-center bg-[#e6f7ff] 2xl:w-[838px] m-auto h-[337px] bg-cover"
          >
            <nuxt-picture
              src="/images/qrcode-create/generate/step/finish/macbook.png"
              :img-attrs="{ alt: 'macbook', class: 'mx-auto w-[325px] h-[182px]' }"
            />
          </div>
          <div class="p-[33px] text-center">
            <div class="flex justify-center">
              <nuxt-picture src="/images/logo.png" :img-attrs="{ alt: 'qrx-logo', class: 'w-[183px] h-[60px]' }" />
            </div>
            <div class="text p-[24px]">
              <p class="text-[24px] text-[#02CA16] font-[600]">Chúc mừng bạn đã lưu mã thành công</p>
              <p class="text-[16px] p-[15px] font-[500]">Đăng ký để có thể trải nghiệm nhiều hơn</p>
            </div>
            <div class="button pb-[56px]">
              <nuxt-link to="/register">
                <button
                  class="m-[5px] w-[200px] h-[56px] bg-[#ED7F22] border-none text-[#fff] font-[500] text-[16px] transition-all duration-300 hover:opacity-80"
                >
                  Đăng ký
                </button>
              </nuxt-link>

              <nuxt-link to="/register">
                <button
                  class="m-[5px] w-[200px] h-[56px] border-2 border-[#ED7F22] text-[#ED7F22] font-[500] text-[16px] transition-all duration-300 hover:opacity-80"
                >
                  Đăng ký dùng thử
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <QrcodeCreateMainContent />
  </div>
</template>
