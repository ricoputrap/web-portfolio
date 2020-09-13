<template>
    <v-row justify="center" class="mb-6">
        <h2 class="font-weight-regular pa-2">{{secTitle}}</h2>
    </v-row>
</template>

<script>
export default {
    name: "SectionHeader",
    props: ['secTitle']
}
</script>

<style scoped>
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
</style>