<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <the-navbar />
  <div class="mt-10 w-1/2 mx-auto">
    <router-view />
  </div>
</template>

<style scoped>
</style>
