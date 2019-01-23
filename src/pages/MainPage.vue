<template>
<div id="home">
  <search-bar></search-bar>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">Logo</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  <v-layout v-for="product in products" v-bind:key='product'>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <img height="200px" src="https://cdn.cultofmac.com/wp-content/uploads/2017/10/33394950664_efda7bfdbc_o.d502a74a8e3b4b60aa6014b9f0a00e95-780x439.jpg">
          <!-- <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container> -->
        </img>

        <v-card-title>
          <!-- description of the product -->
          <div>
            <span class="grey--text">Name: {{product.name}}</span><br>
            <span>Price: {{product.price}}</span><br>
            <span>Stock: {{product.stock}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="290">
              <v-btn slot="activator" color="primary" dark v-if="login" @click="addToCart(product)">Add To Cart</v-btn>
              <v-btn slot="activator" color="primary" dark @click="productDetails(product)" href="/DetailsPage">Details</v-btn>
            </v-dialog>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import {APIService} from '../APIService';
import {mapGetters,mapActions} from 'vuex'
import SearchBar from '@/components/SearchBar'
const API_URL = 'http://localhost:8000';
const apiService = new APIService();

export default {
name: 'MainPage',
components: {
  SearchBar
},
data() {
return {
products: []
};
},

methods: {
  ...mapActions(['selectProduct']),
  getProducts (){
    apiService.getProducts().then((data) => {
      this.products = data.data;
    });
  },
  productDetails (product) {
    this.$store.dispatch('selectProduct', product);_
  }
},
mounted() {
  this.getProducts();
}
}

</script>