<script setup>
const config = useRuntimeConfig();

const formState = reactive({
  yourname: "",
  phonenumber: "",
  email: "",
  subject: "",
  message: "",
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
  yourname: { required: true, message: "Your name required" },
  subject: { required: true, message: "Subject required" },
  phonenumber: [{ required: true, message: "Phone required" }, { validator: validatorPhonenumber }],
  email: [
    { required: true, message: "Email required" },
    { type: "email", message: "Email format is wrong" },
    { validator: validatorEmail },
  ],
  message: { required: true, message: "Message required" },
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
        <h3 class="font-[700]">Contact us</h3>
        <div class="pt-5 flex">
          <div class="font-[400]">We can answer any of your questions, provide product demos and find the perfect
            package for you.</div>
        </div>
        <div class="pt-5 flex items-center">
          <h3 class="text-primary"><img src="/images/icons/location.svg" alt=""></h3>
          <div class="font-[400] pl-2">Hanoi office: No 41, Phu Kieu 1, Kieu Mai, Bac Tu Liem, Ha Noi</div>
        </div>
        <div class="pt-5 flex items-center">
          <h3 class="text-primary"><img src="/images/icons/location.svg" alt=""></h3>
          <div class="font-[400] pl-2">HCM offcice: No 10, Pham Van Hai, Tan Binh, HCM</div>
        </div>
        <div class="pt-5 flex items-center">
          <h3 class="text-primary"><img src="/images/icons/email.svg" alt=""></h3>
          <div class="font-[400] pl-2"><a href="mailto:contact@datanomics.com.vn">Email: contact@datanomics.com.vn</a>
          </div>
        </div>
        <div class="pt-5 flex items-center">
          <h3 class="text-primary"><img src="/images/icons/tel.svg" alt=""></h3>
          <div class="font-[400] pl-2"><a href="tel:(+84)2432007319">Tel: (+84)2432007319</a></div>
        </div>
        <div class="pt-5 flex items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7338866099644!2d105.74872507471474!3d21.04333128727904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ec6751e303%3A0xfe0d54a385a89372!2zNDEgUC4gUGjDuiBLaeG7gXUsIFBow7pjIERp4buFbiwgQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1701829928015!5m2!1svi!2s"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="basis-1/2">
      <section id="contact-us" class="bg-white p-10 rounded-[48px] shadow-lg shadow-[#c6c6c6]">
        <div class="max-xl:text-center">
          <h3 class="font-semibold">Send Your Message To Us</h3>

          <a-form ref="formRef" class="w-full mt-5 max-xl:text-left" layout="vertical" :model="formState" :rules="rules"
            @finish="onSubmit">
            <a-form-item label="Your Name" name="yourname">
              <a-input v-model:value="formState.yourname" placeholder="Your Name" />
            </a-form-item>

            <a-form-item label="Your Email" class="flex-1" name="email">
              <a-input v-model:value="formState.email" placeholder="Your Email" />
            </a-form-item>

            <a-form-item label="Your Number" class="flex-1" name="phonenumber">
              <a-input v-model:value="formState.phonenumber" placeholder="Your Number" />
            </a-form-item>

            <a-form-item label="Subject" class="flex-1" name="subject">
              <a-input v-model:value="formState.subject" placeholder="Subject" />
            </a-form-item>

            <a-form-item label="Your Message" name="message">
              <a-textarea v-model:value="formState.message" placeholder="Your Message" :rows="5"></a-textarea>
            </a-form-item>

            <a-form-item class="text-right">
              <button class="primary w-full" type="submit" :disabled="loading">Send Message</button>
            </a-form-item>
          </a-form>

          <a-modal :visible="visibleResultModal" :footer="null" :closable="false">
            <h3 class="text-primary text-center">Thank you for your interest in Datamonics.</h3>
            <div class="mt-2 text-center">We will contact you as soon as possible!</div>

            <div class="text-center mt-6">
              <button class="primary" @click="visibleResultModal = false">Close</button>
            </div>
          </a-modal>
        </div>
      </section>
    </div>
  </div>
</template>

