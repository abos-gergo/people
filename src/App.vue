<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <Header title="People (routing app)"
    background-image="https://static.vecteezy.com/system/resources/previews/027/875/966/non_2x/large-mixed-group-of-multicultural-people-international-students-or-friends-diversity-concept-ai-generative-photo.jpg"
    id="header">
  </Header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>
  #header {
    margin-bottom: 20px;
  }
</style>
