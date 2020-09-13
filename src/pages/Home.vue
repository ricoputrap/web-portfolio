<template>
  <v-main class="pa-0">
    <Carousels />
    <div
      v-for="aSection in sections"
      :key="aSection">
      <Section :a_section="aSection" />
    </div>
  </v-main>
</template>

<script>
// pass a component as a prop: https://stackoverflow.com/questions/42992579/is-it-possible-to-pass-a-component-as-props-and-use-it-in-a-child-component-in-v

import Carousels from '../components/Carousels'
import Section from '../components/Section'

import { mapGetters } from 'vuex'

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
    computed: mapGetters(['sections']),
}
</script>

<style>

</style>