<template>
  <div class="products">
    <div v-for="edge in products.edges" class="product--container" :key="edge.node.id">
      <g-link :to="edge.node.path">
        <img :src="edge.node.image" width="200" />
      </g-link>
      <h2 class="product--title">
        {{ edge.node.title }} -
        <span class="product--price">${{edge.node.price }}</span>
      </h2>

      <button
        class="snipcart-add-item"
        :data-item-id="edge.node.id"
        :data-item-url="edge.node.path"
        :data-item-name="edge.node.title"
        :data-item-image="edge.node.image"
        :data-item-price="edge.node.price"
      >Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.product--container {
  margin: 1rem 0;
}
.product--price {
}
</style>
