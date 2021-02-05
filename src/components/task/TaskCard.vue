<template>
    <div class="task-card" :class="{important: important}">
        <div class="task-card__left">
            <span class="id">{{id}}</span>
            <span class="title">{{title}}</span>
        </div>
        <div class="task-card__right">
            <span class="status" :class="{completed: completed, pending: !completed}">{{statusText}}</span>
            <button v-show="!important" @click="addToLocalStorage" class="important">Important</button>
            <button v-show="important" @click="removeFromLocalStorage" class="important normal">Normal</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "TaskCard",
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
            required: true,
        },
        important:{
            type: Boolean,
            default: false,
        },
        card: {
            type: Object,
            required: true,
        },
    },
    computed: {
        statusText() {
            if (this.completed) {
                
                return "Ready";
            }

            return "In progress";
        },
    },
    methods: {
        ...mapMutations({
            updateLocalstorageTodos: "user/updateLocalstorageTodos",
        }),

        addToLocalStorage() {
            let todos = localStorage.getItem("todos");

            if (todos) {
                todos = JSON.parse(todos);
            } else {
                todos = [];
            }

            todos.push(this.card);

            localStorage.setItem("todos", JSON.stringify(todos));
            this.updateLocalstorageTodos();
        },

        removeFromLocalStorage() {
            let todos = JSON.parse(localStorage.getItem("todos"));
            const index = todos.findIndex(item => item.id === this.id);

            todos.splice(index, 1);

            localStorage.setItem("todos", JSON.stringify(todos));
            this.updateLocalstorageTodos();
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

.task-card {
    @include flex(space-between, center);
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.12);

    &.important {
        border-color: #ff5252;
    }

    &__left {
        @include flex(space-between, center);
        width: calc(100% - 350px);
    }

    &__right {
        @include flex(space-between, center);
        width: 300px;
    }

    span {
        display: block;
        font-size: 16px;
        font-weight: 500;

        &.title {
            width: calc(100% - 30px);
        }

        &.status {

            &.completed {
                color: #41b883;
            }

            &.pending {
                color: #fc9700;
            }
        }
    }

    .important {
        background: #ff5252;
        border: none;
        border-radius: 4px;
        padding: 8px 20px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        cursor: pointer;
        transition: all 200ms ease-out;
        margin-left: auto;

        &:hover {
            box-shadow: 0 3px 1px -2px #ff5252;
        }

        &.normal {
            background: #ff5722;

            &:hover {
                box-shadow: 0 3px 1px -2px #ff5722;
            }
        }
    }
}

@media (max-width: 991px) {
    .task-card {

        &__left {
            width: calc(100% - 300px);
        }

        &__right {
            width: 250px;
        }
    }
}

@media (max-width: 991px) {
    .task-card {

        &__left,
        &__right {
            width: 100%;
        }

        &__left {
            align-items: baseline;
        }

        &__right {
            margin-top: 20px;
        }
    }
}
</style>