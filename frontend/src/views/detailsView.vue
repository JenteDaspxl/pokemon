<template>
    <body>
        <header>
            <p>terug</p>
            <div class="imageDiv">
                <img class="setFavorit" src="../assets/favoritIcon.png" alt="setFavorit">
            </div>
            
        </header>
        <div class="pokemonName">
            <h1>{{JSON.parse(JSON.stringify(this.pokemonDetails)).name}}</h1>
        </div>
        <div>
            <img class="pokemonImage" :src=this.pokemon.sprites.front_default alt="pokemonImage">
        </div>
        <div class="about">
            <p class="aboutTitle">ABOUT</p>
            <div class="details">
                <p>{{description}}</p>
                <div class="type">Nummer</div>
                <div class="type">Nummer</div>
                <div class="type">Hoogte</div>
                <div class="type">Gewicht</div>
                <div class="type">Categorie</div>
                <div class="type">Geslacht</div>
                <div class="type">Vaardigheden</div>

            </div>
        </div>
    </body>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent} from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default defineComponent ( {
    name: 'detailsView',
    data() {
        return {
            id: this.$route.params.id,
            pokemon: [],
            pokemonDetails: {},
            pokemonDescription: {},
            description: ""
            


            
            
        }
            
    },
    methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapActions(["fetchPokemonDetails"]),
    ...mapGetters(["_getPokemons"]),
    ...mapGetters(["_getPokemonDetails"]),

    fetchPokemonDescription: async function() {
      await axios.get(JSON.parse(JSON.stringify(this.pokemonDetails)).species.url)
      .then(response => {
        this.pokemonDescription = response.data
        this.description = JSON.parse(JSON.stringify(this.pokemonDescription)).flavor_text_entries[0].flavor_text
        console.log(this.description);
      })
      .catch((error) => console.log(error));
    },

    },
    async beforeMount() {
        const pokemons =  this._getPokemons();
        this.pokemon = pokemons[this.id[0]];

        await this.fetchPokemonDetails(parseInt(this.id[0]) + 1);
        this.pokemonDetails = this._getPokemonDetails();
        console.log(this.pokemonDetails);
        
        await this.fetchPokemonDescription()
       
    },

    
    
    

})

</script>

<style scoped>
    body {
        background: lightgreen;
        padding: 0.8rem;
    }
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .imageDiv {
        display: flex;
        align-items: center;
    }
    .setFavorit {
        height: 1rem;
    }

    .pokemonName {
        display: flex;
        justify-content: left;
        padding-top: 00.8rem;
    }

    h1 {
        color: white;
        font-weight: bold;
    }

    .pokemonImage {
        height: 20rem;
    }
    .about {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 0.7rem;
    }
    .aboutTitle {
        display: flex;
    }
    .details {
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        background-color: white;
        justify-content: left;
        color: black;
        border-radius: 7px;
        padding: 0.5rem;
        text-align: left;
    }
    .type {
        padding-top: 0.6rem;
    }
    
</style>