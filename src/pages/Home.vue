<template>
  <v-main class="pa-0">
    <Carousels />
  </v-main>
</template>

<script>
import Carousels from '../components/Carousels'

export default {
    name: "Home",
    components: {
      Carousels
    },
    data() {
      return {
        carousel_items: [
          {
            src: require("../assets/images/banner-img.png")
          },
        ]
      }
    },
}
</script>

<style>

</style>