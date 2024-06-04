<script setup lang="ts">
    import { ref } from 'vue'

    const inputValue = ref<string>('');
    const emit = defineEmits<{
        searchPost: [value: string]
    }>()
</script>

<template>
    <input 
        type="text"
        placeholder="Search by userId..."
        v-model="inputValue"
        @input="$emit('searchPost', inputValue)"
    />
</template>

<style scoped lang="scss">
    input {
        display: block;
        width: 250px;
        margin-bottom: 15px;
        border: 2px solid rgba(#000, 0.5);
        outline: none;
        border-radius: 6px;
        background-color: transparent;
        transition: border-color 0.2s linear;
        &:focus {
            border-color: #000;
        }
    }
</style>