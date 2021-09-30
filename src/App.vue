<script setup lang="ts">
import Logo from './components/Logo.vue'
import Moon from './components/Moon.vue'
import Clouds from './components/Clouds.vue'
</script>
<template>  
  <Clouds />  
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0"><Logo width="35" /> Moon Phase</h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link active" href="#">Início</a>
        </nav>
      </div>
    </header>
    <main class="px-3">
        <Moon />
    </main>
    <footer class="mt-auto text-white-50">
      <p><a href="https://github.com/sistematico/moon-phase" class="text-white">Moon Phase</a>, um projeto criado com ❤️ por <a href="https://twitter.com/sistematico" class="text-white">@sistematico</a>.</p>
    </footer>
  </div>
</template>