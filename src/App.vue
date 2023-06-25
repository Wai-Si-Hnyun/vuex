<template>
  <div id="app">
    <product-list-one />
    <product-list-two />
  </div>
</template>

<script>
import {store} from "@/store/store";
import ProductListOne from "@/components/ProductListOne.vue";
import ProductListTwo from "@/components/ProductListTwo.vue";

export default {
  store,
  name: 'App',
  components: {
    ProductListOne,
    ProductListTwo
  },
  data() {
    return {

    }
  }
}
</script>
