<script setup>
const config = useRuntimeConfig();

const formState = reactive({
  firstname: "",
  lastname: "",
  phonenumber: "",
  email: "",
  title: "",
  message: "",
  demands: [],
  souece: 12
});

const validatorPhonenumber = async (_rule, value) => {
  if (errors.phonenumber) {
    return Promise.reject(errors.phonenumber);
  }
  return Promise.resolve();
};

const validatorEmail = async (_rule, value) => {
  if (errors.email) {
    return Promise.reject(errors.email);
  }
  return Promise.resolve();
};

const rules = {
  firstname: { required: true, message: "Tên không được để trống" },
  lastname: { required: true, message: "Họ không được để trống" },
  phonenumber: [{ required: true, message: "Số điện thoại không được để trống" }, { validator: validatorPhonenumber }],
  email: [
    { required: true, message: "Email không được để trống" },
    { type: "email", message: "Email không đúng định dạng" },
    { validator: validatorEmail },
  ],
  title: { required: true, message: "Chức vụ không được để trống" },
  message: { required: true, message: "Lời nhắn không được để trống" },
};

let errors = {};

const demands = ref([]);

const loading = ref(false);
const formRef = ref();
const visibleResultModal = ref(false);

const getDemands = async () => {
  try {
    const response = await $fetch("api/contacts/demands", { baseURL: config.public.baseUrl.crm });
    demands.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const onSubmit = async () => {
  loading.value = true;
  const formData = new FormData();

  for (const key in formState) {
    if (key === "demands") {
      for (const id of formState[key]) {
        formData.append("demands[]", +id);
      }
      continue;
    }

    formData.append(key, formState[key]);
  }

  try {
    const response = await $fetch("api/lead/create", {
      baseURL: config.public.baseUrl.crm,
      method: "POST",
      body: formData,
    });
    if (response.status) {
      loading.value = false;
      formRef.value.resetFields();
      visibleResultModal.value = true;
    }
  } catch (error) {
    if (error.status === 404) {
      errors = error.data.error;
      formRef.value.validateFields();
      errors = {};
    }
    loading.value = false;
    console.log(error);
  }
};

onMounted(() => {
  getDemands();
});
</script>

<template>
  <div class="xl:flex gap-8">
    <div class="basis-1/2">
      <div class="p-10">
        <h3 class="border-b-2 pb-4">Quy trình triển khai</h3>
        <div class="pt-5 flex">
          <h3 class="text-primary">01</h3>
          <div class="pt-2 pl-5">Tạo tài khoản</div>
        </div>
        <div class="pt-5 flex">
          <h3 class="text-primary">02</h3>
          <div class="pt-2 pl-5">Dùng thử sản phẩm</div>
        </div>
        <div class="pt-5 flex">
          <h3 class="text-primary">03</h3>
          <div class="pt-2 pl-5">Đề xuất gói sản phẩm phù hợp</div>
        </div>
        <div class="pt-5 flex">
          <h3 class="text-primary">04</h3>
          <div class="pt-2 pl-5">Lên phương án đề xuất</div>
        </div>
        <div class="pt-5 flex">
          <h3 class="text-primary">05</h3>
          <div class="pt-2 pl-5">Gửi bản báo giá</div>
        </div>
        <div class="pt-5 flex">
          <h3 class="text-primary">06</h3>
          <div class="pt-2 pl-5">Ký hợp đồng & triển khai</div>
        </div>
      </div>
    </div>
    <div class="basis-1/2">
      <section id="contact-us" class="bg-white p-10 rounded-[48px] shadow-lg shadow-[#c6c6c6]">
        <div class="max-xl:text-center">
          <h3 class="font-semibold">Hãy kết nối với chúng tôi ngay</h3>
          <p class="subtitle-2 text-[#333333] mt-4">
            Vui lòng điền thông tin của bạn ở dưới đây để đăng ký dùng thử hoặc nhận tư vấn miễn phí.
          </p>

          <a-form
            ref="formRef"
            class="w-full mt-5 max-xl:text-left"
            layout="vertical"
            :model="formState"
            :rules="rules"
            @finish="onSubmit"
          >
            <div class="sm:flex">
              <a-form-item label="Tên" class="sm:w-1/2" name="firstname">
                <a-input v-model:value="formState.firstname" placeholder="Nhập tên" />
              </a-form-item>

              <a-form-item label="Họ" class="sm:w-1/2 sm:ml-6" name="lastname">
                <a-input v-model:value="formState.lastname" placeholder="Nhập họ" />
              </a-form-item>
            </div>

            <a-form-item label="Số điện thoại" class="flex-1" name="phonenumber">
              <a-input v-model:value="formState.phonenumber" placeholder="Nhập số điện thoại" />
            </a-form-item>

            <a-form-item label="Email" class="flex-1" name="email">
              <a-input v-model:value="formState.email" placeholder="Nhập email" />
            </a-form-item>

            <a-form-item label="Sản phẩm quan tâm" class="block flex-1" name="demands">
              <a-checkbox-group
                v-model:value="formState.demands"
                class="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-1 gap-y-2"
              >
                <a-checkbox class="!ml-0" v-for="item in demands" :value="+item.id">{{ item.description }}</a-checkbox>
              </a-checkbox-group>
            </a-form-item>

            <a-form-item label="Lời nhắn" name="message">
              <a-textarea v-model:value="formState.message" placeholder="Để lại lời nhắn" :rows="5"></a-textarea>
            </a-form-item>

            <a-form-item class="text-right">
              <button class="primary w-full" type="submit" :disabled="loading">Gửi thông tin</button>
            </a-form-item>
          </a-form>

          <a-modal :visible="visibleResultModal" :footer="null" :closable="false">
            <h3 class="text-primary text-center">Cám ơn bạn đã quan tâm giải pháp của Miraway.</h3>
            <div class="mt-2 text-center">Chúng tôi sẽ liên hệ bạn thong thời gian sớm nhất!</div>

            <div class="text-center mt-6">
              <button class="primary" @click="visibleResultModal = false">Đóng</button>
            </div>
          </a-modal>
        </div>
      </section>
    </div>
  </div>
</template>
