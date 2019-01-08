import iconsCases from './icons-cases.js'

const openWeatherMapServices = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
  apiKey: 'a69cb8c119acf257033dba8e68bc589a'
}

// to validate if response is 200-299
function validate (res) {
  if (!res.ok) {
    throw new Error(res.status)
  }
  return res
}
// to change the response to JSON
function resToJSON (res) {
  return res.json()
}

// to serach weather by coordinates
openWeatherMapServices.searchWeatherByCoordinates = function (lat, long, _this) {
  return fetch(`${this.baseUrl}?lat=${lat}&lon=${long}&appid=${this.apiKey}`)
    .then(validate)
    .then(resToJSON)
    .then(res => {
      _this.loading = false
      _this.weatherDescription = res.weather[0].description
      _this.city = res.name
      _this.country = res.sys.country
      _this.temperature = res.main.temp
      _this.weatherIcon = iconsCases[res.weather[0].icon]
    })
    .catch(err => {
      console.log('Looks like was a problem:\n', err)
    })
}

openWeatherMapServices.searchWeatherByCityName = function (city, countryCode = null, _this) {
  let fetchUrl
  (countryCode) ? fetchUrl = `${this.baseUrl}?q=${city},${countryCode}&type=like&appid=${this.apiKey}`
    : fetchUrl = `${this.baseUrl}?q=${city}&type=like&appid=${this.apiKey}`
  return fetch(fetchUrl)
    .then(validate)
    .then(resToJSON)
    .then(res => {
      console.log(res)
      _this.loading = false
      _this.weatherDescription = res.weather[0].description
      _this.city = res.name
      _this.country = res.sys.country
      _this.temperature = res.main.temp
      _this.weatherIcon = iconsCases[res.weather[0].icon]
    })
    // error to log if response is non a 200-299
    // for avoid this use axios in component
    // check:
    // https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html#Dealing-with-Errors
    .catch((err) => {
      console.log('Looks like was a problem:\n', err)
      _this.loading = false
      _this.errored = true
      _this.errorMessage = err.message
    })
}

export default openWeatherMapServices
