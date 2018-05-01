<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    <ul>
        <li><router-link to="/add">Add Block</router-link></li>
        <li><router-link to="/">Show Block</router-link></li>
        <li><router-link to="/search">Search Block</router-link></li>
    </ul>
  </header>
</template>
<script>
  //sử dụng bus từ main.js để thay đổi 1 giá trị title trong header thôi
  //nếu k có this.title trong này thì footer k đổi title
  import { bus } from "../main"
  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        //title: "Vue Header"
      }
    },
    methods: {
      changeTitle: function() {
        // this.title = "Vue change"

        // cách 1 dùng $emit thay đổi cả 2 header và footer
        this.$emit("changeTitle", "Vue change")

        // cách 2 dùng bus
        // và trong data k có title
        /*this.title1 = "Header change title";
        bus.$emit("titleChanged", "Header change title")*/
      }
    },
/*
-beforeCreate: Called synchronously after the instance has just been initialized, before data observation and event/watcher setup.

-created: Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, the mounting phase has not been started, and the $el property will not be available yet.

-beforeMount: Called right before the mounting begins: the render function is about to be called for the first time.

-mounted: Called after the instance has just been mounted where el is replaced by the newly created vm.$el.

-beforeUpdate: Called when the data changes, before the virtual DOM is re-rendered and patched.

-updated: Called after a data change causes the virtual DOM to be re-rendered and patched.
*/
    //lifecycle
   /* beforeCreate() {
      alert('Before Create');
    },
    created() {
      alert('Created');
    },
    beforeMount() {
      alert('Before Mount');
    },
    mounted() {
      alert('Mounted');
    },
    beforeUpdate() {
      alert('Before Update');
    },
    updated(){
       alert('Updated');
    }*/

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
