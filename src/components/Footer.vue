<template>
  <footer>
    <p v-html="copyright"></p>
    <p>{{ title }}</p>
  </footer>
</template>


<script>

export default {
  props:{
    title: {
      type: String
    }
  },
  data() {
    return{
      copyright: '&copy; 2017 Erick Mwazonga'
    }
  }

}
</script>


<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
