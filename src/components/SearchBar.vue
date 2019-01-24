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
                              <i class="material-icons prefix">search</i>
                              <input type="text" placeholder="search" id="autocomplete-input" class="autocomplete red-text">
                            </div>
                          </div>         
                      </li>                     
                    <li>
                      <router-link to="/About" class="red-text">About</router-link>
                    </li>
                    <li>
                      <router-link  to="/CartPage" class="red-text"><i class="material-icons" id="cart" @click="showcart">add_shopping_cart</i></router-link>
                    </li>
                      <li>
                      <router-link class="red-text" to="/OrderHistory" @click="history">Hello {{islogin.name}}</router-link>
                     </li>
                    <li>
                      	<router-link class="red-text" to="/mainpage" @click="logout">Logout</router-link>
                  	</li>
                  	<li>
                      <router-link class="red-text"  to="/Login">Login</router-link>
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
import {mapGetters,mapActions} from 'vuex'
import CategoriesBar from '@/components/CategoriesBar'
// import About from '@/pages/About'
export default {
  name: 'SearchBar',
  data () {
  	return {
  		token: ''
  	}
  },
  methods: {
  	...mapActions(['orderhistory']),
  	order () {
  		this.$store.dispatch('orderhistory',{
  			token: isActiveUser.userId
  		})
  	},
  	logout () {
  		getLogin: false,
  		this.$router.push('/mainpage')
  	},
  	history () {

  	},
  	showcart () {
  		this.$store.dispatch('showingCart',{
  			token: isActiveUser.userId
  		})
  		this.$router.push('/cartpage')
  	}
  },

  components: {
    CategoriesBar
  },
  computed: {
      ...mapGetters(['signupdetails','getLoginStatus']),
      islogin: function () {
        return this.signupdetails
      },

      isActiveUser: function () {
        return this.logindetails
      },

      getLogin : function () {
      	return this.getLoginStatus
      }
    }
}
</script>