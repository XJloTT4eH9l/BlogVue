<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();
</script>

<template>
    <button class="back-button" @click="router.go(-1)">Back</button>
</template>

<style scoped lang="scss">
    .back-button {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        column-gap: 8px;
        padding: 5px 10px;
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 8px;
        color: #000;
        cursor: pointer;
        &::before {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 10px solid black;
        }
    }
</style>