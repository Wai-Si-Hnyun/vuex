<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products">
        {{ product.name }} : {{ product.price}}
      </li>
    </ul>
    <input type="text" name="test" v-model="test">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        test: ''
      }
    },
    computed: {
      products() {
        return this.$store.state.products;
      }
    }
  }
</script>