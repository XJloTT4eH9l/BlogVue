<script setup lang="ts">
    import type { PropType } from 'vue'
    import type Post from '../models'

    import PostItem from './PostItem.vue'

    defineProps({ 
        posts: Array as PropType<Post[]>
    });
</script>

<template>
    <ul v-if="posts && posts.length > 0" class="post-list">
        <PostItem
            v-for="item in posts"
            :key="item.id" 
            :item
        />
    </ul>
    <p v-else>No posts</p>
</template>