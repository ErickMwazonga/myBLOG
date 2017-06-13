<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div v-for="blog in filteredBlogs" class="single-blog">
    <!-- <div v-for="blog in blogs" class="single-blog"> -->
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <!-- <article>{{ blog.body | snippet }}</article> -->
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>


<script>
import searchMixin from '../mixins/searchMixin';

export default {

  data() {
    return {
      blogs: [],
      search: '',
    }
  },
  methods: {

  },
  // created(){
  //   this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
  //     // console.log(data);
  //     this.blogs = data.body.slice(0,10);
  //   });
  // },
  created(){
    this.$http.get('https://vue-myblog.firebaseio.com/posts.json').then(function(data){
      return data.json();
      //console.log(data.json);
      // this.blogs = data.body.slice(0,10);
    }).then(function(data){
      var blogsArray = [];
      for (let key in data){
        // console.log(data[key]);
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      // console.log(blogsArray);
    });
  },

  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [searchMixin]
}
</script>


<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
  background: #ddd;
  padding: 100px;
  /*border-radius: 10px;*/
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
}
</style>
