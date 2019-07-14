<template>
  <Layout>
    <div class="product--container">
      <h2 class="product--title" v-text="$page.product.title"></h2>
      <img :src="$page.product.image" width="250px" />
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
  </Layout>
</template>

<page-query>
query Product($id: String!) {
  product: product(id: $id) {
    id
    path
    price
    title
    image
    content
  }
}
</page-query>

<script>
export default {
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
