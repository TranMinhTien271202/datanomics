import {
  Carousel, Form, Input, InputNumber, Button, DatePicker, Drawer, Slider, Tooltip, Spin, Select, Collapse, Checkbox,
  Modal, Radio, Upload
} from "ant-design-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Carousel);
  nuxtApp.vueApp.use(Button);
  nuxtApp.vueApp.use(Form);
  nuxtApp.vueApp.use(Input);
  nuxtApp.vueApp.use(InputNumber);
  nuxtApp.vueApp.use(DatePicker);
  nuxtApp.vueApp.use(Drawer);
  nuxtApp.vueApp.use(Slider);
  nuxtApp.vueApp.use(Tooltip);
  nuxtApp.vueApp.use(Spin);
  nuxtApp.vueApp.use(Select);
  nuxtApp.vueApp.use(Collapse);
  nuxtApp.vueApp.use(Checkbox);
  nuxtApp.vueApp.use(Modal);
  nuxtApp.vueApp.use(Radio);
  nuxtApp.vueApp.use(Upload);
});
