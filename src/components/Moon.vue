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
    <p class="lead">
      <img :src="phase.image" class="w-50 img-fluid" :alt="phase.name">
    </p>
    <h2>{{ phase.name }}</h2>
</template>