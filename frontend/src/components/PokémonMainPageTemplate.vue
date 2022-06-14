<template>
    <div class="pokemonDetails">
        <img class="pokemonImage" :src=url alt="pokemonImage">
        <div class="details">
            
            <p class="title">{{name}}</p>
            <p class="nr">Nr.{{id}}</p>
        </div>
        <div class="">
            <p :id="type.type.name" v-for="(type, index) in types"
            v-bind:key="index"
            v-on:vnodeMounted="setColor(type, index)"
            v-bind:type="type">
            {{type.type.name}}
            </p>
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
        currentColor: "rgb(69,146,195)",
        name: this?.pokemon?.name,
        id: this?.pokemon?.id,
        url: this?.pokemon?.sprites?.front_default,
        types: this?.pokemon?.types
        
    }
  },

  methods: {

    setColor(type:any) {
        if(type == "water") {
            this.currentColor = "rgb(69,146,195)"
        }else {
            this.currentColor = "rgb(123,98,163)"
        }
        console.log(type.type.name)

        document.getElementById(type.type.name)?.style.background == this.currentColor
        
    }
  }
  
});
</script>

<style scoped>
    .pokemonDetails {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 6rem;
        margin-bottom: 1rem;
        border-radius: 7px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .pokemonImage {
        width: 3rem;
        height: 3rem;
        padding: 0.8rem;
        padding-right: 1.5rem;

    }
    .title {
        display: flex;
        justify-content: left;
        font-weight: bold;
        margin: 0;
        width: auto;
    }
    .nr {
        display:flex;
        justify-content: left;
        margin: 0;
        color: rgb(145, 150, 152)
    }
    .details {
        display: flex;
        flex-direction: column;
        align-items: left;
        
    }

    .Water {
        background: blue;
    }

    


    
</style>