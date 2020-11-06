<template>
  <div class="hello">
    <h1>{{ moonprops.title }}</h1>
    <h3>{{ moonprops.phase.name }}</h3>
    <ul>
      <li>
        Feito com
        <a href="https://vuejs.org" target="_blank" rel="noopener">VueJS</a> por
        <a
          href="https://github.com/sistematico/moon-phase"
          target="_blank"
          rel="noopener"
          >Lucas S. Brum</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Moon',
  props: {
    moonprops: {
      type: Object,
      default: () => ({
        title: 'Moon Phase',
        phase: {
          name: 'Calculando...',
          img: '',
        },
      }),
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 17px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 8px;
}
a {
  color: #42b983;
}
</style>
