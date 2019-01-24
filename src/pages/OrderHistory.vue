<template>
  <div>
    <div>
  
   <div class="page">
     <div class="col s12 m7">
       <h5>OrderHistory</h5>
       <div v-for="(carddetails,index) in displayCartDetails.list" v-bind:key="index">
      <div class="card horizontal">
      <div class="card-image">
        <img src="../assets/logo.png">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p><strong>ORDER ID:{{carddetails.cartId}}</strong>></p>
          <p><strong>PRODUCT ID:{{carddetails.productId}}</strong>></p>
          <p><strong>MERCHANT ID:{{carddetails.merchantId}}</strong>></p>
          <p><strong>QUANTITY:{{carddetails.quantity}}</strong>></p>
          <p><strong>PRODUCT NAME:{{carddetails.productName}}</strong>></p>
          <p><strong>MERCHANT NAME:{{carddetails.merchantName}}</strong>></p>
          <p><strong>PRICE:{{carddetails.price}}</strong>></p>
        </div>
        <div class="card-action">
           <button style="color:black;background-color:#f44336" type="submit" name="action" @click="gotohome">HomePage</button>
        </div>
      </div>
    </div>
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
    data () {
      return {
        userId:''
      }
    },
    methods: {
      gotohome () {
        this.$router.push('/mainpage')
      }
    },
    computed: {
      ...mapGetters(['getOrderHist']),
      displayCartDetails: function () {
        return this.getOrderHist
      }
    }
  }
</script>