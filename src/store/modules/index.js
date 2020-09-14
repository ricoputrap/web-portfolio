const state = {
    projects: [
        {
            title: "Project Title",
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si amet amit lah yaaa",
            stack: [
                {
                    name: "python",
                    color: "#366F9E",
                }
            ],
            medium: "#",
            github: "#",
        },
        {
            title: "Project Title",
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si amet amit lah yaaa",
            stack: [
                {
                    name: "python",
                    color: "#366F9E",
                }
            ],
            medium: "#",
            github: "#",
        },
        {
            title: "Project Title",
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si amet amit lah yaaa",
            stack: [
                {
                    name: "python",
                    color: "#366F9E",
                }
            ],
            medium: "#",
            github: "#",
        }
    ],
}

const getters = {
    allProjects: (state) => state.projects,
}

const mutations = {
    // setProjects: (state, projects) => (state.projects = projects),
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}