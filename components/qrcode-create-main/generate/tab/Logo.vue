<script setup>
import { TABS, FORM_NONE, LOGOS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = TABS.logo.fields;

const emit = defineEmits(["submit"]);

const logos = ref({ ...LOGOS });

const onSubmit = () => {
  emit("submit");
};

const onChangeFileList = (value) => {
  if (value.file.status === "done" && value.file.originFileObj) {
    const file = value.file.originFileObj;
    const newImg = new Image();
    newImg.crossOrigin = "Anonymous";

    getBase64(file, (result) => {
      newImg.src = result;
    });

    newImg.addEventListener("load", function () {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 400;
      const MAX_HEIGHT = 400;
      let width = this.width;
      let height = this.height;

      if (width === 0 || height === 0) {
        return false;
      }

      let ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, 0, 0);

      if (width > height) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
      } else {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
      canvas.width = width;
      canvas.height = height;

      ctx = canvas.getContext("2d");
      ctx.drawImage(newImg, 0, 0, width, height);

      const dataurl = canvas.toDataURL();
      logos.value[file.name] = { src: dataurl, value: dataurl };
      props.formState[FIELDS.optionlogo.value] = logos.value[file.name].value;

      onSubmit();
    });
  }
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <div>
      <p class="font-semibold text-black">Tùy chọn logo</p>
      <a-upload
        class="bg-[#F5F5F5] flex flex-col border-dashed rounded-xl border-2 border-[#ED7F22] mt-5 hover:opacity-80"
        :customRequest="dummyRequest"
        accept="image/*"
        :capture="null"
        :max-count="1"
        :show-upload-list="false"
        @change="onChangeFileList"
      >
        <div class="w-full h-full p-5 flex justify-center items-center text-center gap-4">
          <nuxt-picture class="w-[24px] h-[24px]" src="/images/icons/inbox-out-1.png" :img-attrs="{ alt: 'upload' }" />
          <div class="text-black">Tải logo của bạn lên</div>
        </div>
      </a-upload>
    </div>

    <div>
      <p class="font-semibold text-black">Logo có sẵn</p>
      <div class="grid gap-4 justify-between grid-cols-[repeat(auto-fill,42px)] mt-5">
        <template v-for="(item, key) in logos" :key="key">
          <input
            type="radio"
            :id="`watermark-${key}`"
            v-model="formState[FIELDS.optionlogo.value]"
            :value="item.value"
            class="hidden"
            @change="onSubmit"
          />
          <label
            :for="`watermark-${key}`"
            class="cursor-pointer p-1 w-[42px] h-[42px] flex items-center justify-center border rounded-[3px] border-[#D9D9D9] text-black hover:border-[#ED7E22] transition-all duration-300"
            :class="{ 'border-[#ED7F22]': item.value === formState[FIELDS.optionlogo.value] }"
          >
            <div v-if="item.value === FORM_NONE" v-html="item.src" />
            <nuxt-img v-else :src="item.src" :img-attrs="{ alt: `image-watermark-${key}` }" class="object-contain max-w-full max-h-full" />
          </label>
        </template>
      </div>
      <a-checkbox class="mt-6" v-model:checked="formState[FIELDS.no_logo_bg.value]" @change="onSubmit"
        >Xóa Background phía sau Logo</a-checkbox
      >
    </div>
  </div>
</template>
