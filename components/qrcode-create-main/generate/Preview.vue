<script setup>
import { EXPORT_ACTIONS } from "~/constants/qrcode-generate";
import { jsPDF } from "jspdf";

const props = defineProps({
  isLoadingQrImage: { type: Boolean, require: true },
  imageFormResponse: { type: Object, require: true },
});
const emit = defineEmits(["nextStep", "update:imageFormResponse"]);

const exportAction = ref(EXPORT_ACTIONS.png.value);
const isLoadingSaveCode = ref(false);

const onClickSaveCode = async () => {
  if (isLoading.value || !props.imageFormResponse?.content) return;

  isLoadingSaveCode.value = true;
  await onExport();
  emit("nextStep");
  isLoadingSaveCode.value = false;
};

const onExport = async () => {
  switch (exportAction.value) {
    case EXPORT_ACTIONS.pdf.value:
      await exportPdf();
      return;
    case EXPORT_ACTIONS.png.value:
      await exportPng();
      return;
    case EXPORT_ACTIONS.print.value:
      exportPrint();
      return;
    case EXPORT_ACTIONS.svg.value:
      exportSvg();
      return;
    default:
      return;
  }
};

const getSvgObjectUrl = () => {
  const svgData = new Blob([props.imageFormResponse.content], { type: "image/svg+xml;charset=utf-8" });
  return URL.createObjectURL(svgData);
};

const convertToCanvas = () => {
  return new Promise((resolve) => {
    const newImg = new Image();
    newImg.addEventListener("load", () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const newImgW = newImg.width * 2;
      const newImgH = newImg.height * 2;
      canvas.width = newImgW;
      canvas.height = newImgH;
      ctx.drawImage(newImg, 0, 0, newImgW, newImgH);
      resolve(canvas);
    });
    newImg.src = getSvgObjectUrl();
  });
};

const exportPng = async () => {
  const canvas = await convertToCanvas();
  const dataURL = canvas.toDataURL("image/png");
  downloadFile(`${props.imageFormResponse.basename}.png`, dataURL);
};

const exportSvg = () => {
  downloadFile(`${props.imageFormResponse.basename}.svg`, getSvgObjectUrl());
};

const exportPdf = async () => {
  const doc = new jsPDF("p", "pt", "a4");
  const canvas = await convertToCanvas();
  const canvasHeightRatio = canvas.height / canvas.width;
  doc.addImage(
    canvas.toDataURL("image/png"),
    0,
    0,
    doc.internal.pageSize.width,
    doc.internal.pageSize.width * canvasHeightRatio,
  );
  doc.save(`${props.imageFormResponse.basename}.pdf`);
};

const exportPrint = () => {
  const src = props.imageFormResponse.content;
  const infopanel = "";
  const win = window.open("about:blank", "_new");
  win.document.open();
  win.document.write(
    '<html><head></head><body onload="window.print()" onafterprint="window.close()">' +
      src +
      infopanel +
      "</body></html>",
  );
  win.document.close();
};

const isLoading = computed(() => {
  return isLoadingSaveCode.value || props.isLoadingQrImage;
});

const isCanExport = computed(() => {
  return !!props.imageFormResponse?.content;
});
</script>

<template>
  <aside>
    <div class="flex flex-col items-center gap-4 w-full max-w-[270px] mx-auto">
      <div class="qr-image-container">
        <a-spin :spinning="isLoadingQrImage" size="large" class="text-center bg-white">
          <div v-if="isCanExport" v-html="imageFormResponse?.content"></div>
          <nuxt-img
            v-else
            loading="lazy"
            class="block mx-auto w-full"
            src="/images/qrcode-create/generate/sample-qr.png"
            :img-attrs="{ alt: 'qrcode' }"
          />
        </a-spin>
      </div>
      <div v-if="isCanExport" class="flex items-center w-full justify-between flex-wrap gap-4">
        <template v-for="(item, key) in EXPORT_ACTIONS">
          <input
            class="hidden export-action"
            type="radio"
            :id="`save-type-${key}`"
            :value="item.value"
            v-model="exportAction"
          />
          <label :for="`save-type-${key}`">
            <template v-if="item.value === EXPORT_ACTIONS.print.value">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_182600_16365)">
                  <path
                    d="M25.3333 8V5.33333C25.3333 3.91885 24.7714 2.56229 23.7712 1.5621C22.771 0.561903 21.4145 0 20 0L12 0C10.5855 0 9.22896 0.561903 8.22876 1.5621C7.22857 2.56229 6.66667 3.91885 6.66667 5.33333V8C4.89921 8.00212 3.20474 8.70518 1.95496 9.95496C0.705176 11.2047 0.00211714 12.8992 0 14.6667L0 21.3333C0.00211714 23.1008 0.705176 24.7953 1.95496 26.045C3.20474 27.2948 4.89921 27.9979 6.66667 28C6.66667 29.0609 7.08809 30.0783 7.83824 30.8284C8.58839 31.5786 9.6058 32 10.6667 32H21.3333C22.3942 32 23.4116 31.5786 24.1618 30.8284C24.9119 30.0783 25.3333 29.0609 25.3333 28C27.1008 27.9979 28.7953 27.2948 30.045 26.045C31.2948 24.7953 31.9979 23.1008 32 21.3333V14.6667C31.9979 12.8992 31.2948 11.2047 30.045 9.95496C28.7953 8.70518 27.1008 8.00212 25.3333 8ZM9.33333 5.33333C9.33333 4.62609 9.61429 3.94781 10.1144 3.44772C10.6145 2.94762 11.2928 2.66667 12 2.66667H20C20.7072 2.66667 21.3855 2.94762 21.8856 3.44772C22.3857 3.94781 22.6667 4.62609 22.6667 5.33333V8H9.33333V5.33333ZM22.6667 28C22.6667 28.3536 22.5262 28.6928 22.2761 28.9428C22.0261 29.1929 21.687 29.3333 21.3333 29.3333H10.6667C10.313 29.3333 9.97391 29.1929 9.72386 28.9428C9.47381 28.6928 9.33333 28.3536 9.33333 28V22.6667C9.33333 22.313 9.47381 21.9739 9.72386 21.7239C9.97391 21.4738 10.313 21.3333 10.6667 21.3333H21.3333C21.687 21.3333 22.0261 21.4738 22.2761 21.7239C22.5262 21.9739 22.6667 22.313 22.6667 22.6667V28ZM29.3333 21.3333C29.3333 22.3942 28.9119 23.4116 28.1618 24.1618C27.4116 24.9119 26.3942 25.3333 25.3333 25.3333V22.6667C25.3333 21.6058 24.9119 20.5884 24.1618 19.8382C23.4116 19.0881 22.3942 18.6667 21.3333 18.6667H10.6667C9.6058 18.6667 8.58839 19.0881 7.83824 19.8382C7.08809 20.5884 6.66667 21.6058 6.66667 22.6667V25.3333C5.6058 25.3333 4.58839 24.9119 3.83824 24.1618C3.08809 23.4116 2.66667 22.3942 2.66667 21.3333V14.6667C2.66667 13.6058 3.08809 12.5884 3.83824 11.8382C4.58839 11.0881 5.6058 10.6667 6.66667 10.6667H25.3333C26.3942 10.6667 27.4116 11.0881 28.1618 11.8382C28.9119 12.5884 29.3333 13.6058 29.3333 14.6667V21.3333Z"
                  />
                  <path
                    d="M24 13.3335H21.3333C20.9797 13.3335 20.6406 13.474 20.3905 13.724C20.1405 13.9741 20 14.3132 20 14.6668C20 15.0205 20.1405 15.3596 20.3905 15.6096C20.6406 15.8597 20.9797 16.0002 21.3333 16.0002H24C24.3536 16.0002 24.6928 15.8597 24.9428 15.6096C25.1929 15.3596 25.3333 15.0205 25.3333 14.6668C25.3333 14.3132 25.1929 13.9741 24.9428 13.724C24.6928 13.474 24.3536 13.3335 24 13.3335Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_182600_16365"><rect width="32" height="32" fill="white" /></clipPath>
                </defs>
              </svg>
            </template>
            <template v-else>{{ item.value.toUpperCase() }}</template>
          </label>
        </template>
      </div>
      <button
        v-if="isCanExport"
        type="button"
        class="bg-[#ED7F22] text-white w-full border-[#ED7F22] cursor-pointer hover:opacity-80 transition-all duration-300"
        @click="onClickSaveCode"
      >
        <span class="text-white">Lưu mã</span>
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.qr-image-container {
  :deep(svg) {
    width: 100%;
    margin: 0 auto;
    height: auto;
  }
}

.export-action {
  display: none;

  + label {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 8px;
    color: black;
    border: 2px solid transparent;

    svg {
      fill: black;
    }

    &:hover {
      border: 2px solid #ed7f22;
      color: #ed7f22;

      svg {
        fill: #ed7f22;
      }
    }
  }

  &:checked {
    + label {
      border: 2px solid #ed7f22;
      color: #ed7f22;

      svg {
        fill: #ed7f22;
      }
    }
  }
}
</style>
