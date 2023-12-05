const apiQrxData = ref([]);
const token = ref("");
const userid = ref("");

export default function useApiQrx() {
  const config = useRuntimeConfig();

  async function getApi(token, userId) {
    if (!userId) return;

    try {
      const res = await $fetch("api/customers/" + userId, {
        baseURL: config.public.baseUrl.crm,
        headers: { authtoken: `${token}` },
      });
      apiQrxData.value = res;
    } catch (error) {
      console.log(error);
    }
  }

  function saveParamsToSessionStorage(token, userid) {
    const params = {
      hasParams: false,
      token: token,
      userid: userid,
    };
    if (!params.hasParams) {
      params.hasParams = true;
      for (const key of Object.keys(params)) {
        if (params[key]) {
          sessionStorage.setItem(key, params[key]);
        }
      }
    }
  }

  function getParamsFromSessionStorage() {
    const keys = Object.keys(sessionStorage);
    const params = {};
    for (const key of keys) {
      const value = sessionStorage.getItem(key);
      params[key] = value;
    }

    return params;
  }

  return { apiQrxData, userid, token, getApi, saveParamsToSessionStorage, getParamsFromSessionStorage };
}
