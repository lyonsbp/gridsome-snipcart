<template>
  <Layout>
    <v-card class="product--container" max-width="700px">
      <v-img :src="$page.product.image" max-width="600px" />
      <v-card-title v-text="$page.product.title"></v-card-title>
      <v-card-subtitle>${{ $page.product.price }}</v-card-subtitle>
      <v-card-text class="black--text" v-html="$page.product.content"></v-card-text>

      <v-card-actions>
        <v-btn
          class="snipcart-add-item"
          :data-item-id="$page.product.id"
          :data-item-url="$page.product.path"
          :data-item-name="$page.product.title"
          :data-item-image="$page.product.image"
          :data-item-price="$page.product.price"
          :data-item-weight="$page.product.weight"
        >Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
    <ProductCarousel class="mt-4" />
  </Layout>
</template>

<page-query>
query Product($id: ID!) {
  product: product(id: $id) {
    id
    path
    price
    title
    tags
    image (width: 100)
    content
    weight
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
.product--container {
  padding: 0.5rem;
}
</style>
