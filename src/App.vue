<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-container v-bind:frameworks="frameworks"></app-container>
    <hr>
    <h1 style="text-align: center">Slot</h1>
    <!--     <form-one></form-one>
    <form-two></form-two> -->
    <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>
  <button type="button" v-on:click="showFormOne">Show Form One</button>
  <button type="button" v-on:click="showFormTwo">Show Form Two</button>
  <hr>
  <h1 style="text-align: center">Checkbox</h1>
  <label>Angular</label>
  <input type="checkbox" value="Angular" v-model="languages.categories">
  <label>React</label>
  <input type="checkbox" value="React" v-model="languages.categories">
  <label>Vue</label>
  <input type="checkbox" value="Vue" v-model="languages.categories">
  <label>Redux</label>
  <input type="checkbox" value="Redux" v-model="languages.categories">
  <label>Sail</label>
  <input type="checkbox" value="Sail" v-model="languages.categories">
  <div id="previewCategories">
    <ul>
      <li v-for="categorie in languages.categories">{{categorie}}</li>
    </ul>
  </div>
  <hr>
  <h1 style="text-align: center">Dropdown</h1>
  <select v-model="languages.fw">
    <option v-for="framework in frameworks">
      {{framework.name}}
    </option>
  </select>
  <div id="previewCategories">
   <p>{{languages.fw}}</p>
 </div>
 <hr>
 <h1 style="text-align: center">HTTP POST</h1>
 <!-- <add-blog v-bind:frameworks= "frameworks"></add-blog>
 <show-data></show-data>
  <list-blog></list-blog> -->
  <router-view v-bind:frameworks="frameworks"></router-view>
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>
<script>
  import Header from './components/header.vue'
  import Container from './components/container.vue'
  import formOne from './components/form-one.vue'
  import formTwo from './components/form-two.vue'
  import addBlog from './components/add-blog.vue'
  import showBlog from './components/show-data.vue'
  import listBlog from './components/list-blog.vue'
  import Footer from './components/footer.vue'
  export default {
    components: {
      'app-header': Header,
      'app-container': Container,
      'form-one': formOne,
      'form-two': formTwo,
      'add-blog': addBlog,
      'show-data': showBlog,
      'list-blog': listBlog,
      'app-footer': Footer,
    },
    data () {
      return {
        frameworks :[
        {name: 'Angular', content: 'This is an Angular framework' ,show: false},
        {name: 'React', content: 'This is a React framework' ,show: false},
        {name: 'Vue', content: 'This is a Vue framework' ,show: false},
        {name: 'Sail', content: 'This is a Sail framework' ,show: false},
        {name: 'Redux', content: 'This is a Redux framework' ,show: false},
        {name: 'Node', content: 'This is a Node framework' ,show: false},
        ],
        title: 'Vuejs',
        component: 'form-two',
        languages: {
          categories:[],
          fw:"",
          title:"",
          body: "",
          id: ""
        }
      }
    },
    methods: {
      updateTitle: function (data) {
        this.title = data;
      },
      showFormOne: function () {
        this.component = 'form-one'
      },
      showFormTwo: function () {
        this.component = 'form-two'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
