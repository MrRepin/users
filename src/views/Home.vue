<template>
    <div class="home-page">
        <container>
            <user-list v-if="!preloaderStatus" :userList="userList"></user-list>
            <preloader v-else></preloader>
        </container>
    </div>
</template>

<script>
import Container from "../components/ui/containers/Container.vue";
import UserList from "../components/user/UserList.vue";
import Preloader from "../components/ui/preloaders/Preloader.vue";

import { mapActions, mapGetters } from "vuex";

export default {
    name: "Home",
    computed: {
        ...mapGetters({
            userList: "user/userListGetter",
            preloaderStatus: "user/preloaderStatusGetter",
        }),
    },
    methods: {
        ...mapActions({
            getUserList: "user/getUserList",
        }),
    },
    mounted() {
        this.getUserList();
    },
    components: {
        UserList,
        Container,
        Preloader,
    },
}
</script>

<style lang="scss" scoped>
.home-page {
    padding: 40px 0;
}
</style>