<template>
  <v-main class="pa-0">
      <v-carousel hide-delimiters :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in carousel_items"
          :key="i"
          :src="item.src"
        >
        <div align="center" justify="center" class="fill-height"> 
            <h1>RICO PUTRA PRADANA</h1>
            <h3>Let's help people with data!</h3>
        </div>
          <!-- <v-row align="center" justify="center" class="fill-height">
            <h1>RICO PUTRA PRADANA</h1>
          </v-row>
          <v-row class="fill-height">
            <h3>Let's help people with data!</h3>
          </v-row> -->
        </v-carousel-item>
      </v-carousel>
  </v-main>
</template>

<script>
export default {
    name: "Carousels",
    data() {
      return {
        carousel_items: [
          {
            src: require("../assets/images/banner-img.png")
          },
        ]
      }
    }
}
</script>

<style>

</style>