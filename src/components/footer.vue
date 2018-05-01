<template>
  <footer>
  <p >{{ copyright }} {{ title }}</p>
  </footer>
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
      copyright: "Copyright @2017 "
    }
  },
  /*sử dụng bus
  bus.$on(tên function, callback là data)*/
  /*created() {
    bus.$on('titleChanged', (data) => {
      this.title1 = data;
    });
  }*/
}
</script>
<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }
  p {
    color: lightgreen;
    text-align: center;
  }
</style>
