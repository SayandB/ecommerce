<template>
  <v-container grid-list-xl>
    {{getSelectedProduct.name}}
    <v-layout v-bind="binding">
      <v-flex>
        <v-card>
          <v-card-text><span color="#424242">on</span></v-card-text>
           <v-btn color="#1E88E5">GetDetails</v-btn>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-text><span color="#424242">on</span></v-card-text>
         <v-btn color="#1E88E5" href="/DetailsPage">GetDetails</v-btn>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-text><span color="#424242">on</span></v-card-text>
           <v-btn color="#1E88E5">GetDetails</v-btn>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getSelectedProduct']),
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }
</script>