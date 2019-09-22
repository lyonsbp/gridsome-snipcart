<template>
  <div class="products">
    <div v-for="edge in products.edges" class="product--container max-w-sm rounded overflow-hidden shadow-lg" :key="edge.node.id">
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
.products {
  display: flex;
  flex-wrap: wrap;
}
.product--container {
  margin: .5rem;
  padding: .5rem;
}
.product--price {
}
</style>
