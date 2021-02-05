<template>
    <div id="app">
        <Header />
        <div class="content">
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "./components/footer/Footer.vue";
import Header from "./components/header/Header.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
}

body {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
    color: rgba(0,0,0,.87);
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex: 0 0 auto;
}

input {
    outline: none;
}
</style>