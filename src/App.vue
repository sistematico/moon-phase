<script setup lang="ts">
import Logo from './components/Logo.vue'
import Moon from './components/Moon.vue'
import Clouds from './components/Clouds.vue'
const appName = import.meta.env.VITE_APP_NAME
</script>
<template>  
  <Clouds />  
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div class="d-flex justify-content-between align-items-center">
        <h3><Logo width="35" /> {{ appName }}</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link" href="#">Início</a>
          <a class="nav-link" href="#">Sobre</a>
        </nav>
      </div>
    </header>
    <main class="px-3">
      <Moon />
    </main>
    <footer class="mt-auto text-white-50">
      <small>
        <a href="https://github.com/sistematico/moon-phase" class="text-white">{{ appName }}</a>, um projeto criado por <a href="https://lucasbrum.net" class="text-white">Lucas Saliés Brum</a>
      </small>
    </footer>
  </div>
</template>