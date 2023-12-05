// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ["@/plugins/antd"],
  site: {
    url: "https://qrx.com.vn",
  },
  modules: ["@nuxt/image", "nuxt-simple-sitemap", "@nuxtjs/robots"],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet preload",
          as: "style",
          href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;900&display=swap",
          type: "text/css",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVPSTAyLFyeg_IDWvOJmVES_Hw3BXoYZ7Aj.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HTEJm86Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVPSTAyLFyeg_IDWvOJmVES_Hw5BXoYZ7AjSh8.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVPSTAyLFyeg_IDWvOJmVES_Hw4BXoYZ7AjSh8.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HTEJm81Rb0JcBao.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG81Rb0JcBao.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG87Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HSMIG86Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HToIW81Rb0JcBao.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HToIW87Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HToIW86Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "https://fonts.gstatic.com/s/bevietnampro/v11/QdVMSTAyLFyeg_IDWvOJmVES_HTEJm87Rb0JcBaoUUU.woff2",
          crossorigin: "anonymous",
        },
      ],
      htmlAttrs: {
        lang: "vi",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "p:domain_verify", content: "6a492b476ce81e9c38c7239bdadc555e"},
      ],
    },
  },
  css: ["~/assets/less/antd.less", "~/assets/css/animate.css", "~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
  image: {
    provider: "ipx",
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: {
        qrCreate: process.env.BASE_URL_QR_CREATE || "http://127.0.0.1:8000",
        crm: process.env.BASE_URL_CRM || "http://127.0.0.1:8000",
      },
      gtmId: process.env.GTM_ID,
    },
  },
  experimental: {
    payloadExtraction: false,
  },
  sourcemap: {
    client: true,
  },
  robots: {
    rules: {
      "User-agent": "*",
      Allow: "/",
      Sitemap: ["https://qrx.com.vn/sitemap.xml", "https://qrx.com.vn/blog/sitemap.xml"],
    },
  },
});
