import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    pokemons: [],
    favorits: []
  },
  getters: {
    _getPokemons(state) {
      console.log(state.pokemons)
      return state.pokemons
    },

    _getFavorits(state) {
      return state.favorits;
    }
    
  },
  mutations: {
    _emptyFavorits(state) {
      state.favorits = []
    },
    _emptyPokemons(state) {
      state.pokemons = []
    },
    _addPokemons(state, payload) {
      state.pokemons = payload;
      console.log(state.pokemons)  
    },
    _addFavorit(state, payload) {
      state.pokemons += payload;
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
    },
    
      
  },
  modules: {
  }
})
