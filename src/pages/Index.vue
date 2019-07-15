<template>
  <Layout>
    <Store :products="$page.products"></Store>
  </Layout>
</template>

<page-query>
query Products {
  products: allProduct {
    edges {
      node {
        id
        title
        path
        price
        image (width: 100)
        content
      }
    }
  }
}
</page-query>

<script>
import Store from '@/components/Store'
export default {
  components: {
    Store
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
