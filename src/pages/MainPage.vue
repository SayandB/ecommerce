<template>
  <div class="main">
    <search-bar></search-bar>
    <ad-bar></ad-bar>
    <div class="row">
      <div class="col s12 m4" v-for="(product,index) in getProducts" v-bind:key="index">
        <div class="card" @click="productDetails(product)">
          <div class="card-image">
            <img :src="product.imageUrl">
            <a class="btn-floating halfway-fab waves-effect waves-light red">
              <i class="material-icons">add</i>
            </a>
          </div>
          <div class="card-content">
            <span class="card-title" style>{{product.name}}</span>
            <span class="Price" style>&#x20b9;{{product.price}}</span>
            <span class="Rating" style>{{product.productRating}}</span>
            <!-- <p>I am a very simple card. I am good at containing small bits of information. I am convenient because  I require little markup to use effectively.</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  /*margin-left: 100px;
  margin-right: 100px;*/
}
.Rating {
  padding-left: 100px;
}
.card {
  margin-top: 30px;
  padding: 10px;
}
.card-image img {
  height: 350px;
  max-height: 100%;
  max-width: 100%;
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import SearchBar from "@/components/SearchBar";
import AdBar from "@/components/AdBar";
export default {
  name: "MainPage",
  components: {
    SearchBar,
    AdBar
  },
  computed: {
    ...mapGetters(["showProduct", "getLogin"]),
    getProducts() {
      return this.showProduct;
    }
  },
  methods: {
    ...mapActions(["selectProduct"]),
    productDetails(product) {
      console.log(product);
      this.$store.dispatch("selectProduct", product);
      this.$router.push('/detailspage');
    },
    cardDetails: function() {
      this.$router.push("/detailspage");
    }
  }
};
</script>