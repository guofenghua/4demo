import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import menu from "./modules/menu"
import role from "./modules/role"


let store = new Vuex.Store({
    state: {
        iscollapse: false,
    },
    getters: {

    },
    mutations: {
        TOGGLE(state) {
            state.iscollapse = !state.iscollapse
        }
    },
    actions: {},
    modules: {
        menu,
        role
    }
})
export default store;