<script setup lang="ts">
    import { ref } from 'vue'
    import FetchHelper from '@/FetchHelper';
    import type { PropType } from 'vue'
    import type { Post } from '../models'

    const { item, isModalOpen } = defineProps({
        item: Object as PropType<Post>,
        isModalOpen: Boolean,
        postUpdatedState: String
    });

    const updatedTitle = ref<string>(item ? item.title : '');
    const updatedText = ref<string>(item ? item.body : '');
    const formValid = ref<boolean>(true);

    const emit = defineEmits<{
        (e: 'modalHandler'): void,
        (e: 'handleUpdatedState', updatedState:  string): void
    }>()

    const updatePost = async () => {
        if(!updatedTitle.value.length || !updatedText.value.length || !item) {
            formValid.value = false
            return
        }

        const updatedPost = { title: updatedTitle.value, body: updatedText.value };
       
        const responce = await FetchHelper.updatePost(item.id, updatedPost);

        if(responce) {
            emit('handleUpdatedState', `The post, which has ${responce.id}, was updated`);
            updatedTitle.value = responce.title;
            updatedText.value = responce.body;
        } else {
            emit('handleUpdatedState', 'Something went wrong, try later');
            updatedTitle.value = responce.title;
            updatedText.value = responce.body;
        }
        
        formValid.value = true;
    }
</script>

<template>
    <div @click.self="$emit('modalHandler')" class="overlay" :class="isModalOpen ? 'overlay_active' : ''">
        <div class="modal-edit">
            <h2 v-if="postUpdatedState && postUpdatedState.length > 0">{{ postUpdatedState }}</h2>
            <form v-else @submit.prevent="updatePost" class="modal-edit__form">
                <input
                    v-model="updatedTitle"
                    type="text" 
                    placeholder="Edit post title"
                />
                <input 
                    v-model="updatedText"
                    type="text" 
                    placeholder="Edit post text"
                />
                <span v-if="!formValid" class="error-message">Inputs cannot be empty</span>
                <button class="submit" type="submit">Save post</button>
            </form>
            <button @click="$emit('modalHandler')" class="modal-edit__close">X</button>
        </div>
    </div>
</template>

<style lang="scss">
    .overlay {
        display: none;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(#000, 0.6);
        &_active {
            display: block;
        }
    }
    .modal-edit {
        position: relative;
        width: 400px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 16px;
        &__close {
            margin-top: 0;
            position: absolute;
            right: 15px;
            top: 15px;
            padding: 0;
            width: 30px;
        }
        .submit {
            color: #000;
            background-color: transparent;
            border: 1px solid #000;
            &:hover {
                background-color: rgba(#000, 0.5);
            }
        }
        .error-message {
            display: block;
            color: red;
        }
    }
</style>