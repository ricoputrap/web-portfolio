<template>
    <v-container fluid class="pt-7" >
        <v-row justify="center" class="mb-6">
            <h2 class="font-weight-regular pa-2">{{title}}</h2>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Section",
    props: {
        title: String
    },
}
</script>

<style scoped>
* {
    font-family: var(--open-sans);
}
h2 {
    font-size: var(--size-sec-title);
    position: relative;
}

h2::after {
    content:'';
    background: #000;
    width: 5rem;
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
p {
    background: blue;
}
</style>