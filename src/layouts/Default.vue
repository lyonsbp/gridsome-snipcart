<template>
  <v-app>
    <header class="header px-4">
      <strong class="ml-2">
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Store</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
        <g-link class="nav__link" to="/contact">Contact</g-link>
        <g-link href="#" class="nav__link snipcart-checkout">Cart</g-link>
      </nav>
    </header>

    <v-content>
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Vuetify from "vuetify"
export default {
  vuetify: new Vuetify(),
  mounted() {
    document.addEventListener('snipcart.ready', function() {
      Snipcart.subscribe('item.added', item => {
        console.log(item, 'added')
      })
    })
  }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
