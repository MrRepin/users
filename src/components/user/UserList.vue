<template>
    <div class="user-list">
        <user-card
            v-for="user of userList"
            :key="user.id"
            :id="user.id"
            :name="user.name"
            :email="user.email"
        ></user-card>
    </div>
</template>

<script>
import UserCard from "./UserCard";

export default {
    name: "UserList",
    props: {
        userList: {
            type: Array,
            required: true,
        },
    },
    components: {
        UserCard,
    },
}
</script>

<style lang="scss" scoped>
.user-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 -15px;

    .user-card {
        margin: 15px;
    }
}

@media (max-width: 991px) {
    .user-list {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 767px) {
    .user-list {
        grid-template-columns: 1fr;
    }
}
</style>