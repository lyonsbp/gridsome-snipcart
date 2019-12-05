// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'
import 'vuetify/dist/vuetify.min.css'
import '~/assets/snipcart-styles.css'
// import '~/assets/tailwind-setup.css'

export default function (Vue, { router, head, isClient }) {
  // Vuetify Setup
  Vue.use(Vuetify)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    defer: true
  })

  head.script.push({
    src: 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js',
    body: true,
    defer: true
  })

  head.script.push({
    src: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
    type: 'text/javascript',
    body: true,
    id: 'snipcart',
    'data-api-key': process.env.GRIDSOME_SNIPCART_API_KEY,
    defer: true
  })

  head.link.push({
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
    defer: true
  })
}
