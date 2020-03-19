<template>
  <div class="home">
    <ModList :mods ="mods" />
  </div>
</template>

<script>
// @ is an alias to /src
import ModList from '../components/ModList.vue'

export default {
  name: 'Home',
  components: {
    ModList
  },
  data() {
    return {
    }
  },
  computed: {
    mods(){
      return this.$root.$data.mods;
    }
  }
}
</script>
