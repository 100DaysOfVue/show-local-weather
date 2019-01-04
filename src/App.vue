<template>
  <div id="app">
    <search v-on:search="searchByCityName" />
    <Weather
      :city="city"
      :country="country"
      :description="weatherDescription"
      :temperature="temperature"
      :weatherIcon="weatherIcon"
      v-on:search="searchByCityName"
    />
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
import Search from './components/Search.vue'

import api from './services/api.js'

export default {
  name: 'app',
  components: {
    Weather, Search
  },
  data () {
    return {
      city: '',
      country: '',
      weatherDescription: '',
      weatherIcon: '',
      temperature: 0
    }
  },
  methods: {
    searchByCityName: function (message) {
      this.resetWeatherData()
      let city, countryCode
      const separetedMessage = this.separateMessage(message)
      if (separetedMessage.length >= 2) {
        city = separetedMessage[0]
        countryCode = separetedMessage[1]
      } else {
        city = separetedMessage[0]
      }
      // eslint-disable-next-line
      (message) ? api.searchWeatherByCityName(city, countryCode, this) : ''
    },
    separateMessage: function (message) {
      return message.toLowerCase().split(',')
    },
    resetWeatherData: function () {
      this.city = ''
      this.country = ''
      this.weatherDescription = ''
      this.weatherIcon = ''
      this.temperature = 0
    }
  },
  created: function () {
    navigator.geolocation.getCurrentPosition(pos => {
      const coor = pos.coords
      api.searchWeatherByCoordinates(coor.latitude, coor.longitude, this)
    })
  }
}
</script>

<style>
body, html{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
}
.btn{
  text-align: center;
  padding: .3em .4em .4em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: lightgray;
  outline: 0;
  font-size: 24px;
  transition: .2s;
}
.btn__search{
  font-size: 1.125em;
  padding: .15em .2em .2em;
  border: 2px solid lightgray;
  border-bottom: 3px solid lightgray;
  border-radius: 0;
}
.btn:active{
  transform: scale(.9);
}
/* Weather component */
.weather{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* search component */
.search{
  position: absolute;
  right: 0;
  top: 0;
}
.search__field{
  padding: .5em;
  width: 300px;
}
/* icons components */
/* sun animations */
.sun__circle{
  animation: change-opacity-fill 3s ease-in-out forwards;
}

@keyframes change-opacity-fill {
  0%{
    fill-opacity: 1
  }
  5%, 20%, 40%, 60%, 80%, 93%{
    fill-opacity: .5
  }
  10%, 30%, 50%, 70%, 90%{
    fill-opacity: .7
  }
  95%{
    fill-opacity: .9
  }
  100%{
    fill-opacity: 1
  }
}

.sun__rectangles--bright {
  animation: change-bright-fill 3s ease-in-out forwards;
}

@keyframes change-bright-fill {
  0%{
    fill: #ffcb00;
  }
  5%, 20%, 40%, 60%, 80%, 95% {
    fill: #ffe069
  }
  10%, 30%, 50%, 70%, 90%{
    fill: #ffcb00
  }
  100%{
    fill: #ffcb00
  }
}
.sun__rectangles--dark {
  animation: change-dark-fill 3s ease-in-out forwards;
}

@keyframes change-dark-fill {
  0%{
    fill: #ffe069;
  }
  6%, 24%, 44%, 64%, 84%, 96% {
    fill: #ffcb00
  }
  12%, 34%, 54%, 74%, 94%{
    fill: #ffe069
  }
  100%{
    fill: #ffe069;
  }
}
.waterdrop{
  animation: raindrops 3s ease-in-out forwards
}

@keyframes raindrops {
  0%, 100%{
    fill-opacity: 1
  }
  5%, 25%, 45%, 65%, 85%, 98%{
    fill-opacity: 0
  }
  15%, 35%, 55%, 75%, 95%{
    fill-opacity: 1
  }
}
/* raindrops */
.waterdrop:first-child{
  animation-delay: 100ms
}
.waterdrop:nth-child(2){
  animation-delay: 200ms;
}
.waterdrop:last-child{
  animation-delay: 150ms;
}
/* scattered clouds */
#leftCloud{
  animation: left-cloud 3s cubic-bezier(0.42, 0, 0.97, 0.44);
}
@keyframes left-cloud {
  0%{
    transform: translateX(50%)
  }
  50%{
    transform: translateY(45px)
  }
}
#rightCloud{
  animation: right-cloud 3s cubic-bezier(0.42, 0, 0.97, 0.44);
}
@keyframes right-cloud {
  0%{
    transform: translateX(-45%)
  }
  50%{
    transform: translateY(-55px)
  }
}
/* moon */
.star{
  animation: star-blink 3s;
}
.star:first-child{
  animation-delay: 400ms;
}
@keyframes star-blink {
  0%,20%,40%,60%,80%,95%{
    opacity: 0;
  }
  10%, 30%,50%,70%,90%,100%{
    opacity: 1;
  }
}
/* snowflakes */
.snowflake{
  animation: blinking 3s ease-in-out;
}
.snowflake:last-child{
  animation-delay: 300ms
}
.snowflake:first-child{
  animation-delay: 150ms
}
@keyframes blinking {
  0%, 20%, 40%, 60%, 80%, 95%{
    opacity: 0;
  }
  10%, 30%, 50%, 70%, 90%, 100%{
    opacity: 1;
  }
}
/* lightnings */
.lightning{
  animation: blinking 3s ease-in-out;
}
.lightning:last-child{
  animation-delay: 300ms
}
.lightning:first-child{
  animation-delay: 150ms
}
#dark__cloud{
  animation: 3s blinking ease-in-out;
}
</style>
