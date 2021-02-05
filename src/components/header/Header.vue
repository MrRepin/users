<template>
    <header class="header">
        <container>
            <router-link to="/">
                <img :src="logo" alt="Users">
            </router-link>
        </container>
    </header>
</template>

<script>
import Logo from "../../assets/logo.png";
import Container from "../ui/containers/Container.vue";

export default {
    name: "Header",
    data: () => ({
        logo: Logo,
    }),
    components: {
        Container,
    },
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 50px;
    background: #35495e;
    text-align: center;
    padding: 5px 0;

    img {
        height: 100%;
    }
}
</style>