<template>
  <!-- <div id="show-blogs" v-theme:column="'narrow'"> -->
  <div id="show-blogs" v-theme="'wide'">
    <h1>All Blog Articles</h1>
    <input type="text" placeholder="Search" v-model='search'>
    <div id="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/'+ blog.id">
      <h2 v-rainbow> {{ blog.id }}-{{blog.title | to-uppercase}}</h2>
      <p>{{blog.body | snippet}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
import searchMixin from "../mixins/search-mixins";
  export default {
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    methods: {

    },
    created() {
      this.$http.get("https://vuejd-tutorial.firebaseio.com/posts.json").then(function (response){
          return response.json();
      }).then(function(response) {
          var blogArray = [];
          for( let key in response) {
            response[key].id = key;
            blogArray.push(response[key]);
          }
          this.blogs = blogArray;
      });
    },
    computed: {

    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      },
      snippet(value) {
        return value.split(0,100)+ '...';
      }
    },
    directives: {
      "rainbow": {
        bind(el, binding, vnode) {
          return el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      },
      "theme": {
       bind(el, binding, vnode) {
        if (binding.value == 'wide') {
          el.style.maxWidth= '1200px';
        } else if (binding.value == 'narrow') {
          el.style.maxWidth = '560px';
        }
        if (binding.arg == 'column') {
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
    }
  },
   mixins: [searchMixin]
}
</script>
<style>
  #single-blog {
    border: 1px solid #BDBBBB;
    margin: 10px;
    background: #e8e5e5;
    border-radius: 10px;
  }
</style>
