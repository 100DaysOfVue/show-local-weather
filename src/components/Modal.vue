<template>
  <div class="modal__overlay">
    <div class="modal">
      <div class="modal__buttons" v-if="!this.show">
        <button class="btn" @click="changeShow('weather')">Open One Thing</button>
        <button class="btn" @click="changeShow('search')">Open Anoher one</button>
      </div>
      <search v-else-if="this.show === 'search'" />
    </div>
  </div>
</template>

<script>
import Search from './Search.vue'

export default {
  name: 'modal',
  props: {
    show: String
  },
  components: {
    Search
  },
  methods: {
    changeShow: function (changeTo) {
      this.$emit('changeShow', changeTo)
    }
  }
}
</script>

<style scoped>
.search{
  position: relative;
}
</style>
