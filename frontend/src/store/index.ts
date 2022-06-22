import { createStore } from 'vuex';
import { pokemonDetails } from '@/types';
import axios from "axios";

export default createStore({
  state: {
    pokemons: [],
    favorits: [],
    pokemonDetails: {}
  },
  getters: {
    _getPokemons(state) {
      return state.pokemons
    },
    _getFavorits(state) {
      return state.favorits
    },
    _getPokemonDetails(state) {
      
      return state.pokemonDetails
    }
    
  },
  mutations: {
    _emptyFavorits(state) {
      state.favorits = []
    },
    _emptyPokemons(state) {
      state.pokemons = []
    },
    _emptyPokemonsDetails(state) {
      state.pokemonDetails = []
    },
    _addPokemons(state, payload) {
      state.pokemons = payload;
    },
    _addFavorit(state, payload) {
      state.pokemons += payload;

    },
    _addPokemonDetails(state, payload) {
      state.pokemonDetails = payload;
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
    fetchPokemonDetails: async function (state, payload) {
      
      state.commit('_emptyPokemons');
      await axios.get('https://pokeapi.co/api/v2/pokemon/' + payload)
      .then(respone => {
        state.commit("_addPokemonDetails", JSON.parse(JSON.stringify(respone.data)))
        
      })
      .catch((error) => console.log(error));
    },
    
      
  },
  modules: {
  }
})
