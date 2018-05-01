<template>
  <div>
    <form-helper >
    <div slot="form-header">
      <h3>This is the title of the form</h3>
      <p>Information about the form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Name" required>
      <input type="password" placeholder="Password" required>
    </div>
    <div slot="form-controls">
      <button type="button" v-on:click="handleSubmit">Login</button>
    </div>
  </form-helper>
</div>
</template>
<script>
  import slot from './slot.vue'
  export default {
    components: {
      'form-helper': slot
    },
    data() {
      return {

      }
    },
    methods: {
      handleSubmit: function() {

      }
    }
  }
</script>
<style>
li {
  display: inline-block;
  padding: 10px;
}
</style>
