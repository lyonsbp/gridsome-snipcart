<template>
  <div class="products">
    <product
      class="product"
      v-for="product in products"
      :key="product.title"
      :title="product.title"
      :img="product.img"
    />
  </div>
</template>

<script>
import Product from '@/components/Product'
export default {
  components: {
    Product
  },
  data: () => ({
    products: [
      {
        title: 'Test Title',
        img: 'https://via.placeholder.com/150'
      },
      {
        title: 'Test Title',
        img: 'https://via.placeholder.com/150'
      },
      {
        title: 'Test Title',
        img: 'https://via.placeholder.com/150'
      }
    ]
  })
}
</script>

<style>
.products {
  display: flex;
}
.product {
  margin-left: 1em;
  margin-right: 1em;
}
</style>
