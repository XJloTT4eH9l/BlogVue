<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    import BackButton from '../components/BackButton.vue';
    import EditPostModal from '../components/EditPostModal.vue'
    import Loader from '../components/Loader.vue';

    const router = useRouter();
    const route = useRoute();
    const id = route.params.id;
    const postPageInfo = ref<Post | null>(null);
    const loadingState = ref<boolean>(true);
    const isModalOpen = ref<boolean>(false);

    const deletePost = async () => {
        loadingState.value = true;

        const res = await FetchHelper.deletePost(Number(id));

        if(res) {
            alert(`The post, which has id: ${id}, was deleted`);
        } else {
            alert(`Something went wrong, please try later`);
        }

        loadingState.value = false;
        router.go(-1);
    }

    const modalHandler = () => isModalOpen.value = !isModalOpen.value;

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
        <EditPostModal 
            v-if="postPageInfo"
            :item = postPageInfo
            :isModalOpen
            @modalHandler = modalHandler
        />
        <div v-if="postPageInfo">
            <span>UserId: </span>
            <span>{{ postPageInfo.userId }}</span>
            <h1>{{ postPageInfo.title }}</h1>
            <p>{{ postPageInfo.body }}</p>
            <button @click="modalHandler" class="edit">Edit post</button>
            <button @click="deletePost">Delete post</button>
        </div>
        <Loader v-else-if="loadingState" />
        <h1 v-else>Not found post</h1>
    </main>
</template>

<style lang="scss">
    button {
        margin-top: 10px;
        padding: 8px 12px;
        color: #fff;
        background-color: rgba(red, 0.7);
        outline: none;
        border-radius: 6px;
        border: none;
        transition: background-color 0.2s linear;
        cursor: pointer;
        &.edit {
            background-color: rgba(blue, 0.7);
            margin-right: 8px;
            &:hover {
                background-color: blue;
            }
        }
        &:hover {
            background-color: red;
        }
    }
</style>