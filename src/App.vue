<template>
  <v-app>
    <v-app-bar
      app
      color="#4B78ED"
      hide-on-scroll>
      <Navbar />
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
:root {
  --nunito: 'Nunito', sans-serif;
  --open-sans: 'Open Sans', sans-serif;
  --size-sec-title: 1.2rem;
}
</style>
