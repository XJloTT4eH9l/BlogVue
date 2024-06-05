<script setup lang="ts">
    import { ref } from 'vue';
    import FetchHelper from '../FetchHelper';
    import type Post from '../models';

    import Loader from '@/components/Loader.vue';
    import BackButton from '@/components/BackButton.vue';

    const title = ref<string>('');
    const text = ref<string>('');
    const userId = ref<number>(1);
    const loadingState = ref<boolean>(false);

    const createPost = async () => {
        if(!title.value.length || !text.value.length || !userId) {
            alert('Please fill the inputs corectly!');
            return
        }

        loadingState.value = true;

        const post: Post = {
            title: title.value,
            body: text.value,
            userId: userId.value,
            id: Math.floor(Math.random() * (1000 - 101 + 1)) + 101
        }

        const publishPost = await FetchHelper.createPost(post);

        if(publishPost) {
            alert(`The post: ${JSON.stringify(publishPost.post)} was published`);
            title.value = '';
            text.value = '';
            userId.value = 1;
        } else {
            alert('Something went wrong(');
        }

        loadingState.value = false;
    }
</script>

<template>
    <main class="wrapper">
        <BackButton />
        <h1>Create post</h1>
        <form @submit.prevent="createPost" class="form">
            <div class="form__item">
                <label for="title" class="form__label">Title</label>
                <input 
                    id="title" 
                    type="text" 
                    v-model="title" 
                    placeholder="Type post title" 
                />
            </div>
            <div class="form__item">
                <label for="text" class="form__label">Text</label>
                <input 
                    id="text" 
                    type="text" 
                    v-model="text" 
                    placeholder="Type post text" 
                />
            </div>
            <div class="form__item">
                <label for="userId" class="form__label">UserId</label>
                <input 
                    id="userId" 
                    type="number" 
                    v-model="userId" 
                    placeholder="Type post userId" 
                />
            </div>
            <button type="submit">Create post</button>
        </form>
        <Loader v-if="loadingState" />
    </main>
</template>

<style lang="scss">
    .form {
        margin-bottom: 10px;
        &__item {
            display: flex;
            flex-direction: column;
            row-gap: 10px;
        }
        button {
            padding: 5px 10px;
            background-color: transparent;
            border: 1px solid #000;
            border-radius: 8px;
            color: #000;
            cursor: pointer;
            transition: background-color 0.2s linear;
            &:hover {
                background-color: rgba(#000, 0.2)
            }
        }
    }
</style>