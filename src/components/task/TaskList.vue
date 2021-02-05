<template>
    <div class="task-list">
        <div class="task-list__title">
            <span>Tasks</span>
        </div>
        <div class="task-list__search">
            <input type="text" placeholder="Search by list" v-model="title">
            <button @click="title = ''" class="refresh">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"/>
                </svg>
            </button>
        </div>
        <div class="task-list__sort">
            <label>
                <span class="description">Sort by completed</span>
                <input type="checkbox" v-model="sort">
                <span class="checkbox"></span>
            </label>
        </div>
        <div class="task-list__content">
            <template v-if="filteredList.length > 0">
                <task-card
                    v-for="card of filteredList"
                    :key="card.id"
                    :id="card.id"
                    :title="card.title"
                    :completed="card.completed"
                    :important="card.important"
                    :card="card"
                ></task-card>
            </template>
            <p v-else class="empty">Tasks list is empty</p>
        </div>
    </div>
</template>

<script>
import TaskCard from "./TaskCard";

export default {
    name: "TaskList",
    data: () => ({
        title: "",
        sort: false,
    }),
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    computed: {
        filteredList() {
            const regexp = new RegExp(this.title, "gi");
            const filteredItems = this.list.filter(item => item.title.match(regexp));

            if (this.sort) {

                return filteredItems.sort(itemA => !itemA.completed)
            } else {
                
                return filteredItems.sort((itemA, itemB) => itemA.id > itemB.id)
            }
                
        },
    },
    components: {
        TaskCard,
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-180deg);
    }
}

.task-list {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-top: 30px;
    padding: 0 15px;

    &__title,
    &__content {
        padding: 16px 0;
    }

    &__title {

        span {
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
        }
    }

    &__search {
        @include flex(space-between, center);

        input {
            width: calc(100% - 70px);
            height: 50px;
            padding: 0 15px;
            font-size: 16px;
            border-radius: 4px;
            border: 2px solid rgba(0, 0, 0, 0.12);
            transition: all 200ms ease-out;

            &:focus {
                border-color: #41b883;
            }
        }

        button {
            background: #41b883;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 4px;
            cursor: pointer;

            &:hover {

                svg {
                    animation: rotate 400ms forwards;
                }
            }
        }
    }

    &__content {

        .empty {
            text-align: center;
            padding: 40px 0;
            font-size: 16px;
            font-weight: 500;
        }
    }

    &__sort {
        @include flex(flex-end, baseline);
        padding: 15px 0 0;

        label {
            display: flex;
            align-items: center;
            cursor: pointer;
        }

        span {

            &.description {
                margin-right: 10px;
                font-size: 16px;
                font-weight: 500;
            }

            &.checkbox {
                width: 20px;
                height: 20px;
                border-radius: 4px;
                border: 2px solid rgba(0, 0, 0, 0.12);
                position: relative;
                transition: all 200ms ease-out;

                &::after {
                    content: '';
                    width: 0;
                    height: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #41b883;
                    border-radius: 4px;
                    transition: all 200ms ease-out;
                }
            }
        }

        input {
            display: none;

            &:checked + span.checkbox {
                border-color: #41b883;
                
                &::after {
                    width: 90%;
                    height: 90%;
                }
            }
        }
    }
}

@media (max-width: 991px) {
    .task-list {

        &__search {

            input {
                width: calc(100% - 55px);
                height: 40px;
            }

            button {
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>