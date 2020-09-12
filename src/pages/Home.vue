<template>
  <v-main class="pa-0">
    <Carousels />
    <Section />
  </v-main>
</template>

<script>
import Carousels from '../components/Carousels'
import Section from '../components/Section'

export default {
    name: "Home",
    components: {
      Carousels,
      Section,
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