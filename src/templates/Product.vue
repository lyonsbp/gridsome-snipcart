<template>
  <div class="product--container">
    <span class="product--title" v-text="$page.product.title"></span>
    <img :src="$page.product.image" />
  </div>
</template>

<page-query>
query Product($id: String!) {
  product: product(id: $id) {
    title
    image
  }
}
</page-query>

<script>
export default {
  props: {
    title: String,
    img: String
  }
}
</script>

<style>
</style>
