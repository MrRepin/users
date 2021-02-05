<template>
    <div class="user-info">
        <div class="user-info__name">
            <span>{{name}}</span>
        </div>
        <ul class="user-info__data">
            <li>ID: {{id}}</li>
            <li>E-mail: {{email}}</li>
            <li>Phone: {{phone}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
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
        phone: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.user-info {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 4px;

    &__name {
        border-bottom: 1px solid rgba(0,0,0,.12);

        span {
            font-weight: 700;
            font-size: 20px;
        }
    }

    &__name,
    &__data {
        padding: 16px;
    }

    ul {
        list-style: none;

        li {
            padding: 8px 0;
            font-size: 16px;
            font-weight: 500;
        }
    }
}
</style>