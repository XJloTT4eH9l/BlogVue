<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import type { PropType } from 'vue'
    import type { Post } from '../models'

    defineProps({ 
        item: Object as PropType<Post>
    });
</script>

<template>
    <li v-if="item" class="post-item">
        <RouterLink :to="{ name: 'PostItemPage', params: { id: item.id } }">
            <h2 class="post-item__title">{{ item.title }}</h2>
            <p class="post-item__text">{{ item.body }}</p>
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped>
    .post-item {
        & a {
            display: block;
            padding: 30px;
            border: 1px solid #000;
            border-radius: 16px;
            &:hover {
                .post-item__title {
                    text-decoration: underline;
                }
            }
        }
        &:not(:last-child) {
            margin-bottom: 10px;
        }
        &__title {
            font-size: 28px;
            line-height: 32px;
            margin-bottom: 10px;
        }
        &__text {
            font-size: 16px;
            line-height: 18px;
            color: rgb(64, 61, 61);
        }
    }
</style>