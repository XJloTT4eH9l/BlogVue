<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import FetchHelper from '../FetchHelper';
    import type { Post } from '../models';

    import PostList from '../components/PostList.vue';
    import SearchPosts from '../components/SearchPosts.vue';
    import Loader from '../components/Loader.vue';

    const posts = ref<Post[] | null>(null);
    const loadingState = ref<boolean>(true);

    const searchPost = async (value: string)  => {
        if(value.length === 0) {
            await getAllPosts();
        } else {
            loadingState.value = true;

            const searchParams = new URLSearchParams({ userId: value })
            const searchedPosts = await FetchHelper.searchPosts(searchParams);

            if(searchedPosts) {
                posts.value = searchedPosts;
            }

            loadingState.value = false; 
        }
    }

    const getAllPosts = async () => {
        loadingState.value = true;
        const fetchedPosts = await FetchHelper.getPosts();
        if(fetchedPosts) {
            posts.value = fetchedPosts;
        }
        loadingState.value = false;
    }

    onMounted(async () => {
        await getAllPosts();
    });
</script>

<template>
    <main class="wrapper">
        <h1>Blog</h1>
        <SearchPosts @searchPost="searchPost" />
        <Loader v-if="loadingState" />
        <div v-else>
            <PostList v-if="posts" :posts = posts />
        </div>
    </main>
</template>

<style>
    .wrapper {
        max-width: 1270px;
        padding: 10px 15px 0 15px;
        margin: 0 auto;
    }
</style>
