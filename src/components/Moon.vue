<template>
  <div class="hello">
    <h1>{{ moonprops.title }}</h1>
    <p>{{ moonprops.phase }}</p>
    <ul>
      <li>Made with <a href="https://vuejs.org" target="_blank" rel="noopener">Vue</a></li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'Moon',
  props: [ 'moonprops' ],
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
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
