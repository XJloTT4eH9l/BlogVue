<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { toRefs } from 'vue';
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    const route = useRoute();
    const id = route.params.id;
    const postPageInfo = ref<Post | null>(null);

    onMounted(async () => {
        const fetchedPost = await FetchHelper.getSinglePost(Number(id));
        if(fetchedPost) {
            postPageInfo.value = fetchedPost;
        }
    });
</script>

<template>
    <main class="wrapper">
        <RouterLink to="/">Home</RouterLink>
        <div v-if="postPageInfo">
            <span>{{ postPageInfo.id }}</span>
            <h1>{{ postPageInfo.title }}</h1>
            <p>{{ postPageInfo.body }}</p>
        </div>
        <h1 v-else>Not found post</h1>
    </main>
</template>