<template>
  <div>
    
    <div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Ecommerce</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-flex xs12 sm6 md3>
          <v-text-field
            label="Solo"
            placeholder="Search"
            solo
          ></v-text-field>
        </v-flex>
     <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn>
       <v-btn icon href="/CartPage" target="_blank">
         Cart
      </v-btn>
    </v-btn>
    <v-btn>
       <v-btn icon href="/Login" target="_blank">
         Sign
      </v-btn>
  </v-btn>
    <!-- <v-toolbar-items class="hidden-sm-and-down">
    <v-btn flat>AddToChart</v-btn> -->
     
    </v-toolbar-items>
  </v-toolbar>
  </div>
  <router-view/>
  </div>
 <!-- <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>-->
</template>
<script>
// import MainPage from '@/pages/MainPage'
// import DetailsPage from '@/pages/DetailsPage'
export default {
  name: 'App',
  components: {
    // MainPage,
    // LoginPage,
    // DetailsPage
  },
//   data () {
//     return {
    
//    }
}
</script>
