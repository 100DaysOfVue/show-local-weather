<template>
  <div class="search">
    <input v-model="message"
      @keyup.enter="submit(message)"
      type="text"
      placeholder="Washintong,us"
      class="search__field"
    />
    <button @click="submit(message)">Search</button>
  </div>
</template>

<script>
import api from '../services/api.js'

export default {
  name: 'search',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    submit: function (message) {
      let city, countryCode
      const messageSeparated = this.separateMessage(message)
      if (messageSeparated.length === 2) {
        city = messageSeparated[0]
        countryCode = messageSeparated[1]
      } else {
        city = messageSeparated[0]
      }
      api.searchWeatherByCityName(city, countryCode)
    },
    separateMessage: function (message) {
      return message.toLowerCase().split(',')
    }
  }
}
</script>
