<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    import PostList from '../components/PostList.vue';

    const posts = ref<Post[]>([]);

    onMounted(async () => {
        const fetchedPosts = await FetchHelper.getPosts();
        if(fetchedPosts) {
            posts.value = fetchedPosts;
        }
    });
</script>

<template>
    <main class="wrapper">
        <PostList :posts = posts />
    </main>
</template>

<style>
    .wrapper {
        max-width: 1270px;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>
