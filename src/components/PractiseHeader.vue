<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>


<script>

export default {
  props: {
    title:{
      type: String
    }
  },
  data () {
    return {
      // available : false,
      // title: 'Vue Developers'
    }
  },
  methods: {
    changeTitle: function(){
      this.$emit('changeTitle', "Developers Home");
      // this.title="Developers Corner"
    }
  }

}
</script>


<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
