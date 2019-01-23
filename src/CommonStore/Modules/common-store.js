import commonApi from '@/api'

const state = {
  login : false,
  loginDetails : {},
  product : {}
}
const mutations = {
  LOGIN_DETAILS : (state,value) => {
    state.loginDetails = value
    // state.login = true
  },

  SIGNUP_DETAILS : (state,value) => {
    state.loginDetails = value
    // state.login = true
  },

  SELECT_PRODUCT : (state, product) => {
    state.product = product
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
  },
  getLogin: (state) => {
    return state.login
  }
}

export default{
  state, // for doing 
  mutations, //for updating variables
  actions,
  getters // for getting variables
}