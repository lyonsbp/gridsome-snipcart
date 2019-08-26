<template>
  <div>
    <Layout>
      <div class="product--container">
        <h1 class="product--title" v-text="$page.product.title"></h1>
        <img :src="$page.product.image" width="400" />
        <span v-html="$page.product.content"></span>
        <button
          class="snipcart-add-item"
          :data-item-id="$page.product.id"
          :data-item-url="$page.product.path"
          :data-item-name="$page.product.title"
          :data-item-image="$page.product.image"
          :data-item-price="$page.product.price"
        >Add to Cart</button>
      </div>
      <ProductCarousel class="mt-4" />
    </Layout>
  </div>
</template>

<page-query>
query Product($id: String!) {
  product: product(id: $id) {
    id
    path
    price
    title
    tags
    image (width: 100)
    content
  }
}
</page-query>

<script>
import ProductCarousel from '@/components/ProductCarousel'
export default {
  components: { ProductCarousel },
  props: {
    title: String,
    img: String
  },
  metaInfo() {
    return {
      title: this.$page.product.title
    }
  }
}
</script>

<style>
</style>
