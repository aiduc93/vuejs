import addBlog from './components/add-blog.vue';
import showData from './components/show-data.vue';
import listBlog from './components/list-blog.vue';
import singleBlog from './components/single-blog.vue';
export default [
  {path: '/', component: showData },
  {path: '/add', component: addBlog },
  {path: '/search', component: listBlog},
  {path: '/blog/:id', component: singleBlog},
]
