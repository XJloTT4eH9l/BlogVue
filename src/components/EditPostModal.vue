<script setup lang="ts">
    import { ref } from 'vue'
    import type { PropType } from 'vue'
    import type Post from '../models'

    const { item, isModalOpen } = defineProps({
        item: Object as PropType<Post>,
        isModalOpen: Boolean
    });

    const updatedTitle = ref<string>(item ? item.title : '');
    const updatedText = ref<string>(item ? item.body : '');

    const emit = defineEmits<{
        (e: 'modalHandler'): void
    }>()

    const updatePost = async () => {
        if(!updatedTitle.value.length || !updatedText.value.length) {
            alert('Title and text cannot be empty');
            return
        }
        
        emit('modalHandler');
    }
</script>

<template>
    <div @click.self="$emit('modalHandler')" class="overlay" :class="isModalOpen ? 'overlay_active' : ''">
        <div class="modal-edit">
            <form @submit.prevent="updatePost" class="modal-edit__form">
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
    }
</style>