<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div class="checkboxes">
        <label>Developers</label>
        <input type="checkbox" value="developers" v-model="blog.categories">
        <label>Benders</label>
        <input type="checkbox" value="benders" v-model="blog.categories">
        <label>Ninjaz</label>
        <input type="checkbox" value="ninjaz" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <br/><br/>
      <button id="btnAdd" @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding a post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{ blog.title }}</p>
      <p>Blog Content:</p>
      <p>{{ blog.content }} </p>
      <p>Blog Categories </p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>


<script>

export default {

  data() {
    return {
      blog:{
        title: '',
        content: '',
        categories: [],
        author: '',
      },
      authors: ['Developer Bender', 'The Snotch', 'Coding 4 Entrepreneurs'],
      submitted: false,
    }
  },
  // methods : {
  //   post: function(){
  //     this.$http.post('http://jsonplaceholder.typicode.com/posts', {
  //     this.$http.post('https://vue-myblog.firebaseio.com/posts.json', {
  //       title: this.blog.title,
  //       body: this.blog.content,
  //     }).then(function(data){
  //       console.log(data);
  //       this.submitted=true;
  //     });
  //   }
  // }
  methods : {
    post: function(){
      // this.$http.post('http://jsonplaceholder.typicode.com/posts', {
      this.$http.post('https://vue-myblog.firebaseio.com/posts.json', this.blog).then(function(data){
        console.log(data);
        this.submitted=true;
      });
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  background: #ddd;
  padding: 20px;
  border-radius: 10px;
  margin: 20px auto;
  max-width: 600px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  background: #fff;
}
h3{
  margin-top: 10px;
}
.checkboxes input {
  display: inline-block;
  margin-right: 20px;
}
.checkboxes label{
  display: inline-block;
}
#btnAdd{
  padding: 8px;
  border-radius: 15px;
}
</style>
