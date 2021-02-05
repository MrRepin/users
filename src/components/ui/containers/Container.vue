<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Container",
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

@media (max-width: 1199px) {
    .container {
        max-width: 900px;
    }
}

@media (max-width: 991px) {
    .container {
        max-width: 700px;
    }
}

@media (max-width: 767px) {
    .container {
        max-width: 540px;
    }
}
</style>