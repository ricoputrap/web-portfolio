<template>
    <v-toolbar flat color="transparent">
        <v-toolbar-title class="white--text">RICO</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-and-up">
            <v-btn text><router-link to='/' class="white--text text-decoration-none">Home</router-link></v-btn>
            <v-btn text><router-link to='#' class="white--text text-decoration-none">Projects</router-link></v-btn>
            <v-btn text><router-link to='#' class="white--text text-decoration-none">Publications</router-link></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    font-family: var(--nunito-bold);
}
</style>