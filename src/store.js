import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputFields: {
      headline: '',
      subheadline: '',
      bodyText: '',
      firstName: '',
      lastName: '',
      email: ''
    },
    pastStateVisible: false,
    currentStateVisible: false
  },
  mutations: {
    changeFieldState (state, payload) {
      state.inputFields[payload.fieldType] = payload.value
    },
    updateInputFields (state, inputFields) {
      state.inputFields = inputFields
    },
    pastStateVisibleValue (state, value) {
      state.pastStateVisible = value
    },
    currentStateVisibleValue (state, value) {
      state.currentStateVisible = value
    }
  },
  actions: {
    saveInLocalStorage ({ state }) {
      if (localStorage) {
        localStorage.setItem('inputFields', JSON.stringify(state.inputFields))
      }
    },
    readFromLocalStorge ({ commit }) {
      if (localStorage && localStorage.getItem('inputFields') && localStorage.getItem('inputFields') !== undefined) {
        commit('updateInputFields', JSON.parse(localStorage.getItem('inputFields')))
      }
    }
  }
})
