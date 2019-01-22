import commonApi from '@/api'

const state = {
    loginDetails : null,
    signupDetails : null,
    product : []
}
const mutations = {
    LOGIN_DETAILS : (state,value) => {
        state.loginDetails = value
    },

    SIGNUP_DETAILS : (state,value) => {
      state.signupDetails = value
    },

    SELECT_PRODUCT : (state, product) => {
      state.product = product
    }
}
const actions = {
  login ({commit},data) {
    commonApi.postDataViaApi('/user/login',data,
      (response) => {
          commit('LOGIN_DETAILS',response.body)
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
          commit('SIGNUP_DETAILS',response.body)
      },
      (error) => {
          console.log(error)
          commit('SIGNUP_DETAILS',[])
      }
    )
  },

  selectProduct ({commit},product) {
    commit('SELECT_PRODUCT', product)
  }
}
const getters = {
  userdetails : (state) => {
    return state.loginDetails
  },

  signupdetails : (state) => {
    return state.signupDetails
  },

  getSelectedProduct: (state) => {
    return state.product
  }
}

export default{
  state, // for doing 
  mutations, //for updating variables
  actions,
  getters // for getting variables
}