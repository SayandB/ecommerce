<template>
  <div> 
    <div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-btn icon href="/MainPage" target="_blank">
         Home
      </v-btn>
    <v-toolbar-title>LocalHost:8080.com</v-toolbar-title>
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
    </v-toolbar-items>
  </v-toolbar>
  </div>
  <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  },
}
</script>
