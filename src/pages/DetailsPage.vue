<template>
  <div>
    <search-bar></search-bar>
    <div class="page">
      <div class="col s12 m7">
      <!-- <div v-for="product in isProductDetails" -->
      <div class="card horizontal">
      <div class="card-image">
        <img :src="product.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
           <p><strong>MERCHANT ID:{{product.merchantId}}</strong></p>
          <p><strong>PRODUCT ID:{{product.productId}}</strong></p>
          <p><strong>PRICE:{{product.price}}</strong></p>
          <p><strong>STOCK:{{product.stock}}</strong></p>
          <p><strong>NAME:{{product.name}}</strong></p>
          <p><strong>PRODUCT RATING:{{product.productRating}}</strong></p>
          <p><strong>MERCHANT NAME:{{product.merchantName}}</strong></p>
          <p><strong>DESCRIPTION:{{product.description}}</strong></p>
          <p><strong>SOLD ITEMS:{{product.soldItems}}</strong></p>
          <p><strong>RATING COUNT:{{product.ratingCount}}</strong></p> 
          <p><strong>QUANTITY:{{product.quantity}}</strong></p> 
          <p><strong>Total Price:{{updatedPrice}}</strong></p>
           <div class="display-quantity">
              <button @click="decrease">-</button>
              <input type="number" name="number" placeholder="0" v-model="quantity">
              <button @click="increase">+</button> 
          </div>
          <div class="card-action">
           <!-- <button style="color:black;background-color:#f44336" @click="addCart">AddToCart</button> -->
             <a href="#" class = "cart red-text" @click="addCart">AddToCart</a>
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
import SearchBar from '@/components/SearchBar'
import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'DetailsPage',
    data () {
      return {
        token: '',
        productId: '',
        merchantId: '',
        quantity: 0,
        productName: '',
        imageUrl: '',
        merchantName: '',
        price: '',
        productPrice: 1
      }
    },
    methods: {
       ...mapActions(['addingtocart']),
       addCart () {
          this.$store.dispatch('addingtocart',{
              token:this.isActiveUser.userId,
              productId: this.product.productId,
              productName: this.product.productName,
              merchantId: this.product.merchantId,
              merchantName: this.product.merchantName,
              quantity: this.product.quantity,
              imageUrl: this.product.imageUrl,
              price: this.totalprice
          })
       },
       increase () {
        this.quantity = this.quantity+1
       },

       decrease () {
        if(this.quantity > 0)
          this.quantity = this.quantity-1
      }
    },
    components: {
      SearchBar
    },
    computed: {
      ...mapGetters(['userdetails', 'getSelectedProduct']),
      isProductDetails: function () {
        this.productPrice = this.getSelectedProduct.price
        return this.getSelectedProduct
      },
      isActiveUser: function () {
        return this.userdetails
      },
      updatedPrice: function () {
        if(this.quantity != 0){
          return this.getSelectedProduct.price * this.quantity
        }else{
          return this.getSelectedProduct.price
        }
      }
    }
  }
</script>

<style scoped>

  
  .display-quantity{
    text-align: horizontal;
  }
    img{
      height: 450px;
    }
    .card-content{
      margin-right: 50px;
    }

    .page{
      margin-right: 10px;
      padding-left:50px;
      padding-right:50px;
    }
  
  </style>