<template>
  <div class="search">
    <input v-model="message"
      @keyup.enter="submit(message)"
      type="text"
      placeholder="Washintong,us"
      class="search__field"
    />
    <button @click="submit(message)" class="btn__search">Search</button>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    submit: function (message) {
      this.$emit('search', message)
    }
  }
}
</script>
