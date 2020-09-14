<template>
    <v-container id="project" fluid class="pt-7" >
        <SectionHeader sec-title="Projects" />
        <v-container>
            <v-row>
                <v-col
                    v-for="project in allProjects"
                    :key="project"
                    class="d-flex child-flex"
                    cols="4">
                    <v-card tile>
                        <v-img
                            src="../../assets/images/img-project.png">
                            <v-card-title class="white--text">{{project.title}}</v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0 mb-1">{{project.posted}}</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <p class="mb-1">{{project.desc}}</p>
                            <div class="d-flex flex-row">
                                <v-chip
                                    v-for="stack in project.stacks"
                                    :key="stack"
                                    small
                                    text-color="#fff"
                                    :color="stack.color"
                                    class="mr-1">
                                        {{stack.name}}
                                    </v-chip>
                            </div>
                        </v-card-text>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import SectionHeader from '../SectionHeader'
import { mapGetters } from 'vuex'

export default {
    name: 'Projects',
    components: {
        SectionHeader
    },
    computed: mapGetters(['allProjects']),
}
</script>

<style scoped>
#project {
    background-color: #F2F2F5;
}
</style>