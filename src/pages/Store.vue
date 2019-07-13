<template>
  <div class="products">
    <div v-for="edge in $page.products.edges" :key="edge.node.id" class="product--container">
      <span class="product--title" v-text="edge.node.title"></span>
      <img :src="edge.node.image" />
    </div>
  </div>
</template>

<page-query>
query Products {
  products: allProduct {
    edges {
      node {
        id
        title
        image
        content
      }
    }
  }
}
</page-query>

<script>
import Product from '@/templates/Product'
export default {
  components: {
    Product
  },
  data: () => ({})
}
</script>

<style>
.product {
  margin-left: 1em;
  margin-right: 1em;
}
</style>
