<template>
  <v-main class="pa-0">
    <Carousels />
    <About />
    <Projects />
  </v-main>
</template>

<script>
import Carousels from '../components/Home/Carousels'
import About from '../components/Home/About'
import Projects from '../components/Home/Projects'

export default {
    name: "Home",
    components: {
      Carousels,
      About,
      Projects,
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
* {
    font-family: var(--open-sans);
}
</style>