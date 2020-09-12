<template>
  <v-main class="pa-0">
      <v-carousel hide-delimiters :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in carousel_items"
          :key="i"
          :src="item.src">
          <v-row align="center" justify="center" class="fill-height">
            <div class="text-center">
              <h1 class="font-weight-black size-title">RICO PUTRA PRADANA</h1>
              <p class="font-weight-thin subtitle">Let's help people with data!</p>
            </div>
          </v-row>
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

<style scoped>
* {
  font-family: var(--open-sans);
}

.size-title {
  font-size: 2.5rem;
}
.subtitle {
  font-size: var(--size-sec-title);
}
</style>