<template>
  <div id="app">
    <search v-on:search="searchByCityName" />

    <Weather
      :loading="loading"
      :errored="errored"
      :errorMessage="errorMessage"
      :city="city"
      :country="country"
      :description="weatherDescription"
      :temperature="temperature"
      :weatherIcon="weatherIcon"
      v-on:search="searchByCityName"
    />

    <Footer />
  </div>
</template>

<script>
import Weather from './components/Weather.vue'
import Search from './components/Search.vue'
import Footer from './components/Footer.vue'

import api from './services/api.js'

export default {
  name: 'app',
  components: {
    Weather, Search, Footer
  },
  data () {
    return {
      loading: true,
      errored: false,
      errorMessage: '',
      city: '',
      country: '',
      weatherDescription: '',
      weatherIcon: '',
      temperature: 0
    }
  },
  methods: {
    searchByCityName: function (message) {
      let city, countryCode
      const separetedMessage = this.separateMessage(message)
      if (separetedMessage.length >= 2) {
        city = separetedMessage[0]
        countryCode = separetedMessage[1]
      } else {
        city = separetedMessage[0]
      }
      if (!message) return
      // for apropiate animation when component unmoun and mount
      // when new properties arrive
      this.resetWeatherData()
      api.searchWeatherByCityName(city, countryCode, this)
    },
    separateMessage: function (message) {
      return message.toLowerCase().split(',')
    },
    resetWeatherData: function () {
      this.loading = true
      this.errored = false
      this.errorMessage = ''
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
@import url('https://fonts.googleapis.com/css?family=Lato:300,700');

form, input, button{
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
}
:focus{
  outline:0;
}

body, html{
  margin: 0;
  padding: 0;
  height: 100%;
}
:root{
  --results-height: 150px;
  --results-width: 50%;
  --temperature-size: 4.5em;
  --description-size: 1.5em;
  --search-bar-width: 300px;
  --search-bar-height: 20px;
  --footer-height: 82px;
  --footer-color: hsl(18, 100%, 73%);
  --weather-background-color: hsl(0, 0%, 90%);
  --links-color: hsl(240, 2%, 23%);
  --btn-background-color: hsl(18, 95%, 65%);
}
/* media queries to work: */
@media screen and (max-width: 1024px){
  :root{
    --results-width: 60%;
  }
}

@media screen and (max-width: 860px){
  :root{
    --results-width: 80%;
    --search-bar-width: 100%;
    --search-bar-height: 28px;
  }
}

@media screen and (max-width: 640px){
  :root{
    --results-width: 80%;
    --temperature-size: 3.5em;
    --description-size: 1.2em;
    --search-bar-width: 100%;
    --search-bar-height: 35px;
    --footer-height: 105px;
  }
  .weather_result{
    padding: 4px;
  }
  .footer{
    font-size: 1.3em;
  }
}

#app {
  font-family: 'Lato', sans-serif;
  height: 100%;
}
/* Weather component */
.weather{
  min-height: calc(100% - (var(--footer-height) + 5px));
  background-color: var(--weather-background-color);
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
  width: var(--search-bar-width);
}
.search__field{
  padding: .5em;
  width: calc(100% - 83px);
  height: var(--search-bar-height);
}
.search__field:focus{
  box-shadow: 3px 3px 5px 0 var(--btn-background-color)
}
.btn__search{
  height: calc(var(--search-bar-height) + 16px);
  font-size: 1.125em;
  padding: .15em .2em .2em;
  color: white;
  background-color: var(--btn-background-color);
  border: 2px solid var(--btn-background-color);
  border-bottom: 3px solid var(--btn-background-color);
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  outline: 0;
  transition: .2s;
}
.btn__search:active{
  transform: scale(.9);
}
/* footer component */
.footer{
  height: var(--footer-height);
  background-color: var(--footer-color);
  text-align: center;
  padding: 2px
}
.footer p {
  margin: .40em;
}
a{
  text-decoration: none;
  color: var(--links-color);
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
