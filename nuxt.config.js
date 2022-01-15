export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
  },
  ssr: true,
  head: {
    title: 'Sistema Bit-Log',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tabler.min.css',
    '@/assets/css/tabler-flags.min.css',
    '@/assets/css/tabler-payments.min.css',
    '@/assets/css/tabler-vendors.min.css',
    '@/assets/css/demo.min.css',
    '@/assets/css/tooltip.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persistedstate.js', mode: 'client' },
    { src: '~/plugins/web3.js', mode: 'client' },
    { src: '~/plugins/script.js', mode: 'client' },
    { src: '~/plugins/js/tabler.min.js', mode: 'client' },
    { src: '~/plugins/js/demo.min.js', mode: 'client' },
    { src: '~/plugins/graphs/logPage.js', mode: 'client' },
    // { src: '~/plugins/libs/apexcharts/dist/apexcharts.min.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://bitlog5.herokuapp.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: process.env.NODE_ENV !== 'development',
  },
}
