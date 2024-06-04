<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    import PostList from '../components/PostList.vue';
    import Loader from '../components/Loader.vue';

    const posts = ref<Post[] | null>(null);
    const loadingState = ref<boolean>(true);

    onMounted(async () => {
        const fetchedPosts = await FetchHelper.getPosts();
        if(fetchedPosts) {
            posts.value = fetchedPosts;
        }
        loadingState.value = false;
    });
</script>

<template>
    <main class="wrapper">
        <h1>Posts</h1>
        <PostList v-if="posts" :posts = posts />
        <Loader v-else-if="loadingState" />
        <h2 v-else >Cannot fetch posts</h2>
    </main>
</template>

<style>
    .wrapper {
        max-width: 1270px;
        padding: 0 15px;
        margin: 0 auto;
    }
</style>
