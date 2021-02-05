<template>
    <div class="user-card">
        <router-link :to="`/user/${id}`" class="user-card__link">
            <span class="id">{{id}}</span>
            <span class="name">{{name}}</span>
            <span class="email">{{email}}</span>
            <span class="show-more">Show more &#8250;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "UserCard",
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
.user-card {
    background: #fff;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    transition: all 200ms ease-out;

    &:hover {
        transform: scale(1.05);

        span {

            &.show-more {
                color: #41b883;
            }
        }
    }

    &__link {
        padding: 20px;
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        text-decoration: none;
    }

    span {
        display: block;
        margin-top: 15px;
        color: #35495e;
        font-size: 16px;
        font-weight: 500;

        &.id {
            font-size: 30px;
            font-weight: 700;
            color: #41b883;
            margin-top: 0;
        }
        
        &.show-more {
            margin-top: 30px;
            transition: all 200ms ease-out;
        }
    }
}
</style>