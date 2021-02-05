import axios from "axios";

export default {
    namespaced: true,
    actions: {
        async getUserList({ commit }) {
            try {
                commit("setPreloaderStatus", true);

                const list = await axios.get("https://jsonplaceholder.typicode.com/users");

                commit("setUserList", list.data);
            } catch (e) {
                console.error(e);
            } finally {
                commit("setPreloaderStatus", false);
            }
        },

        async getUser({ commit }, id) {
            try {
                commit("setPreloaderStatus", true);

                const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

                commit("setUser", user.data);
            } catch (e) {
                console.error(e);
            } finally {
                commit("setPreloaderStatus", false);
            }
        },

        async getTodos({ commit }, id) {
            try {
                const todos = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`);

                commit("setTodos", todos.data);
            } catch (e) {
                console.error(e);
            }
        }
    },
    mutations: {
        setUserList: (state, data) => state.userList = data,
        setUser: (state, data) => state.user = data,
        setTodos: (state, data) => state.todos = data,
        updateLocalstorageTodos: state => state.todosLocalStorage = JSON.parse(localStorage.getItem("todos")),
        setPreloaderStatus: (state, status) => state.preloaderStatus = status,
    },
    state: {
        userList: [],
        user: null,
        todos: [],
        todosLocalStorage: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [],
        preloaderStatus: false,
    },
    getters: {
        userListGetter: state => state.userList,
        userGetter: state => state.user,
        todosGetter: state => {
            
            return state.todos.map(mapItem => {
                if (state.todosLocalStorage.findIndex(indexItem => indexItem.id === mapItem.id) !== -1) {
                    mapItem.important = true;
                } else {
                    mapItem.important = false;
                }

                return mapItem;
            })
        },
        preloaderStatusGetter: state => state.preloaderStatus,
    },
}