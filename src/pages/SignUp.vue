<template>
  <div>
  <v-container>
    <v-layout row class="text-md-center" color="#29B6F6">

      <v-flex xs3 color="#29B6F6">
       
      </v-flex>
      <v-card height="500px" class="text-md-center"></v-card>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>SignUp</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="name" label="name" v-model="name"></v-text-field>
            <v-text-field prepend-icon="email" name="Email" label="emailId" v-model="emailId"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" v-model="password"></v-text-field>
            <!-- <v-text-field prepend-icon="lock" name="ConfirmPassword" label="ComfirmPassword" type="password"></v-text-field> -->
            <v-card-actions>
              <v-btn primary large block color="#29B6F6" @click="signup">SignUp</v-btn>
            </v-card-actions>
            <p>{{signupdetails}}</p> 
            </v-form>
          </v-card>
        </v-container>
      </v-flex>

    </v-layout>
  </v-container>
</div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
  name: 'SingUpPage',
  data () {
    return {
      name : '',
      emailId : '',
      password : ''
    }
  },
   methods: {
    ...mapActions(['signup']),
    signup() {
      this.$store.dispatch('signup',{
        name : this.name,
        emailId : this.emailId,
        password : this.password
      })
    },
  },
  computed: {
    ...mapGetters(['signupdetails'])
  }
}
</script>