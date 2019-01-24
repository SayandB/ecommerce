import commonApi from '@/api'

const state = {
  login : false,
  loginDetails: {},
  product : {},
  addResponse: null,
  orderResponse: null,
  cartDetails: null,
  orderhistory:null
}
const mutations = {
  LOGIN_DETAILS : (state,value) => {
    state.loginDetails = value,
    state.login = true
  },

  SIGNUP_DETAILS : (state,value) => {
    state.loginDetails = value,
    state.login = true
  },

  SELECT_PRODUCT : (state, product) => {
    state.product = product
  },

ADDED_RESPONSE : (state,value) => {
  state.addResponse = value
},

ORDER_RESPONSE : (state,value) => {
  state.orderResponse = value
},

CART_DETAILS : (state, value) => {
  state.cartDetails = value
},

ORDER_HISTORY : (state,value) => {
    state.orderhistory = value
}

}

const actions = {
  login ({commit}, data) {
    commonApi.postDataViaApi('/user/login',data,
      (response) => {
          commit('LOGIN_DETAILS', response.body)
      },
      (error) => {
          console.log(error)
          commit('LOGIN_DETAILS',[])
      }
    )
  },

  signup ({commit},data) {
    commonApi.postDataViaApi('/user/signup',data,
      (response) => {
          commit('LOGIN_DETAILS',response.body)
      },
      (error) => {
          console.log(error)
          commit('LOGIN_DETAILS',[])
      }
    )
  },

  selectProduct ({commit},product) {
    commit('SELECT_PRODUCT', product)
  },

  deleteProduct ({commit},{userId, productId}){
    commonApi.deleteDataViaApi(`/cart/removeProduct?userId=${userId}&productId=${productId}`,
      (response) => {
        commit('CART_DETAILS',response.body)
      },
      (error) => {
        console.log(error)
        commit('CART_DETAILS',[])
      }
    )
  },

  showingCart ({commit},{userId}){
    commonApi.getDataViaApi(`/cart/showCart?token=${userId}`,
      (response) => {
        commit('CART_DETAILS',response.body)
      },
      (error) => {
        console.log(error)
        commit('CART_DETAILS',[])
      }
      )
  },

  buyProduct ({commit},{userId}){
    commonApi.deleteDataViaApi(`/cart/buy?token=${userId}`,
      (response) => {
        commit('ORDER_RESPONSE',response.body)
      },
      (error) => {
        console.log(error)
        commit('ORDER_RESPONSE',[])
      }
    )
  },

addingtocart ({commit},data) {
    commonApi.postDataViaApi('/cart/addCart',data,
      (response) => {
        commit('ADDED_RESPONSE',response.body)
      },
      (error) => {
        console.log(error)
        commit('ADDED_RESPONSE',[])
      }
      )
  },

  orderhistory ({commit},data) {
    commit('ORDER_HISTORY',data)
  },

  allProducts ({commit},data) {
    commonApi.postDataViaApi('/inventory/productDetails',data,
      (response) => {
        commit('SAME_PRODUCTS',response.body)
      },
      (error) => {
        console.log(error)
        commit('SAME_PRODUCTS',[])
      }
      )
  }
}
const getters = {
  logindetails : (state) => {
    return state.loginDetails
  },

  signupdetails : (state) => {
    return state.loginDetails
  },

  getSelectedProduct: (state) => {
    debugger
    return state.product
  },

  getCartDetails : (state) => {
    return state.cartdetails
  },

  getOrderHistory : (state) => {
    return state.orderhistory
  },
  getLoginStatus : (state) => {
    return state.login
  }
}

export default{
  state, // for doing 
  mutations, //for updating variables
  actions,
  getters // for getting variables
}