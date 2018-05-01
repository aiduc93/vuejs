<template>
  <div>
    <div id="framework">
     <ul>
       <li v-for="framework in frameworks" v-on:click="framework.show = !framework.show">
        <h1>{{ framework.name }}</h1>
        <h2 v-if="framework.show">{{ framework.content }}</h2>
       </li>
     </ul>
   </div>
 </div>
</template>
<script>
  export default{
    props: ['frameworks'],
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
#framework {
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
