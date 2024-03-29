import path from 'path'

const title = 'Yasmin Green | Developer'
const description = 'Yasmin Green - Software Engineer working with Javascript, HTML, CSS, NodeJS, NuxtJS, VueJS, ReactJS, NextJS, TailwindCSS and more, building a variety of websites.'

export default {
  target: 'static',
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:locale', content: 'en_GB' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: '/android-chrome-512x512.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '400' },
      { property: 'og:url', content: title },
      { property: 'og:site_name', content: title },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:title', content: title },
      { name: 'twitter:image', content: '/android-chrome-512x512.png' },
      { hid: 'description', name: 'description', content: description },
      { name: 'msapplication-TileColor', content: '#d9dade' },
      { name: 'theme-color', content: '#7A60FF' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.yasmingreen.com' },
      { rel: 'icon', href: '/favicon.svg?v=1' },
      { rel: 'alternate icon', href: '/favicon.ico' },
      { rel: 'alternate icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'alternate icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#7A60FF' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@300;500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&display=swap' }
    ]
  },
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/vue-scrollto.js', '~/plugins/scroll.js'],
  components: true,
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/pwa'],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
    optimizeCSS: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },
    loaders: {
      css: { sourceMap: process.env.NODE_ENV === 'production' }
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      },
      preset: {
        stage: 1
      }
    }
  }
}
