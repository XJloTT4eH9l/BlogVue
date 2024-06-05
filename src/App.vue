<script setup lang="ts">
  import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <RouterLink to="/">Blog</RouterLink>
        </li>
        <li class="nav__item">
          <RouterLink to="/create-post">Create-post</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss">
  header {
    padding: 20px 15px;
    color: #fff;
    background-color: rgb(0, 102, 102);
    .nav {
      &__list {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 15px;
      }
    }
  }
</style>

