<template>
  <Layout>
    <div class="product--container">
      <h2 class="product--title" v-text="$page.product.title"></h2>
      <img :src="$page.product.image" width="250px" />
      <span v-html="$page.product.content"></span>
    </div>
  </Layout>
</template>

<page-query>
query Product($id: String!) {
  product: product(id: $id) {
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
