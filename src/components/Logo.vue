<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ width: string }>()
</script>
<template>
  <img src="/img/moon.svg" :width="width" class="img-fluid m-0 p-0" alt="Moon Phase">
</template>