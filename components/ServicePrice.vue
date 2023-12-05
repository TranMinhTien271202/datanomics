<script  setup>
import { formatCurrency } from "~/utils/string"
import { watch, ref } from "#imports";
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  },
  quantityMarkCurrent: {
    type: Number,
    default: null
  },
  maxQuantityMark: {
    type: Number,
    default: 1
  },
  getTrafficFee: {
    type: Function,
    required: true,
  }
});

watch(
  () => props.quantityMarkCurrent,
  (quantity) => {
    props.data.trafficFee = props.getTrafficFee(quantity);
    props.data.total = props.data.subscriptionFee + props.data.trafficFee;
    selectedQuantityMark.value = props.data.quantityMarks[quantity];
  },
);

const selectedQuantityMark = ref(0);
const quantityMarkOptions = ref([])
const onInit = () => {
  quantityMarkOptions.value = Object.values(props.data?.quantityMarks)?.map(mark => ({
    label: formatCurrency(mark),
    value: mark
  }));
  selectedQuantityMark.value = props.data?.quantityMarks[0];
}
onInit();

const emit = defineEmits(["update:quantityMarkCurrent"]);

const handleChangePoint = (point) => {
  emit("update:quantityMarkCurrent", point);
}
</script>

<template>
  <section class="mt-10 2xl:container m-auto bg-white rounded-[48px]">
    <div class="p-20 max-md:p-10">
      <h2 class="text-center max-lg:w-[70%] max-lg:mx-auto">{{ data.title }}</h2>

      <template v-if="$route.name === 'qrcode-loyalty'">
         <div class="border-[2px] border-solid border-gray-100 max-md:w-4/6 xl:w-2/6 mx-auto mt-5" />

         <div class="flex items-end justify-center py-12">
           <h1 class="text-primary"> {{ formatCurrency(15000000) }}</h1>
           <span class="leading-10 pl-2">đ/năm</span>
         </div>
      </template>

      <template v-else>
        <div class="flex max-lg:justify-between items-center gap-10 mt-5">
          <div class="w-[100px]"> {{ $route.name === 'qrcode-marketing' ? 'Gói dịch vụ': 'Số mã'}}:</div>

          <a-slider
            :value="quantityMarkCurrent"
            :marks="data.quantityMarks"
            :track-style="{ background: '#ED7F22'}"
            :handle-style="{
              background: '#ed7f22',
              border: '3px solid white',
              outline: '2px solid #ed7f22'
            }"
            :step="null"
            :tooltip-visible="false"
            :max="maxQuantityMark"
            class="w-[80%] !mt-5 wrapper-slider max-lg:hidden"
            @change="handleChangePoint"
          >
            <template #mark="{ label, point }">
              <span :class="{'text-primary': point === quantityMarkCurrent }">{{  formatCurrency(label)  }}</span>
            </template>
          </a-slider>

          <a-select
            :value="selectedQuantityMark"
            :options="quantityMarkOptions"
            :clear-icon="false"
            default-active-first-option
            class="w-[130px] xl:hidden"
          />
        </div>

        <div class="flex items-center justify-between gap-10 mt-5">
          <div class="subtitle-3" v-if="['qrcode-anti-fake', 'qrcode-warranty'].includes( $route.name)">Phí lưu lượng</div>
          <div class="subtitle-3 text-primary" v-if="$route.name === 'qrcode-marketing'">Gói dùng thử (14 ngày)</div>
          <div class="subtitle-1 text-primary">{{ formatCurrency(data.trafficFee) }}</div>
        </div>

        <div class="flex items-center justify-between gap-10 mt-5">
          <div class="subtitle-3 lg:flex">
            Phí Thuê bao
            <div class="text-muted lg:pl-2">(Miễn phí năm đầu tiên sử dụng)</div>
          </div>
          <div class="subtitle-1 text-primary">{{ formatCurrency(data.subscriptionFee) }}</div>
        </div>
      </template>

      <div class="border-[2px] border-solid border-gray-100 w-full my-5" />

      <div class="flex justify-between">
        <div class="subtitle-1">Tổng tạm tính</div>

        <div class="subtitle-1 text-primary">{{ formatCurrency(data.total) }}</div>
      </div>

      <div class="text-center mt-5">Giá cả sẽ được điều chỉnh tùy theo nhu cầu và mức độ mở rộng của dịch vụ!</div>
    </div>

    <div class="border-[2px] border-solid border-gray-100 w-full" />

    <div class="p-16 max-md:p-10 text-center">
      <div class="subtitle-2 mb-12 max-md:w-[2/3]">Tất cả các chức năng để tự động hóa hệ thống quản lý kênh phân phối: </div>

      <div class="lg:flex lg:justify-between lg:w-[60%] lg:mx-auto !text-left">
       <div class="flex flex-col gap-y-5">
         <div class="flex items-center gap-3">
           <nuxt-picture loading="lazy" src="/images/icons/ic-check.svg" :imgAttrs="{ alt: 'check' }" />
           Quản lý sản phẩm
         </div>

         <div class="flex items-center gap-3">
           <nuxt-picture loading="lazy" src="/images/icons/ic-check.svg" :imgAttrs="{ alt: 'check' }" />
           Quản lý thông tin, phản hồ ý kiến của khách hàng
         </div>

       </div>

        <div class="flex flex-col gap-y-5 max-md:mt-5">
          <div class="flex items-center gap-3">
            <nuxt-picture loading="lazy" src="/images/icons/ic-check.svg" :imgAttrs="{ alt: 'check' }" />
            Báo cáo doanh thu, chi phí
          </div>

          <div class="flex items-center gap-3">
            <nuxt-picture loading="lazy" src="/images/icons/ic-check.svg" :imgAttrs="{ alt: 'check' }" />
            Quản lý chống giả
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
