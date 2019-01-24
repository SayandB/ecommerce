<template>
  <div class="main">
   <div class="page">
     <div class="col s12 m7">
       <h5>Shopping Cart</h5>
       <!-- <div v-for="(carddetails, index) in displayCartDetails" v-bind:key = "index"> --> 
      <div class="card horizontal">
      <div class="card-image">
        <img :src="carddetails.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          console.log(carddetails);
          <p><strong>CART ID:{{carddetails.cartId}}</strong>></p>
          <p><strong>TOKEN:{{carddetails.token}}</strong>></p>
          <p><strong>PRODUCT ID:{{carddetails.productId}}</strong>></p>
          <p><strong>MERCHANT ID:{{carddetails.merchantId}}</strong>></p>
          <p><strong>QUANTITY:{{carddetails.quantity}}</strong>></p>
          <p><strong>PRODUCT NAME:{{carddetails.productName}}</strong>></p>
          <p><strong>MERCHANT NAME:{{carddetails.merchantName}}</strong>></p>
          <p><strong>PRICE:{{carddetails.price}}</strong>></p>
        </div>
        <div class="card-action">
          <!--  <button style="color:black;background-color:#f44336" type="submit" name="action" @click="removeproduct">Remove</button> -->
          <a href="#" class = "cart red-text" @click="removeproduct">Remove</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  <div class="buton">
      <button style="color:white;background-color:black;size:70px"type="submit" name="action" @click="buying">BuyNow</button>
      <a href="#" class = "cart red-text" @click="buying">BuyNow</a>
  </div>
</div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'CartPage',
  data () {
    return {
      userId:'',
      productId:''
    }
  },
  methods: {
   ...mapActions(['deleteProduct','buyProduct']),
    removeproduct () {
      this.$store.dispatch('deleteProduct',{
        userId: this.isActiveUser.userId,
        productId: this.isProductDetails.productId
      })
    },
    buying () {
      this.$store.dispatch('buyProduct',{
        userId: this.isActiveUser.userId
      })
    }
  },
  components : {
      SearchBar
  },

   computed: {
      ...mapGetters(['userdetails', 'getSelectedProduct', 'getCartDetails']),
      isProductDetails: function () {
        debugger
        return this.getSelectedProduct
      },

      isActiveUser: function () {
        return this.userdetails
      },

      displayCartDetails : function () {
        return this.getCartDetails
      }
    }
  
}
</script>

<style scoped>
    img{
      height: 300px;
    }
    .card-content{
      margin-right: 50px;
    }

    .page{
      margin-right: 10px;
      padding-left:50px;
      padding-right:50px;
    }
  
    .buton{
      margin-right: 10px;
      padding-left:50px;
      padding-right:50px;
      text-align: center;
      
    }

  </style>