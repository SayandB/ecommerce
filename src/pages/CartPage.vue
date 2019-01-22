<template>
  <div>
  <search-bar></search-bar>
  <div>This is cart page</div>
</div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
export default {
  name: 'CartPage',
  components : {
    SearchBar
  }
  data () {
      return {
        alert: true
      }
    }
}
</script>