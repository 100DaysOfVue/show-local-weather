const openWeatherMapServices = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
  apiKey: 'a69cb8c119acf257033dba8e68bc589a'
}

// error to log if response is non a 200-299
function logError (err) {
  console.log('Looks like was a problem:\n', err)
}
// to validate if response is 200-299
function validate (res) {
  if (!res.ok) {
    throw Error(res.status)
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
      console.log(res)
      _this.weatherDescription = res.weather[0].description
      _this.city = res.name
      _this.country = res.sys.country
      _this.tempeture = res.main.temp
      _this.weatherIcon = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`
    })
    .catch(logError)
}

openWeatherMapServices.searchWeatherByCityName = function (city, countryCode = null) {
  let fetchUrl
  (countryCode) ? fetchUrl = `${this.baseUrl}?q=${city},${countryCode}&type=like&appid=${this.apiKey}`
    : fetchUrl = `${this.baseUrl}?q=${city}&type=like&appid=${this.apiKey}`
  return fetch(fetchUrl)
    .then(validate)
    .then(resToJSON)
    .then(res => console.log(res))
    .catch(logError)
}

export default openWeatherMapServices
