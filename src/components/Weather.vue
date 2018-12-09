<template>
  <div class="weather">
    <div v-if="!this.tempeture">
      <p>Please allow the browser to know your location or perform a search</p>
      <div>
        <p>Loading...</p>
      </div>
    </div>
    <div v-else class="weather__result">
      <!-- <h2>weather in {{ city }}, {{ country }}</h2> -->
      <img :src="weatherIcon" alt="logo">
      <h2>{{ converTempeture }} <span>°{{ grades }}</span></h2>
      <p>{{ description }}</p>
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
  },
  props: {
    city: String,
    country: String,
    description: String,
    tempeture: Number,
    weatherIcon: String
  },
  data () {
    return {
      grades: 'C'
    }
  },
  computed: {
    converTempeture () {
      if (this.grades === 'C') {
        return Math.round(this.tempeture - 273)
      } else {
        return Math.round((this.tempeture - 273.15) * 9 / 5 + 32)
      }
    }
  }
}
</script>
