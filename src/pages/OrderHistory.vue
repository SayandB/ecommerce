<template>
  <div>
    <div>
  
   <div class="page">
     <div class="col s12 m7">
       <h5>OrderHistory</h5>
       <div v-for="(details,index) in orderDetails.data" v-bind:key="index">
      <div class="card horizontal">
      <div class="card-image">
        <img :src="details.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p><strong>ORDER ID:{{details.cartId}}</strong>></p>
          <p><strong>PRODUCT ID:{{details.productId}}</strong>></p>
          <p><strong>MERCHANT ID:{{details.merchantId}}</strong>></p>
          <p><strong>QUANTITY:{{details.quantity}}</strong>></p>
          <p><strong>PRODUCT NAME:{{details.productName}}</strong>></p>
          <p><strong>MERCHANT NAME:{{details.merchantName}}</strong>></p>
          <!-- <p><strong> PRICE:{{}}</strong>></p> -->
        </div>
        
      </div>
    </div>
   </div>
   
    <div class="card-action">
           <button style="color:black;background-color:green" type="submit" name="action" @click="gotohome">GoToHomePage</button>
        </div>
 </div>
  </div>
  </div>
</div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
export default {
    name: 'OrderHistory',
    methods: {
      gotohome () {
        this.$router.push('/mainpage')
      }
    },
    computed: {
      ...mapGetters(['getOrderHistory']),
      orderDetails: function () {
        return this.getOrderHistory
      },

    }
  }
</script>

<style scoped>

  .card-action{
      text-align: center;
  }
</style>


