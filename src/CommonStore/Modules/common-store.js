import commonApi from '@/api'

const state = {
  login : false,
  loginDetails : {},
  product : {},
  addResponse: null,
  orderResponse: null,
  cartDetails: {},
  products: [],
  orderHistory: []
}
const mutations = {
  ADDED_RESPONSE : (state,value) => {
    state.addResponse = value
  },
  
  ORDER_RESPONSE : (state,value) => {
    state.orderResponse = value
  },
  
  CART_DETAILS : (state, value) => {
    state.cartDetails = value
  },
  LOGIN_DETAILS : (state,value) => {
    state.loginDetails = value
    state.login = true
  },

  SIGNUP_DETAILS : (state,value) => {
    state.loginDetails = value
    state.login = true
  },

  SELECT_PRODUCT : (state, product) => {
    state.product = product
  },
  GET_PRODUCTS : (state, products) => {

    state.products = products
  },
  GET_ORDER_HISTORY : (state, data) => {
    state.orderHistory = data
  }
}
const actions = {
  login ({commit}, {data, success, failure}) {
    commonApi.postDataViaApi('/user/login', data,
      (response) => {
        if(response.body.status)  {
          commit('LOGIN_DETAILS', response.body)
          success(response)
        }else{
          commit('LOGIN_DETAILS', [])
          failure(response)
        }
      },
      (error) => {
        failure(error)
        commit('LOGIN_DETAILS',[])
      }
    )
  },

  signup ({commit}, {data, success, failure}) {
    commonApi.postDataViaApi('/user/signup',data,
      (response) => {
        if(response.body.status)  {
        commit('SIGNUP_DETAILS',response.body)
        success(response)
      }else{
        commit('LOGIN_DETAILS', [])
        failure(response)
      }
      },
      (error) => {
          console.log(error)
          commit('SIGNUP_DETAILS',[])
      }
    )
  },

  selectProduct ({commit}, product) {
    commit('SELECT_PRODUCT', product)
  },
  showProduct({commit}, data) {
    debugger
    commonApi.getDataViaApi(`/search/searchByName?querypara=${data}`,
    (response) => {
      debugger
      commit('GET_PRODUCTS', response.body.productList)
    },
    (error) => {
      console.log(error)
      commit('GET_PRODUCTS',[])
  })
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
  orderHist ({commit}, data) {
    commonApi.postDataViaApi('/user/getOrderHistory',data,
    (response) => {
      commit('GET_ORDER_HISTORY' ,response.body)
    },
    (error) => {
      console.log(error)
      commit('GET_ORDER_HISTORY', [])
    })
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
  }
}
const getters = {
  logindetails : (state) => {
    return state.loginDetails
  },

  loginStatus : (state) => {
    return state.login
  },

  getSelectedProduct: (state) => {
    return state.product
  },
  getLogin: (state) => {
    return state.login
  },
  showProduct: (state) => {
    return state.products
  },
  getCartDetails : (state) => {
    return state.cartdetails
  },
  getOrderHist : (state) => {
    return state.orderHistory
  }
}

export default{
  state, // for doing 
  mutations, //for updating variables
  actions,
  getters // for getting variables
}