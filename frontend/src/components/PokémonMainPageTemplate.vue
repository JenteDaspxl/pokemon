<template>
    <div class="pokemonDetails">
        <img class="pokemonImage" :src=url alt="pokemonImage">
        <div class="details">
            <div class="test">
                <div class="name">
                {{name}}
                </div>
                <p class=id>nr: {{id}}</p>
            </div>
            <div class="abilities">
                <div class="ability" v-for="(type, index) in types"
                v-bind:key="index"
                v-bind:type="type">
                <div class="abilityName" v-bind:id="type.type.name">{{type.type.name}}
                </div>
                </div>
                <router-link :to="`/detailsView/${id -1}`" ><img class="imageIcon" src="../assets/detailIcon.png"/></router-link>
            </div>
            
        </div>
    </div>
</template>




<script lang="ts">
import { defineComponent } from 'vue';
require('../css/typeBackground.css');

export default defineComponent({
  name: 'pokemonView',
  props: ["index", "pokemon"],
  data() {
    return {
        name: this?.pokemon?.name,
        id: this?.pokemon?.id,
        url: this?.pokemon?.sprites?.front_default,
        types: this?.pokemon?.types,

        post: {
            id: 1,
        }
        
    }
  },

  methods: {
  }
  
});
</script>

<style scoped>
    .pokemonDetails {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
        height: 6rem;
        margin-bottom: 1rem;
        border-radius: 7px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .pokemonImage {
        display: flex;
        width: 3rem;
        height: 3rem;
        padding: 0.8rem;
        padding-right: 1.5rem;
    }
    .details {
        display: flex;
        width: 100%;
        justify-content: space-between;
                
    }
    .test {
        display: flex;
        flex-direction: column;
    }
    .name {
        display: flex;
        padding: 0.5rem;
        padding-bottom: 0;
        margin: 0;
        font-weight: bold;
        color: black;
    }
    .id {
        padding-left: 0.5rem;
        margin: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-top: 0.3rem;
        color: rgb(173, 176, 178);
    }
    
    .abilities {
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
    }

    .ability {
        padding-right: 0.4rem;

    }
    .abilityName {
        border-radius: 20%;
        padding: 5px;
        font-size: 0.8rem;
        color: white


    }
    #grass {
        background: rgb(149, 194, 77);
    }
    #water {
        background: rgb(69, 146, 195);
    }
    #normal {
        background: rgb(163, 172, 174);
    }
    #poison {
        background: rgb(186, 126, 200);
    }
    #fire {
        background: rgb(253, 125, 37);
    }

    .detailImage {
        width: 0.25rem;
    }
    .imageIcon {
        height: 0.4rem;
    }


    


    
</style>