<template>
    <footer class="footer">
        <container>
            <span>&copy; {{year}}</span>
        </container>
    </footer>
</template>

<script>
import Container from "../ui/containers/Container.vue";

export default {
    name: "Footer",
    data: () => ({
        year: new Date().getFullYear(),
    }),
    components: {
        Container,
    },
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    height: 50px;
    background: #35495e;
    text-align: center;
    padding: 15px 0;
    text-align: center;

    span {
        color: #fff;
        font-weight: 500;
        font-size: 18px;
    }
}
</style>