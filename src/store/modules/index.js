const state = {
    projects: [
        {
            title: "Project Title",
            // img: ""
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si amet amit lah yaaa Deskripsi lorem ipsum dolo",
            stacks: [
                {
                    name: "python",
                    color: "#366F9E",
                },
                {
                    name: "pandas",
                    color: "#FFCA00",
                },
                {
                    name: "sql",
                    color: "#5D87A1",
                },
            ],
            medium: "#",
            github: "#",
        },
        {
            title: "Project Title",
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si amet amit lah yaaa Deskripsi lorem iah yaaa",
            stacks: [
                {
                    name: "python",
                    color: "#366F9E",
                },
                {
                    name: "pandas",
                    color: "#FFCA00",
                },
                {
                    name: "sql",
                    color: "#5D87A1",
                },
            ],
            medium: "#",
            github: "#",
        },
        {
            title: "Project Title",
            posted: "August 2020",
            desc: "Deskripsi lorem ipsum dolor si ametipsi lorem ipsum dolor si amet amit lah yaaa",
            stacks: [
                {
                    name: "python",
                    color: "#366F9E",
                },
                {
                    name: "pandas",
                    color: "#FFCA00",
                },
                {
                    name: "sql",
                    color: "#5D87A1",
                },
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