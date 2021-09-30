<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import * as MoonPhase from '../util/moonphase'

export default defineComponent({
  name: 'Moon',
  setup: () => {
    const phase = ref(MoonPhase.moonPhaseAlt())
    // onMounted(() => { console.log(phase) })
    return { phase }
  }
})
</script>
<template>
    <h1>{{ phase.name }}</h1>
    <p class="lead">
      <img :src="phase.image" class="img-fluid" :alt="phase.name">
    </p>
</template>