export default {
  target: 'static',

  router: {
    base: '/mrctech_test/'
  },

  head: {
    title: 'mrctech_test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap'
      }
    ]
  },

  css: [
    '~assets/css/base.css',
    '~assets/css/grid.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  plugins: ['~/plugins/fontawesome.js'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

  modules: [],

  build: {}
}
