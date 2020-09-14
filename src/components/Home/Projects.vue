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
                        <!-- 
                            Problems:
                            - project title harusnya di bawah
                            - project title harusnya bold
                         -->
                        <v-img
                            src="../../assets/images/img-project.png">
                            <v-card-title class="white--text">{{project.title}}</v-card-title>
                        </v-img>
                        <v-card-subtitle class="pb-0 mb-1">{{project.posted}}</v-card-subtitle>
                        <v-card-text class="text--primary">
                            <p class="mb-2">{{project.desc}}</p>
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
                        <!-- 
                            problems:
                            - bold details
                            - kotak simetris img btn
                         -->
                        <v-card-actions class="pb-3 px-4">
                            <v-btn
                                color="orange"
                                text>
                                Details
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn>
                                <v-img 
                                    max-height="40"
                                    max-width="40"
                                    src="../../assets/images/btn-github.png"></v-img>
                            </v-btn>
                            <v-btn>
                                <v-img 
                                    max-height="40"
                                    max-width="40"
                                    src="../../assets/images/btn-medium.png"></v-img>
                            </v-btn>
                        </v-card-actions>
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