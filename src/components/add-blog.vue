<template>

  <div>
    <h2>Add Blog</h2>
    <label>Title</label>
    <input type="text" value="Title" v-model="blog.title">
    <label>Content</label>
    <input type="text" value="Content" v-model="blog.body">
    <select v-model="blog.fw">
      <option v-for="framework in frameworks">
        {{framework.name}}
      </option>
    </select>
    <button v-on:click.prevent="post">Add Framework</button>
    <h1 v-if="status">Add Success</h1>
  </div>
</template>
<script>
  export default {
    props: ['frameworks'],
    data() {
      return {
        blog: {
          title: "",
          body: "",
          fw: "",
        },
        status: false
      }
    },
    methods: {
      post: function() {
        // this.$http.post('http://jsonplaceholder.typicode.com/posts', {
          this.$http.post('https://vuejd-tutorial.firebaseio.com/posts.json',this.blog).then(function(response){
            console.log(response);
            this.status = true;
          });
        }
      }
    }
  </script>
  <style>

  </style>
