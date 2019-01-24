<template>
  <div class="col s12 m7">HELLO
    <h2 class="header">{{selectedProduct.name}}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{selectedProduct.price}}</p>
        </div>
        <div class="card-action">
          <a href="/CartPage">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'DetailsPage',
    computed: {
      ...mapGetters(['getSelectedProduct']),
       selectedProduct () {
        return this.getSelectedProduct
      }
      }
    }
</script>

