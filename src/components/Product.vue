<template>
  <div class="product--container">
    <span class="product--title" v-text="title"></span>
    <img :src="img">
  </div>
</template>

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
