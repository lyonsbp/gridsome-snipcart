<template>
  <Layout>
    <div class="products">
      <div v-for="edge in $page.products.edges" class="product--container" :key="edge.node.id">
        <h2 class="product--title" v-text="edge.node.title"></h2>
        <g-link :to="edge.node.path">
          <img :src="edge.node.image" height="200px" />
        </g-link>
        <button
          class="snipcart-add-item"
          :data-item-id="edge.node.id"
          :data-item-url="edge.node.path"
          :data-item-name="edge.node.title"
          :data-item-image="edge.node.image"
          data-item-price="10.00"
        >Add to Cart</button>
      </div>
    </div>
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
