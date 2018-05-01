<template>
  <div>
    <h1>Single Blog</h1>
    <article>
      <h2>{{ blog.title }}</h2>
      <span>{{ blog.body }}</span>
    </article>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get('https://vuejd-tutorial.firebaseio.com/posts/' + this.id + '.json').then(function (response) {
          return response.json();
      }).then(function(response) {
        this.blog = response;
        console.log(response);
      })
    }
  }
</script>
<style>

</style>
