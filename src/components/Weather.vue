<template>
  <div class="weather">
    <div class="weather__result">
      <img src="../assets/logo.png" alt="logo">
      <p>Local Weather</p>
      <p>Some description</p>
    </div>
    <div class="weather__search">
      <input type="text" placeholder="Washintong, Dc" class="weather__search__field">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'weather'
  }
</script>
