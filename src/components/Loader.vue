<template>
    <div class="loader" />
</template>

<style scoped lang="scss">
    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #090909;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>