<template>
  <div class="weather">
    <div class="weather__result">
      <img src="../assets/logo.png" alt="logo">
      <p>Local Weather</p>
      <p>Some description</p>
    </div>
    <search />
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  name: 'weather',
  components: {
    Search
  }
}
</script>
