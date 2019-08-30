<template>
  <section>
    <h2>Our other products</h2>
    <carousel :per-page="2" :navigate-to="index">
      <slide
        v-for="{node} in $static.products.edges"
        v-if="$route.path !== node.path"
        :key="node.id"
        @slideclick="$router.push(node.path)"
      >
        <img :src="node.image" width="200" />
        {{node.title}}
      </slide>
    </carousel>
  </section>
</template>

<static-query>
query Products {
  products: allProduct {
    edges {
      node {
        id
        title
        tags
        path
        price
        image (width: 100)
        content
      }
    }
  }
}
</static-query>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      index: 0
    }
  }
}
</script>

<style>
</style>