<template>
<main>
  <search-bar></search-bar>
  <h2 class="header">{{selectedProduct.name}}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img :src="selectedProduct.imageUrl">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p id="Price"> Price &#8377;{{selectedProduct.price}}</p>
          <p id="Description"> {{selectedProduct.description}}</p>
          <div class="display-quantity">
              <button @click="decrease">-</button>
              <input type="number" name="number" placeholder="0" v-model="quantity">
              <button @click="increase">+</button> 
          </div>
        </div>
        <div class="card-action">
          <a href="/CartPage">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</main>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import SearchBar from '@/components/SearchBar'
  export default {
    name: 'DetailsPage',
    components:{
      SearchBar
    },
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
    computed: {
      ...mapGetters(['getSelectedProduct']),
       selectedProduct () {
        return this.getSelectedProduct
      },
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

main {
  margin-left: 100px;
  margin-right: 100px;
}
.card {
  margin-top: 30px;
  width: 500px;
}
.card-image img {
  height: 350px;
  max-height: 100%;
  max-width: 100%;
}
</style>

