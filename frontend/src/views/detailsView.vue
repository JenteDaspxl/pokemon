<template>
    <body>
        <div>
            
        </div>
    </body>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { mapActions, mapGetters } from 'vuex';
export default defineComponent ( {
    name: 'detailsView',
    data() {
        return {
            id: this.$route.params.id,
            pokemon: [],
            
        }
            
    },
    methods: {
    ...mapActions(["fetchPokemons"]),
    ...mapGetters(["_getPokemons"]),
    },
    async beforeMount() {
    await this.fetchPokemons();
    const pokemons =  this._getPokemons();
    this.pokemon = pokemons[this.id[0]]
    console.log("gelukt");
    },
    
    

})

</script>