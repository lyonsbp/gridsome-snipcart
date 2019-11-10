<template>
  <v-row dense>
    <v-col
      sm="6"
      md="4"
      lg="3"
      xl="2"
      v-for="edge in products.edges"
      :key="edge.node.id"
    >
      <v-card 
        class="product--container"
        max-width="400px"
      >
        <g-link :to="edge.node.path">
          <v-img :src="edge.node.image" max-height="300"/>
        </g-link>

        <v-card-title class="product--title">
          {{ edge.node.title }}
        </v-card-title>
        <v-card-subtitle>
          <span class="product--price">${{edge.node.price}}</span>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            :to="edge.node.path"
            :data-item-url="edge.node.path"
          >View More</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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

<style></style>
