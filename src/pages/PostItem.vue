<script setup lang="ts">
    import { RouterLink, useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { toRefs } from 'vue';
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    import BackButton from '../components/BackButton.vue';
    import Loader from '../components/Loader.vue';

    const route = useRoute();
    const id = route.params.id;
    const postPageInfo = ref<Post | null>(null);
    const loadingState = ref<boolean>(true);

    onMounted(async () => {
        const fetchedPost = await FetchHelper.getSinglePost(Number(id));
        if(fetchedPost) {
            postPageInfo.value = fetchedPost;
        }
        loadingState.value = false
    });
</script>

<template>
    <main class="wrapper">
        <BackButton />
        <div v-if="postPageInfo">
            <span>ID: </span>
            <span>{{ postPageInfo.id }}</span>
            <h1>{{ postPageInfo.title }}</h1>
            <p>{{ postPageInfo.body }}</p>
        </div>
        <Loader v-else-if="loadingState" />
        <h1 v-else>Not found post</h1>
    </main>
</template>