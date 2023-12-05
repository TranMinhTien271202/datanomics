import { createGtm } from "@gtm-support/vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const gtmId = config.public.gtmId;

  if (!gtmId) return;

  nuxtApp.vueApp.use(
    createGtm({
      id: gtmId,
      defer: true,
      compatibility: false,
      enabled: true,
      debug: false,
      loadScript: true,
      vueRouter: useRouter(),
      trackOnNextTick: false,
    }),
  );
});
