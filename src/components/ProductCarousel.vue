<template>
  <section>
    <h2>Our other products</h2>
    <ClientOnly>
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
     <!--  <v-carousel>
        <v-carousel-item
          v-for="{node} in $static.products.edges"
          v-if="$route.path !== node.path"
          :key="node.id"
          @click="$router.push(node.path)"
        >  
        </v-carousel-item>
      </v-carousel> -->
    </ClientOnly>
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
export default {
  components: {
    Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
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