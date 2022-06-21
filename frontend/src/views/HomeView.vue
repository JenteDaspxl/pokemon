<template>
  <body>
    <header>
    <img class="filter" src="../assets/filter.png" alt="FilterImage"  />

    </header>
    <div class="PokémonTitle">
      <h1>Pokédex</h1>
    </div>
    <div class="searchContainer">
      <div class="searchSection">
        <img class="search" src="../assets/searchIcon.png" alt="searchImage" />
        <input class="searchInput" type="text" placeholder="Pokémon zoeken">
      </div>
    </div>
    <div class="buttonContainer">
      <router-link class="team" to="/MyTeam">
        <h2>Mijn team</h2>
      </router-link>
      <router-link class="favorieten" to="/Favorit">
        <h2>Favorieten</h2>
    
      </router-link>
    </div>
    <div>
      <pokemonView v-for="(pokemon, index) in pokemons"
        v-bind:key="index"
        v-bind:pokemon="pokemon"/>
    </div>
    <pokemonView/>
  </body>
  
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import pokemonView from '../components/PokémonMainPageTemplate.vue'
import axios from "axios"
export default defineComponent({
  name: 'HomeView',
  components: {
    pokemonView,
    
  },
  data() {
    return {
      pokemons: []
    }
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapGetters(["_getPokemons"]),
  },
  async beforeMount() {
    await this.fetchPokemons();
    this.pokemons =  this._getPokemons();
  },
  async onMounted() {
    const pokemons = this._getPokemons();
    this.pokemons = pokemons;
  }
});



</script>

<style scoped>
  body {
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .filter {
    width: 2rem;
    height: 2rem;
  }

  .pokémonTitle {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  h1 {
    display:flex;
    font: bold;
  }

  .searchContainer {
    margin:2px;
  }

  .searchSection {
    background: rgb(230, 229, 229);
    display: flex;
    border-radius: 5%;
    
  }

  .search {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.1rem;
    
  }
  .searchInput {
    background: transparent;
    border: none;
    padding-left: 0.2rem;
  }

  .buttonContainer {
    display: flex;
    widows: 100%;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }

  .team {
    display: flex;
    align-items: flex-end;
    width: 50%;
    height: 5rem;
    border-radius: 5%;
    margin-top: 0.5rem;
    margin-right: 0.2rem;
    text-decoration: none;
    background: rgb(78,0,205);
    background: linear-gradient(90deg, rgba(78,0,205,1) 0%, rgba(105,13,204,1) 75%);    color: white;
  }

  .favorieten {
    display: flex;
    align-items: flex-end;
    width: 50%;
    height: 5rem;
    border-radius: 5%;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
    text-decoration: none;
    background: rgb(8,226,190);
    background: linear-gradient(90deg, rgba(8,226,190,1) 61%, rgba(0,212,255,1) 100%);    color:white
    
    
  }

  h2 {
    font-size: 1rem;
    padding-left: 0.6rem;
    text-decoration: none;
  }



  
</style>
