<template>
  <main>
   <nav class="white">
            <div class="nav-wrapper">
              <a href="/MainPage" class="brand-logo red-text">
                <img src = "https://i.pinimg.com/originals/0f/a9/5d/0fa95d88f90cc21e23f2d23a09dd016b.png" ></a>
                <ul class="hide-on-med-and-down right">               
                    <li>    
                        <div class="center row">
                            <div class="input-field col s6 s12 red-text">
                              <i @click="getProducts" class="material-icons prefix">search</i>
                              <input type="text" v-model = 'productName' placeholder="search" id="autocomplete-input" class="autocomplete red-text">
                            </div>
                          </div>         
                      </li>                     
                    <li>
                      <a href="/About" class="red-text">About</a>
                    </li>
                    <li>
                      <router-link to="/CartPage" class="red-text"><i class="material-icons" id="cart">add_shopping_cart</i></router-link>
                    </li>
                    <li >
                        <router-link class="red-text" v-if= "isLogin" to="/OrderHistory">Hello </router-link>
                        <a  class="red-text" v-else href="/Login">Login</a>
                    </li>
                    <li>
                      <router-link class = "red-text" v-if ="isLogin" to="/Logout">Logout</router-link>
                    </li>
                </ul>
            </div>
          </nav> 
    <categories-bar></categories-bar>   
  </main>
</template>

<style>

i{
  cursor: pointer;
}
.nav-wrapper{
  overflow: hidden;
}
#topbarsearch .input-field .prefix { 
            width:0rem !important;    
            }        
        #topbarsearch nav ul li:hover, nav ul li.active {
                background-color: none !important;
            }
        .input-field .prefix ~ input, .input-field .prefix ~ textarea, .input-field .prefix ~ label, .input-field .prefix ~ .validate ~ label, .input-field .prefix ~ .autocomplete-content{
            margin-left: 1rem !important;
            }
</style>    

<script>
import {mapActions, mapGetters} from 'vuex'
import CategoriesBar from '@/components/CategoriesBar'
export default {
  name: 'SearchBar',
  components: {
    CategoriesBar
  },
  data() {
    return {
      productName: ''
    }
  },
  methods: {
  ...mapActions(['showProduct']),
  getProducts (){
    this.$store.dispatch('showProduct', this.productName)
    },
    ...mapGetters(['loginStatus']),
    isLogin: function () {
      return this.loginStatus
    }
  },
mounted() {
  this.getProducts();
}
}
</script>
