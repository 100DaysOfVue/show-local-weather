<template>
  <div class="weather">
    <div v-if="!this.temperature">
      <p>Please allow the browser to know your location or perform a search</p>
      <div>
        <p>Loading...</p>
      </div>
    </div>
    <div v-else class="weather__result">
      <div class="weather__data">
        <h1 class="weather__temperature">{{ converTemperature }} <sup class="weather__temperature--unit">°{{ grades }}</sup></h1>
        <p class="weather__description">{{ description }}</p>
        <p class="weather__location"><small>{{ city }}, {{ country }}</small></p>
      </div>
      <div class="weather__icon__container">
        <dynamic-icon class="icon" :weatherIcon="weatherIcon" />
      </div>
    </div>
    <search v-on:search="search" />
  </div>
</template>

<script>
import Search from './Search.vue'
import DynamicIcon from './DynamicIcon.vue'

export default {
  name: 'weather',
  components: {
    Search, DynamicIcon
  },
  props: {
    city: String,
    country: String,
    description: String,
    temperature: Number,
    weatherIcon: String
  },
  data () {
    return {
      grades: 'C'
    }
  },
  methods: {
    search: function (message) {
      this.$emit('search', message)
    },
    imagePath: function (pic) {
      return require(`../assets/${pic}.svg`)
    }
  },
  computed: {
    converTemperature () {
      if (this.grades === 'C') {
        return Math.round(this.temperature - 273)
      } else {
        return Math.round((this.temperature - 273.15) * 9 / 5 + 32)
      }
    }
  }
}
</script>

<style scoped>
.weather__result{
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 150px;
  border: 1px solid black;
  border-radius: 5px;
}
.weather__data{
  width: 100%;
  height: 100%;
}
.weather__temperature{
  font-size: 4.5em;
  margin: .1em auto;
}
.weather__temperature--unit{
  font-size: .6em;
}
p{
  margin: 0 auto;
}
.weather__description{
  font-size: 1.5em;
}
.weather__icon__container{
  width: 100%;
  height: 100%;
}
.icon{
  height: 100%;
  width: 43%;
}
</style>
