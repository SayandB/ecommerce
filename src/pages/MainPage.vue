<template>
  <div class = "main">
   <search-bar></search-bar> 
   <ad-bar></ad-bar>
   <div class="row">
    <!-- v-for="product in products" -->
    <div class="col s12 m4" >
      <div class="card" >
        <div class="card-image">
          <img src = "https://static.toiimg.com/photo/54946764/Apple-iPhone-7.jpg">
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content" >
          <span class="card-title" style = "">Title<!-- {{product.name}}--></span>
          <span class="Price" style = "">Price<!-- {{product.price}}--></span>
          <span class="Rating" style = "">Rating<!-- {{product.productRating}--></span>
            <!-- <p>I am a very simple card. I am good at containing small bits of information. I am convenient because  I require little markup to use effectively.</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>  
  </template> 

<style scoped>


.main{
  margin-left: 100px;
  margin-right: 100px;
}

.Rating{
  padding-left: 100px;
}
.card {
  margin-top: 5px;
  width: 300px;
}
.card-image img {
  max-height: 80%;
  max-width: 80%;
}
</style>

<script>
import {APIService} from '../APIService';
import {mapGetters,mapActions} from 'vuex'
import SearchBar from '@/components/SearchBar'
import AdBar from '@/components/AdBar'
const API_URL = 'http://localhost:8000';
const apiService = new APIService();

export default {
name: 'MainPage',
components: {
  SearchBar,
  AdBar
},
// data() {
// return {              
// productsId:''
// }
// },
// computed: {
//   //Spread Operator
//   ...mapGetters(['getSelectedProduct'])
// },
// methods: {  
//   ...mapActions(['selectProduct']),
//   getProducts (){
//     apiService.getProducts().then((data) => {
//       this.products = data.data
//     })
//   },
//   productDetails (product) {
//     this.$store.dispatch('selectProduct', product);_
//   },
//   singleproduct () {
//     this.$store.dispatch('allProducts',{
//       productId:getProducts.productId
//     })
//   }
// },
// mounted() {
//   this.getProducts();
// },
}

</script>