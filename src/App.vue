<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <modal /> -->
    <weather/>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Weather from './components/Weather.vue'

export default {
  name: 'app',
  components: {
    Modal,
    Weather
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
/* modal component */
.modal__overlay{
  background: rgba(0, 0, 0, .8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal{
  width: 650px;
  background-color: white;
  padding: 2em;
  border-radius: 1.5em;
  text-align: center;
}
.modal__buttons{
  display: flex;
  justify-content: space-around;
}
.btn{
  text-align: center;
  padding: .6em .8em .8em;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: lightgray;
  outline: 0;
  font-size: 24px;
  transition: .2s;
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
.search{
  position: absolute;
  right: 0;
  top: 0;
}
.search__field{
  padding: .5em;
  width: 100px;
  transition: .3s
}
.search__field:focus{
  width: 250px;
}
</style>
