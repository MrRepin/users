<template>
    <div class="preloader">
        <img :src="logo" alt="Users">
    </div>
</template>

<script>
import Logo from "../../../assets/logo.png";

export default {
    name: "Preloader",
    data: () => ({
        logo: Logo
    }),
}
</script>

<style lang="scss" scoped>
@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

.preloader {
    padding: 40px 0;
    text-align: center;

    img {
        animation: pulse 1500ms infinite;
    }
}
</style>