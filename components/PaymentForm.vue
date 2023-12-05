<template>
  <section v-show="stepCurrent === 0">
    <section>
      <div class="text-[40px] text-[#000000] font-[600] mb-[30px]">{{ steptabs[stepCurrent]?.label }}</div>
      <div class="flex">
        <div class="max-xl:w-[140px] max-xl:ml-[7px]">
          <p class="text-[24px] mb-[40px] font-[600] text-[#333333]">Lựa chọn nhu cầu</p>
          <div
            v-for="(agreement, index) in agreements"
            :key="index"
            class="agreement-container bg-[#ffffff] border-[3px] cursor-pointer mb-[24px] max-xl:mb-[12px] shadow-lg border-[#ffffff] w-[302px] max-xl:w-[120px] rounded-[12px] py-[5px] px-[13px]"
            @click="toggleAgreements(agreement.id)"
            :class="{
              agreement: agreement.checked,
              'opacity-50': agreement.disabled,
              'agreements-disabled': agreement.disabled,
            }"
          >
            <div class="py-[10px] border-dashed flex items-center" :class="{ 'border-b-[2px]': agreement.checked }">
              <img :src="agreement.icon" alt="" />
              <span class="pl-[5px] text-[#000000] font-[600]">{{ agreement.description }}</span>
            </div>
            <div class="expandable p-[10px] max-xl:hidden" :class="{ expanded: agreement.checked }">
              {{ agreement.description }}
            </div>
          </div>
        </div>
        <div>
          <p class="text-[24px] mb-[40px] font-[600] pl-[20px] text-[#333333]">Các tính năng tương ứng</p>
          <div class="flex flex-wrap">
            <TransitionGroup>
              <div
                class="bg-[#ffffff] border-[2px] border-[#F5F5F5] cursor-pointer ml-[20px] max-xl:ml-[10px] mb-[20px] shadow-lg max-xl:mb-[12px] h-fit w-[330px] max-xl:w-[230px] rounded-[12px]"
                v-for="(agreementqrx, index) in agreementsqrx"
                :key="agreementqrx.description"
                :class="{ agreement: agreementqrx.checked }"
              >
                <div @click="toggleAgreementqrx(agreementqrx.id)" class="p-[10px]">
                  <div class="border-b-[2px] border-dashed py-[10px]">
                    <span class="font-[700] text-[#333333] text-[20px] max-xl:text-[14px]">{{
                      agreementqrx.description
                    }}</span>
                  </div>
                  <div
                    class="py-[10px] payment-desc max-xl:hidden"
                    :class="{ 'border-dashed': agreementqrx.checked, 'border-b-[2px]': agreementqrx.checked }"
                  >
                    <p v-html="agreementqrx.description"></p>
                  </div>
                </div>
                <div class="expandable p-[10px] rounded-[12px]" :class="{ expanded: agreementqrx.checked }">
                  <div>
                    <div v-show="agreementqrx.user_qrx" class="flex justify-between mt-[10px] items-center mx-[20px]">
                      <div>
                        <p class="text-[#000000] text-[14px] font-[700]">Số User:</p>
                      </div>
                      <div>
                        <select
                          class="border-2 w-[200px] leading-tight focus:outline-none focus:bg-red focus:border-[#ED7F22] h-[40px] rounded-[8px]"
                          v-model="userNumber['userNumber_' + agreementqrx.id]"
                          @input="UserNumber(agreementqrx.id)"
                        >
                          <option :value="0">Mời chọn số người dùng</option>
                          <option :value="5">5 người dùng</option>
                          <option :value="10">10 người dùng</option>
                          <option :value="20">20 người dùng</option>
                          <option :value="30">30 người dùng</option>
                        </select>
                      </div>
                    </div>
                    <div v-show="agreementqrx.code_qrx" class="flex justify-between mt-[10px] items-center mx-[20px]">
                      <div>
                        <p class="text-[#000000] text-[14px] font-[700]">Số mã:</p>
                      </div>
                      <div>
                        <select
                          class="border-2 w-[200px] leading-tight focus:outline-none focus:bg-red focus:border-[#ED7F22] h-[40px] rounded-[8px]"
                          v-model="codeNumber['numberCode_' + agreementqrx.id]"
                          @input="numberCode(agreementqrx.id)"
                        >
                          <option :value="0" selected>Mời chọn số người dùng</option>
                          <option :value="5">5 người dùng</option>
                          <option :value="10">10 người dùng</option>
                          <option :value="20">20 người dùng</option>
                          <option :value="30">30 người dùng</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </section>
    <div class="fixed bottom-0 bg-[#F5F5F5] px-[80px] m-auto left-0 right-0 text-right">
      <div class="p-[10px] max-xl:pb-[30px] max-xl:w-[500px] inline-flex items-center">
        <div class="px-[10px]">
          <p class="text-[24px] max-xl:text-[18px] text-[#999999] font-[600]">Tổng báo giá</p>
          <span class="text-[32px] max-xl:text-[18px] text-[#000000] font-[500]"
            >{{ formatPrice(totalPrice) }} <span class="text-[8px]">(đồng)</span></span
          >
        </div>
        <button @click="nextStep" class="bg-[#ED7F22] text-[#ffff] text-[16px] font-[500] border-none">
          Thanh Toán
        </button>
      </div>
    </div>
  </section>
  <section v-show="stepCurrent === 1">
    <div class="flex justify-center">
      <div class="flex-1 px-[10px]">
        <p class="border-b-[3px] border-dashed py-[10px] text-[40px] max-lg:text-[30px]">
          {{ steptabs[stepCurrent]?.label }}
        </p>
        <div class="flex flex-wrap">
          <div
            v-for="(item, index) in selectedAgreements"
            :key="index"
            class="bg-[#ffffff] border-[3px] my-[10px] agreement mr-[20px] cursor-pointer border-[#ffffff] w-[302px] h-[129px] rounded-[12px] py-[5px] px-[13px]"
          >
            <div class="border-b-[2px] py-[10px] border-dashed flex items-center">
              <img :src="item.icon" alt="" />
              <span class="pl-[5px]">{{ item.description }}</span>
            </div>
            <span>{{ item.long_description }}</span>
          </div>
        </div>
        <div>
          <p class="text-[24px] text-[#000000]">các tính năng tương ứng</p>
          <div
            v-for="(item, index) in selectedAgreementsqrx"
            :key="index"
            class="bg-[#ffffff] my-[15px] rounded-[6px] shadow-lg"
          >
            <div class="flex justify-between py-[10px] px-[20px]">
              <div class="text-[#000000] text-[24px]">{{ item.description }}</div>
              <div class="text-[#ED7F22] text-[24px]">
                {{ formatPrice(item.price) }}<span class="text-[#ED7F22] text-[24px]">đ</span>
              </div>
            </div>
            <div v-show="item.user_qrx" class="flex justify-between py-[10px] px-[20px]">
              <div class="text-[#000000] text-[24px]">Số User</div>
              <input
                disabled
                class="appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#ED7F22]"
                type="text"
                :value="item.count_user_qrx"
              />
            </div>
            <div v-show="item.code_qrx" class="flex justify-between py-[10px] px-[20px]">
              <div class="text-[#000000] text-[24px]">Số mã</div>
              <input
                disabled
                class="appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#ED7F22]"
                type="text"
                :value="item.count_code_qrx"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 px-[10px] mx-[10px]">
        <div class="bg-[#fcfcfd] rounded-[12px]">
          <div class="px-[20px]">
            <p class="py-[30px] text-[40px] text-[#333333] max-lg:text-[30px]">Ước tính chi phí</p>
            <div class="grid grid-cols-[70px,1fr]">
              <span>Lưu ý</span>
              <div>
                <li>Giá cả có thể được điều chỉnh tùy theo nhu cầu và mức độ mở rộng của bạn!</li>
                <li>Nếu có bất kỳ thắc mắc gì giá cả bạn có thể liên hệ với chúng tôi.</li>
              </div>
            </div>
            <div class="flex justify-between py-[30px]">
              <div>
                <p class="text-[40px] font-[600] text-[#999999] max-lg:text-[20px]">Tổng</p>
              </div>
              <div>
                <p class="text-[40px] font-[600] text-[#ED7F22] max-lg:text-[20px]">
                  {{ formatPrice(totalPrice) }}
                  <span class="text-[#ED7F22] text-[40px] max-lg:text-[20px]">đ</span>
                </p>
              </div>
            </div>
            <div class="text-center pb-[15px]">
              <div>
                <button class="bg-[#ED7F22] text-[#ffffff] border-none my-[5px] w-2/3" @click="nextStep">
                  Mua ngay
                </button>
              </div>
              <div><button class="text-[#ED7F22] border-[#ED7F22] border-2 my-[5px] w-2/3">Liên hệ</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed bottom-0 w-[1440px] max-xl:w-auto bg-[#F5F5F5] px-[60px] m-auto left-0 right-0 text-right">
      <div class="p-[10px] inline-flex items-center">
        <button @click="prewStep" class="border-[#ED7F22] text-[#ED7F22] text-[16px] font-[500] border-2 mx-[15px]">
          Quay lại
        </button>
        <button class="bg-[#ED7F22] text-[#ffff] text-[16px] font-[500] border-none mx-[15px]">Thoát</button>
      </div>
    </div>
  </section>
  <section v-show="stepCurrent === 2">
    <div class="flex justify-center">
      <div class="flex-1 px-[10px]">
        <p class="border-b-[3px] border-dashed py-[10px] text-[40px] text-[#000000] max-lg:text-[30px]">
          {{ steptabs[stepCurrent]?.label }}
        </p>
        <p class="text-[24px] text-[#000000]">chọn hình thức thanh toán</p>
        <PaymentType />
      </div>
      <div class="max-lg:w-1/3 px-[10px] mx-[10px]">
        <div class="bg-[#fcfcfd] rounded-[12px]">
          <div class="p-[20px]">
            <p class="py-[30px] text-[40px] text-[#333333] max-lg:text-[20px]">Thông tin thanh toán</p>
            <div class="flex flex-wrap py-[5px]">
              <p>
                Dịch vụ:
                <span v-for="(item, index) in selectedAgreements" :key="index" class="text-[#000000]">
                  {{ item.description }},
                </span>
              </p>
            </div>
            <p>Tính năng</p>
            <div v-for="(item, index) in selectedAgreementsqrx" :key="index" class="my-[5px]">
              <div class="flex justify-between py-[5px] px-[20px]">
                <div class="text-[16px]">{{ item.description }}</div>
                <div class="text-[#000000] text-[16px]">
                  {{ formatPrice(item.price) }}<span class="text-[#000000] text-[16px]"> đ</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center my-[20px] rounded-[12px] bg-[#F5F5F5] px-[5px] py-[10px]">
              <div class="text-[16px] max-lg:text-[12px]">Tổng</div>
              <div class="text-[#ED7F22] text-[16px]">
                {{ formatPrice(totalPrice) }}<span class="text-[#ED7F22] text-[16px]"> đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const agreements = ref([]);
const agreementsqrx = ref([]);
const totalPrice = ref(0);
const steptabs = ref([
  {
    label: "Bảng giá QRX",
    isActivated: true,
  },
  {
    label: "Tóm tắt đơn hàng",
    isActivated: false,
  },
  {
    label: "Thanh toán đơn hàng",
    isActivated: false,
  },
]);
const config = useRuntimeConfig();
const stepCurrent = ref(0);
const selectedAgreements = ref([]);
const selectedAgreementsqrx = ref([]);
const userNumber = ref({});
const codeNumber = ref({});
const errors = ref([]);
onMounted(() => {
  $fetch("api/packages", { baseURL: config.public.baseUrl.crm })
    .then(function (response) {
      agreements.value = response.data;
    })
    .catch(function (error) {
      errors.value.push(error);
    });
  $fetch("api/services", { baseURL: config.public.baseUrl.crm })
    .then(function (response) {
      agreementsqrx.value = response.data;
      if (userNumber.value) {
        agreementsqrx.value.forEach((row, index) => {
          userNumber.value["userNumber_" + row.id] = 0;
        });
      }
      if (codeNumber.value) {
        agreementsqrx.value.forEach((row, index) => {
          codeNumber.value["numberCode_" + row.id] = 0;
        });
      }
    })
    .catch(function (error) {
      errors.value.push(error);
    });
});
const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const toggleAgreements = (id) => {
  const agreement = agreements.value.find((agr) => agr.id === id);

  if (!agreement) {
    return;
  }

  const originalCheckedState = agreement.checked;

  if (!originalCheckedState) {
    agreement.checked = true;

    const correspondingItems = agreementsqrx.value.filter((item) => item.package_id.includes(id));

    agreementsqrx.value = correspondingItems.concat(
      agreementsqrx.value.filter((item) => !item.package_id.includes(id)),
    );
    setTimeout(() => {
      selectedAgreementsqrx.value = agreementsqrx.value.filter((item) => item.checked === true);
      totalPrice.value = agreementsqrx.value.reduce((total, item) => {
        return item.checked ? total + parseFloat(item.price || 0) : total;
      }, 0);
    }, 0);
    correspondingItems.forEach((item) => {
      item.checked = true;
    });

    agreementsqrx.value.sort((a, b) => (a.checked && !b.checked ? -1 : a.checked || !b.checked ? 1 : 0));

    const parentIds = agreement.parent_id;
    const childAgreements = agreements.value.filter((agr) => parentIds.includes(agr.id));

    childAgreements.forEach((child) => {
      if (!child.checked) {
        child.checked = true;
        totalPrice.value += child.price || 0;
      }
    });

    agreements.value.forEach((agr, agrIndex) => {
      if (parentIds.includes(agr.id) && !agr.checked) {
        agr.disabled = true;
        agr.border = false;
      }
    });

    agreements.value.forEach((agr, agrIndex) => {
      if (agr.id !== agreement.id && parentIds.includes(agr.id) && agr.checked) {
        agr.disabled = true;
        agr.border = false;
        agr.checked = false;
        totalPrice.value -= agr.price || 0;
      }
    });

    const selectedAgreementIndex = selectedAgreements.value.findIndex((selectedAgr) => selectedAgr.id === agreement.id);
    if (selectedAgreementIndex === -1) {
      selectedAgreements.value.push(agreement);
    }
  } else {
    agreement.checked = false;

    const correspondingItems = agreementsqrx.value.filter((item) => item.package_id.includes(id));
    setTimeout(() => {
      totalPrice.value = agreementsqrx.value.reduce((total, item) => {
        return item.checked ? total + parseFloat(item.price || 0) : total;
      }, 0);
    }, 0);
    agreementsqrx.value.forEach((item) => {
      if (!agreements.value.some((agr) => agr.checked && item.package_id.includes(agr.id))) {
        item.checked = false;
        const delayNumber = userNumber.value["userNumber_" + item.id] || 0;
        const delayCode = codeNumber.value["numberCode_" + item.id] || 0;
        setTimeout(() => {
          item.price = item.price - (delayNumber * 10000 + delayCode * 10000);
          userNumber.value["userNumber_" + item.id] = 0;
          codeNumber.value["numberCode_" + item.id] = 0;
        }, 0);
      }
    });

    agreementsqrx.value.sort((a, b) => (a.checked && !b.checked ? -1 : a.checked || !b.checked ? 1 : 0));

    const parentIds = agreement.parent_id;
    if (parentIds.length > 0) {
      agreements.value.forEach((agr, agrIndex) => {
        if (parentIds.includes(agr.id) && !agr.checked) {
          agr.disabled = true; // Remove disable when disabled
          agr.border = false; // Show border again when disabled
        }
      });
      const selectedAgreementIndex = selectedAgreements.value.findIndex(
        (selectedAgr) => selectedAgr.id === agreement.id,
      );
      if (selectedAgreementIndex !== -1) {
        selectedAgreements.value.splice(selectedAgreementIndex, 1);
      }
    }

    const anyAgreementChecked = agreements.value.some((agr) => agr.checked);
    if (!anyAgreementChecked) {
      selectedAgreements.value = [];
      selectedAgreementsqrx.value = [];
    }
    if (!anyAgreementChecked) {
      agreements.value.forEach((agr, agrIndex) => {
        agr.disabled = false;
        agr.border = true;
      });
    }
  }
};
const toggleAgreementqrx = (id) => {
  const agreementqrx = agreementsqrx.value.find((item) => item.id === id);
  const originalCheckedState = agreementqrx.checked;
  if (!originalCheckedState) {
    agreementqrx.checked = true;
    selectedAgreementsqrx.value = agreementsqrx.value.filter((item) => item.checked === true);
    agreementsqrx.value.sort((a, b) => {
      if (a.checked && !b.checked) return -1;
      if (!a.checked && b.checked) return 1;
      return 0;
    });
    totalPrice.value += parseFloat(agreementqrx.price || 0);

    // Thêm vào selectedAgreementsqrx
    if (!selectedAgreementsqrx.value.includes(agreementqrx)) {
      selectedAgreementsqrx.value.push(agreementqrx);
    }
  } else {
    agreementqrx.checked = false;
    // Sắp xếp lại mảng agreementsqrx
    agreementsqrx.value.sort((a, b) => {
      if (a.checked && !b.checked) return -1;
      if (!a.checked && b.checked) return 1;
      return 0;
    });
    totalPrice.value -= agreementqrx.price || 0;
    const delayNumber = userNumber.value["userNumber_" + id] ?? 0;
    const delayCode = codeNumber.value["numberCode_" + id] ?? 0;
    setTimeout(() => {
      agreementsqrx.value.reduce((total, item) => {
        if (item.id === id) {
          item.price = parseFloat(item.price || 0) - (delayNumber * 10000 + delayCode * 10000);
          return total;
        } else {
          return total;
        }
      }, 0);
      userNumber.value["userNumber_" + id] = 0;
      codeNumber.value["numberCode_" + id] = 0;
    }, 0);

    const selectedAgreementqrxIndex = selectedAgreementsqrx.value.findIndex(
      (selectedAgr) => selectedAgr.id === agreementqrx.id,
    );
    if (selectedAgreementqrxIndex !== -1) {
      selectedAgreementsqrx.value.splice(selectedAgreementqrxIndex, 1);
    }
  }
};
const nextStep = () => {
  stepCurrent.value += 1;
  this.steptabs.value[this.stepCurrent.value].isActivated = true;
};
const prewStep = () => {
  stepCurrent.value -= 1;
  this.steptabs.value[this.stepCurrent.value].isActivated = true;
};
const UserNumber = (id) => {
  const delayNumber = userNumber.value["userNumber_" + id] ?? 0;
  const money = 10000;
  setTimeout(() => {
    const number = userNumber.value["userNumber_" + id] ?? 0;
    totalPrice.value += agreementsqrx.value.reduce((total, item) => {
      if (item.id === id) {
        d;
        item.count_user_qrx = number;
        item.price = parseFloat(item.price) + number * money - delayNumber * money;
        return total + parseFloat(number * money) - parseFloat(delayNumber * money);
      } else {
        return total;
      }
    }, 0);
  }, 0);
};

const numberCode = (id) => {
  const delayCode = codeNumber.value["numberCode_" + id] ?? 0;
  const money = 10000;
  setTimeout(() => {
    const number = codeNumber.value["numberCode_" + id] ?? 0;
    totalPrice.value += agreementsqrx.value.reduce((total, item) => {
      if (item.id === id) {
        item.count_code_qrx = number;
        item.price = parseFloat(item.price) + number * money - delayCode * money;
        return total + parseFloat(number * money) - parseFloat(delayCode * money);
      } else {
        return total;
      }
    }, 0);
  }, 0);
};
</script>
