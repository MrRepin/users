<template>
    <div class="user-page">
        <container>
            <template v-if="!preloaderStatus">
                <user-info
                    :id="user.id"
                    :name="user.name"
                    :phone="user.phone"
                    :email="user.email"
                ></user-info>
                <task-list :list="todos"></task-list>
            </template>
            <preloader v-else></preloader>
        </container>
    </div>
</template>

<script>
import Container from "../components/ui/containers/Container";
import UserInfo from "../components/user/UserInfo";
import TaskList from "../components/task/TaskList";
import Preloader from "../components/ui/preloaders/Preloader.vue";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "User",
    computed: {
        ...mapGetters({
            user: "user/userGetter",
            todos: "user/todosGetter",
            preloaderStatus: "user/preloaderStatusGetter",
        }),
    },
    methods: {
        ...mapActions({
            getUser: "user/getUser",
            getTodos: "user/getTodos",
        }),
    },
    mounted() {
        this.getUser(this.$route.params.id);
        this.getTodos(this.$route.params.id);
    },
    components: {
        UserInfo,
        Container,
        TaskList,
        Preloader,
    },
}
</script>

<style lang="scss" scoped>
.user-page {
    padding: 40px 0;
}
</style>