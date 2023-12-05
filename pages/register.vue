<script setup>
const seoTitle = "QRX - Đăng ký dùng thử";
const seoDescription = "QRX - Đăng ký dùng thử";

useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { name: "og:title", content: seoTitle },
    { name: "og:description", content: seoDescription },
    { name: "keywords", content: "QRX - Đăng ký dùng thử" },
  ],
});

const config = useRuntimeConfig();

const formState = reactive({
  firstname: "",
  lastname: "",
  phonenumber: "",
  email: "",
  title: "",
  message: "",
  demands: [],
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
const crmBaseUrl = config.public.baseUrl.crm;

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
  <div class="lg:max-w-[60%] m-auto max-md:mt-[80px]">
    <section id="contact-us" class="bg-white p-10 rounded-[48px] shadow-lg shadow-[#c6c6c6] max-lg:shadow-none">
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
            <button class="primary w-full" type="submit" :disabled="loading">Đăng ký</button>
          </a-form-item>
          <div class="text-center">
            <nuxt-link :to="`${crmBaseUrl}/authentication/loginRedirect`" class="text-[#ed7f22]"
              >Bạn đã có tài khoản rồi? Đăng nhập</nuxt-link
            >
          </div>
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
</template>
