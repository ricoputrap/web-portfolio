<template>
    <v-toolbar flat color="transparent">
        <v-toolbar-title class="white--text font-weight-bold size-title">RICO</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-and-up">
            <v-btn text><router-link to='/' class="white--text text-decoration-none font-weight-bold">Home</router-link></v-btn>
            <v-btn text><router-link to='#' class="white--text text-decoration-none font-weight-bold">Projects</router-link></v-btn>
            <v-btn text><router-link to='#' class="white--text text-decoration-none font-weight-bold">Publications</router-link></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    font-family: var(--nunito);
}
.size-title {
    font-size: 1.5rem;
}
</style>