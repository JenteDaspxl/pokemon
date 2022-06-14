import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    pokemons: []
  },
  getters: {
    _getPokemons(state) {
      console.log(state.pokemons)
      return state.pokemons
      
    }
  },
  mutations: {
    _emptyPokemons(state) {
      state.pokemons = []
    },
    _addPokemons(state, payload) {
      state.pokemons = payload;
      console.log(state.pokemons)

      
    }
  },
  actions: {
    fetchPokemons: async function (state) {
      state.commit('_emptyPokemons');
      await axios.get('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
      .then(respone => {
        state.commit("_addPokemons", respone.data)
      })
      .catch((error) => console.log(error));
      }
      
  },
  modules: {
  }
})
