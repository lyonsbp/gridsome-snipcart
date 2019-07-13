<template>
  <div class="products">
    <div v-for="edge in $page.products.edges" :key="edge.node.id" class="product--container">
      <h2 class="product--title" v-text="edge.node.title"></h2>
      <g-link :to="edge.node.path">
        <img :src="edge.node.image" />
      </g-link>
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
        path
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
.product--title {
}
</style>
