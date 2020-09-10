<template>
    <v-app-bar
      app
      color="transparent"
      flat
    >
        <v-toolbar flat>
            <v-toolbar-title>RICO</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-and-up">
                <v-btn text><router-link to='/'>Home</router-link></v-btn>
                <v-btn text>Projects</v-btn>
                <v-btn text>Publications</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>