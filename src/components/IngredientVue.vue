 <script setup lang="ts">
 import type {Ingredient} from '@/Types/types';
import  {getUnits}  from '@/Utils/utils';



export interface IngredientsViewProps {
ingredients?: Partial<Ingredient>[];
mode: 'view'|'edit';
onRemove?:(e: Event,text:string)=>void;

 };
 console.log( "aaaaa") 
// eslint-disable-next-line vue/no-setup-props-destructure
const {ingredients, mode, onRemove} = defineProps<IngredientsViewProps>();

</script>
<template>
    <ul>
    <li v-for="ingredient in ingredients" v-bind:key="ingredient.name">
        <div class="col">
            <span>
                {{ ingredient.name }}-
                {{ ingredient.qty}}-
                {{getUnits(ingredient.unit ?? 0)}}
            </span>
            <button v-if="mode === 'edit' &&  
            onRemove"
            @click="(e) =>onRemove?.(e, ingredient.name!)" >
                Remove</button>
        </div>
    </li>
    </ul>
</template>
<style scoped>
ul{
    margin:10px 0;
}
.col{
    display:flex;
}
li{
    padding:5px 0;
}
span{
    flex:1;
}
button{
background-color: transparent;
color:#754b18;
padding:5px;
border:solid 1px #dbaf79;
border-radius: 3px;
cursor:pointer;
}
button:hover{
    background-color: red;
    color:white
}



</style>