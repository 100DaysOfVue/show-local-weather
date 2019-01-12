<template>
  <div class="weather">
    <transition name="fade" mode="out-in">

        <div v-if="this.loading" key="loading">
          <p>Please allow the browser to know your location or perform a search</p>
          <div>
            <p>Loading...</p>
          </div>
        </div>

        <div v-else-if="this.errored" key="error">
          <div v-if="errorMessage == 404">
            <h2>Ups!</h2>
            <h3>Looks like you had a typo error.</h3>
            <h3>Please try again.</h3>
          </div>
          <h2 v-else>Sorry an error has happened.</h2>
        </div>

        <div v-else class="weather__result" key="result">
          <div class="weather__data">
            <h1 class="weather__temperature">{{ converTemperature }} <sup class="weather__temperature--unit">°{{ grades }}</sup></h1>
            <p class="weather__description">{{ weatherDescription }}</p>
            <p class="weather__location"><small>{{ city }}, {{ country }}</small></p>
          </div>
          <div class="weather__icon__container">
            <dynamic-icon class="icon" :weatherIcon="weatherIcon" />
          </div>
        </div>

    </transition>
  </div>
</template>

<script>
import DynamicIcon from './DynamicIcon.vue'

export default {
  name: 'weather',
  components: {
    DynamicIcon
  },
  props: {
    loading: Boolean,
    errored: {
      type: Boolean,
      required: true
    },
    errorMessage: String,
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
  computed: {
    converTemperature () {
      if (this.grades === 'C') {
        return Math.round(this.temperature - 273)
      } else {
        return Math.round((this.temperature - 273.15) * 9 / 5 + 32)
      }
    },
    weatherDescription () {
      return this.description.toUpperCase()
    }
  }
}
</script>

<style scoped>
.weather__result{
  width: var(--results-width);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: var(--results-height);
  border: 1px solid var(--footer-color);
  border-radius: 5px;
  box-shadow: -3px 3px 35px 0 var(--footer-color);
  background: linear-gradient(to bottom , hsl(18, 100%, 80%)0%, hsl(18,100%,95%) 100%);
}
.weather__data{
  width: 100%;
  height: 100%;
}
.weather__temperature{
  font-size: var(--temperature-size);
  margin: .1em auto;
  animation: slide .8s ease-in;
}
.weather__temperature--unit{
  font-size: .6em;
  font-weight: 100;
}
p{
  margin: 0 auto;
}
.weather__description{
  font-size: var(--description-size);
  animation: slide-reversed .8s ease-in;
}
.weather__location{
  animation: slide .8s ease-in;
}
@keyframes slide{
  0%{
    transform: translateX(-100px);
  }
  100%{
    transform: translateX(0);
  }
}
@keyframes slide-reversed{
  0%{
    transform: translateX(100px);
  }
  100%{
    transform: translateX(0);
  }
}
.weather__icon__container{
  width: 100%;
  height: 100%;
  animation: slide-reversed .8s ease-out;
}
.icon{
  height: 90%;
  width: 80%;
  margin: 2% auto;
}
.fade-enter-active{
  animation: fade-in .3s;
}
.fade-leave-active{
  animation: fade-in .1s reverse;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1
  }
}
</style>
