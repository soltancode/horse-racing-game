<script setup>
import HeaderComponent from './components/partials/HeaderComponent.vue'
import { RouterView } from 'vue-router'
import FooterComponent from './components/partials/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped>
</style>
