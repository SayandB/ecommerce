<template>
  <div>This is details page</div>
</template>

<script>
import {mapGetters} from 'vuex'
  export default {
    name: 'Details-Page',
    computed: {
      ...mapGetters(['userdetails', 'getSelectedProduct']),
      isProductDetails: function () {
        return this.getSelectedProduct
      }
    }
  }
</script>