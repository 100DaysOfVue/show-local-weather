<template>
  <component :is="icon" v-if="icon"></component>
</template>

<script>
export default {
  name: 'DynamicIcon',
  props: {
    weatherIcon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      icon: null
    }
  },
  computed: {
    loader () {
      return () => import(`./icons/${this.weatherIcon}.vue`)
    }
  },
  mounted () {
    this.loader()
      /* eslint-disable */
      .then(() => this.icon = () => this.loader())
      .catch(() => this.icon = () => import(`./icons/${this.weatherIcon}.vue`))
      /* eslint-enable */
  }
}
</script>
