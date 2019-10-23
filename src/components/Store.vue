<template>
  <div class="products">
    <v-card 
      v-for="edge in products.edges"
      class="product--container" 
      :key="edge.node.id"
    >
      <g-link :to="edge.node.path">
        <img :src="edge.node.image" width="200" />
      </g-link>

      <v-card-title class="product--title">
        {{ edge.node.title }}
      </v-card-title>
      <v-card-subtitle>
        <span class="product--price">${{edge.node.price}}</span>
      </v-card-subtitle>

      <v-card-action>
        <v-btn
          class="snipcart-add-item"
          :data-item-id="edge.node.id"
          :data-item-url="edge.node.path"
          :data-item-name="edge.node.title"
          :data-item-image="edge.node.image"
          :data-item-price="edge.node.price"
        >Add to Cart</v-btn>
      </v-card-action>
    </v-card>
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
