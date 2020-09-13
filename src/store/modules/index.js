const state = {
    sections_state: [
        {
            title: 'About Me',
        },
        {
            title: 'Projects',
        },
        {
            title: 'Experiences',
        },
        {
            title: 'Skills',
        },
        {
            title: 'Publications',
        },
        {
            title: 'Contact Me!',
        },
    ],
    // sections: ['About Me', 'Projects', 'Experiences', 'Skills', 'Publications', 'Contact Me!']
}

const getters = {
    sections: (state) => state.sections_state
};

const mutations = {}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}