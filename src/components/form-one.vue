<template>
  <div>
    <form-helper >
    <div slot="form-header">
      <h3>Form One - Contact Us</h3>
      <p>Fill in this form to contact us</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Name" v-model.lazy="name" required>
      <label>Your message:</label>
      <input type="text" placeholder="Message" v-model="message">
    </div>
    <div slot="form-controls">
      <button type="button" v-on:click="handleSubmit">Send</button>
    </div>

  </form-helper>
   <div id="preview">
      <label>Name</label>
      <span> {{ name }}</span>
      <label>Message</label>
      <span>{{ message }}</span>
    </div>
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
        name: "",
        message: ""
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
