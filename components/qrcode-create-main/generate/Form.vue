<script setup>
import { SECTIONS, TABS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
  formRules: { type: Object, require: true },
});

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};

const selectedTab = ref(TABS.colors.value);

const formRef = ref();

defineExpose({ formRef });
</script>

<template>
  <div>
    <h2 class="text-[14px] xl:text-[32px] font-semibold text-black">Tạo QR code link</h2>
    <p class="mt-2 mb-[28px]">Điền đầy đủ thông tin dưới nhé!</p>
    <a-form ref="formRef" :model="formState" :rules="formRules" class="pt-[28px] border-t-[1px]" layout="vertical">
      <!-- Section input -->
      <div>
        <KeepAlive>
          <QrcodeCreateMainGenerateSectionLocation
            v-if="formState.section === SECTIONS.location.value"
            :form-state="formState"
            @submit="onSubmit"
          />
        </KeepAlive>
        <QrcodeCreateMainGenerateSectionLink
          v-if="formState.section === SECTIONS.link.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionText
          v-else-if="formState.section === SECTIONS.text.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionMail
          v-else-if="formState.section === SECTIONS.email.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionPhone
          v-else-if="formState.section === SECTIONS.tel.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionSms
          v-else-if="formState.section === SECTIONS.sms.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionWhatsapp
          v-else-if="formState.section === SECTIONS.whatsapp.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionSkype
          v-else-if="formState.section === SECTIONS.skype.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionZoom
          v-else-if="formState.section === SECTIONS.zoom.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionWifi
          v-else-if="formState.section === SECTIONS.wifi.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionVCard
          v-else-if="formState.section === SECTIONS.vcard.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionEvent
          v-else-if="formState.section === SECTIONS.event.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionPaypal
          v-else-if="formState.section === SECTIONS.paypal.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionPaypal
          v-else-if="formState.section === SECTIONS.paypal.value"
          :form-state="formState"
          @submit="onSubmit"
        />
        <QrcodeCreateMainGenerateSectionBitcoin
          v-else-if="formState.section === SECTIONS.bitcoin.value"
          :form-state="formState"
          @submit="onSubmit"
        />
      </div>
      <!-- Select tab -->
      <div class="mt-[56px]">
        <div class="flex">
          <template v-for="(item, key, index) in TABS" :key="key">
            <input
              class="hidden"
              type="radio"
              :id="`select-tab-${key}`"
              name="selected-tab"
              v-model="selectedTab"
              :value="item.value"
            />
            <label
              :for="`select-tab-${key}`"
              class="text-black min-h-[45px] flex-grow text-center border-solid border-[#D9D9D9] cursor-pointer flex justify-center items-center border-r border-y hover:bg-[#ED7F22] hover:bg-opacity-20 transition-all duration-300"
              :class="{
                'border-l rounded-s-xl': index === 0,
                'rounded-e-xl': index === Object.keys(TABS).length - 1,
                'bg-[#ED7F22] bg-opacity-20': selectedTab === item.value,
              }"
              >{{ item.name }}</label
            >
          </template>
        </div>
        <div class="mt-10">
          <KeepAlive>
            <QrcodeCreateMainGenerateTabColor
              v-if="selectedTab === TABS.colors.value"
              @submit="onSubmit"
              :form-state="formState"
            />
            <QrcodeCreateMainGenerateTabLogo
              v-else-if="selectedTab === TABS.logo.value"
              :form-state="formState"
              @submit="onSubmit"
            />
            <QrcodeCreateMainGenerateTabDesign
              v-else-if="selectedTab === TABS.design.value"
              :form-state="formState"
              @submit="onSubmit"
            />
          </KeepAlive>
          <QrcodeCreateMainGenerateTabFrame
            v-if="selectedTab === TABS.frame.value"
            :form-state="formState"
            @submit="onSubmit"
          />
          <QrcodeCreateMainGenerateTabOption
            v-else-if="selectedTab === TABS.option.value"
            :form-state="formState"
            @submit="onSubmit"
          />
        </div>
      </div>
    </a-form>
  </div>
</template>
