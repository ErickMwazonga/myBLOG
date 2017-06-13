<template>
  <footer>
    <div id="developers">
      <ul>
        <li v-for="developer in developers" v-on:click="developer.show = !developer.show">
          <h2>{{ developer.name }}</h2>
          <h3 v-show="developer.show">{{ developer.speciality }}</h3>
        </li>
      </ul>
      <button v-on:click="deleteDeveloper">Delete Developer</button>
    </div>
  </footer>
</template>


<script>

export default {
  //validation
  props: {
    developers: {
      type: Array,
      required: true
    }
  },
  // props: ['developers'],
  data() {
    return{

    }
  },
  methods: {
    deleteDeveloper: function(){
      this.developers.pop();
    }
  },
  //lifecycle hooks
  beforeCreate(){
    alert('beforeCreate');
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('beforeMount');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('beforeUpdate');
  },
  updated(){
    alert('updated');
  },

}
</script>


<style scoped>
#developers {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
