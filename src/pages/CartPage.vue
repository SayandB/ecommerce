<template>
  <div>

  <div>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <!-- <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Top 10 Australian beaches</span>
              </v-flex>
            </v-layout>
          </v-container> -->
        </v-img>
        <v-card-title>
          <!-- description of the product -->
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>

        <!-- <v-card-actions>
          <v-btn flat color="orange">Buy Now</v-btn> -->
         
     
          <!-- <v-btn flat color="orange">Add to Cart</v-btn> -->
           <!--  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-btn slot="activator" color="primary" dark>Buy Now</v-btn>
      <v-card>
        <v-card-title class="headline">Payment Done</v-card-title>
        <v-card-text>Thanks for your order. The product will deliver as soon as possible.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer> -->
          <!-- <v-btn color="green darken-1" flat @click="dialog = false">OK</v-btn> -->
          <!-- <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn> -->
       <!--  </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout> -->
      
    <div>
    <div class="text-xs-center">
      <v-btn
        block color="secondary" dark
        @click="alert = !alert"
      >
        Buy Now
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      type="success"
      transition="scale-transition"
    >
      Your Payment Done.
    </v-alert>
  </div>
      </v-card>
    </v-flex>
  </v-layout>
</div>
  

</div>
</template>

<script>
export default {
  name: 'CartPage',
  data () {
      return {
        alert: true
      }
    }
}
</script>