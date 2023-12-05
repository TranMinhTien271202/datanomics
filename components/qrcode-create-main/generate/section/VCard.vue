<script setup>
import { VCARD_VERSION, COUNTRY_CODES, SECTIONS } from "~/constants/qrcode-generate";

const props = defineProps({
  formState: { type: Object, require: true },
});

const FIELDS = SECTIONS.vcard.fields;

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div>
    <a-form-item :label="FIELDS.vversion.label" :name="FIELDS.vversion.value">
      <a-select class="w-full" v-model:value="formState[FIELDS.vversion.value]" @change="onSubmit">
        <a-select-option v-for="item in VCARD_VERSION" :value="item.value">{{ item.name }}</a-select-option>
      </a-select>
    </a-form-item>
    <div>
      <a-form-item :label="FIELDS.vnametitle.label" :name="FIELDS.vnametitle.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vnametitle.value]"
          :placeholder="FIELDS.vnametitle.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vname.label" :name="FIELDS.vname.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vname.value]"
          :placeholder="FIELDS.vname.label"
          @change="onSubmit"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vlast.label" :name="FIELDS.vlast.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vlast.value]"
          :placeholder="FIELDS.vlast.label"
          @change="onSubmit"
        />
      </a-form-item>
    </div>
    <div>
      <div>
        <a-form-item :label="FIELDS.countrycodevphone.label" :name="FIELDS.countrycodevphone.value">
          <a-select class="w-full" v-model:value="formState[FIELDS.countrycodevphone.value]" @change="onSubmit">
            <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :name="FIELDS.vphone.value">
          <a-input-number
            type="tel"
            :min="0"
            v-model:value="formState[FIELDS.vphone.value]"
            @change="onSubmit"
            :placeholder="FIELDS.vphone.label"
          />
        </a-form-item>
      </div>
      <div>
        <a-form-item :label="FIELDS.countrycodemobile.label" :name="FIELDS.countrycodemobile.value">
          <a-select class="w-full" v-model:value="formState[FIELDS.countrycodemobile.value]" @change="onSubmit">
            <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :name="FIELDS.vmobile.value">
          <a-input-number
            type="tel"
            :min="0"
            v-model:value="formState[FIELDS.vmobile.value]"
            @change="onSubmit"
            :placeholder="FIELDS.vmobile.label"
          />
        </a-form-item>
      </div>
    </div>
    <div>
      <a-form-item :label="FIELDS.vemail.label" :name="FIELDS.vemail.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vemail.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vemail.label"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vurl.label" :name="FIELDS.vurl.value">
        <a-input
          type="url"
          class="rounded-xl"
          v-model:value="formState[FIELDS.vurl.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vurl.label"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.vcompany.label" :name="FIELDS.vcompany.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vcompany.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vcompany.label"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vtitle.label" :name="FIELDS.vtitle.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vtitle.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vtitle.label"
        />
      </a-form-item>
    </div>
    <div>
      <div>
        <a-form-item :label="FIELDS.countrycodevoffice.label" :name="FIELDS.countrycodevoffice.value">
          <a-select class="w-full" v-model:value="formState[FIELDS.countrycodevoffice.value]" @change="onSubmit">
            <a-select-option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :name="FIELDS.vofficephone.value">
          <a-input-number
            type="tel"
            :min="0"
            v-model:value="formState[FIELDS.vofficephone.value]"
            @change="onSubmit"
            :placeholder="FIELDS.vofficephone.label"
          />
        </a-form-item>
      </div>
      <div>
        <a-form-item :label="FIELDS.countrycodevfax.label" :name="FIELDS.countrycodevfax.value">
          <a-select class="w-full" v-model:value="formState[FIELDS.countrycodevfax.value]" @change="onSubmit">
            <a-select option v-for="item in COUNTRY_CODES" :value="item.code">{{ item.name }}</a-select>
          </a-select>
        </a-form-item>
        <a-form-item :name="FIELDS.vfax.value">
          <a-input
            class="rounded-xl"
            type="number"
            v-model:value="formState[FIELDS.vfax.value]"
            @change="onSubmit"
            :placeholder="FIELDS.vfax.label"
          />
        </a-form-item>
      </div>
    </div>
    <a-form-item :label="FIELDS.vaddress.label" :name="FIELDS.vaddress.value">
      <a-textarea
        class="rounded-xl"
        v-model:value="formState[FIELDS.vaddress.value]"
        :placeholder="FIELDS.vaddress.label"
        :rows="4"
        @change="onSubmit"
      />
    </a-form-item>
    <div>
      <a-form-item :label="FIELDS.vcap.label" :name="FIELDS.vcap.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vcap.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vcap.label"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vcity.label" :name="FIELDS.vcity.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vcity.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vcity.label"
        />
      </a-form-item>
    </div>
    <div>
      <a-form-item :label="FIELDS.vstate.label" :name="FIELDS.vstate.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vstate.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vstate.label"
        />
      </a-form-item>
      <a-form-item :label="FIELDS.vcountry.label" :name="FIELDS.vcountry.value">
        <a-input
          class="rounded-xl"
          v-model:value="formState[FIELDS.vcountry.value]"
          @change="onSubmit"
          :placeholder="FIELDS.vcountry.label"
        />
      </a-form-item>
    </div>
  </div>
</template>
