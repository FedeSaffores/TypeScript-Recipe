<script  setup lang="ts">
import {type Ingredient, type Recipe, type Step} from '@/Types/types';
import IngredientVue from '@/components/IngredientVue.vue';
 import StepsVue from '@/components/StepsVue.vue'; 
import { useRecipeStore } from '@/Store/store';
import {reactive, ref}from 'vue';
import {setUnits}from '@/Utils/utils'
import { valueToNode } from '@babel/types';


const name= ref('')
const duration=ref(0)
const picture=ref('')
const ingredientName=ref('')
const ingredientQty=ref('')
const ingredientUnit=ref('')
const stepText=ref('')
const ingredients=reactive<Ingredient[]>([])
const steps=reactive<Step[]>([])

function handlePictureChange(e:Event){
const files=(e.target as HTMLInputElement).files;
if(files?.length===1){
    const fileReader= new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload=function(){
        picture.value=fileReader.result as string;
    }
}
}
function handleClickIngredient(e:Event){

    e.preventDefault();
    if(
        ingredientName.value!==''&&
        ingredientQty.value!==''&&
        ingredientUnit.value!==''
    ){
        const ingredient: Ingredient={
            name:ingredientName.value,
            qty: ingredientQty.value,
            unit:setUnits(ingredientUnit.value)
        }
        ingredients.push(ingredient)
       
    }
}

function handleClickStep(e:Event){
  
    e.preventDefault();
    console.log(stepText)
    if(
        stepText.value!==''      
    ){
        const step: Step={
        instruction:stepText.value,
         
        }
        steps.push(step)
        console.log(step)
    }
}
function handleRemoveIngredient(e:Event, text:String){
e.preventDefault();
const index=ingredients.findIndex(item=>item.name!==text);
ingredients.splice(index,1)
}
function handleRemoveStep(e:Event, text:String){
e.preventDefault();
const index=steps.findIndex(item=>item.instruction!==text);
steps.splice(index,1)
}
function handleClickRecipe(e:Event){
    e.preventDefault();
    if(name.value!=="" &&
    duration.value>0 &&
    ingredients.length>0&&
    steps.length>0
    ){
        const recipe:Recipe={
            id:crypto.randomUUID(),
            name:name.value,
            duration:duration.value,
            ingredients:ingredients,
            steps:steps,
            picture:[picture.value],
        }
        useRecipeStore().add(recipe)
    }
}
</script>
<template>
    <div class="create">
        <form action="">
            <label for="name">Name of recipe</label>
            <input type="text" name="name" v-model="name"/>
            <label for="duration">Duration in min</label>
            <input type="number" name="duration" v-model="duration"/>
            <label for="picture">Picture</label>
            <input type="file" name="file" @change="handlePictureChange"/>
            <img :src="picture" width="100" alt=""/>
            <h3>Ingredientes</h3>
            <div>
                <label for="name-ingredient">Name of Ingredient</label>
                <input type="text" name="name-ingredient" v-model="ingredientName"/>
                <label for="">Quantity</label>
                <div class="col">
                    <input type="text" name="qty" id="" v-model="ingredientQty"/> 
                    <select v-model="ingredientUnit">
                        <option value="ml">Milliliters</option>
                        <option value="kl">Kilogramos</option>
                        <option value="l">Litros</option>
                        <option value="units">Units</option>
                    </select>
                </div>
                <div>
                 
                    <IngredientVue :ingredients= "ingredients" mode="edit" v-on:remove="handleRemoveIngredient"/>
                </div>
                <button @click="handleClickIngredient">Add Ingredient</button>
            </div>
            <h3>Steps</h3>
            <div>
                <textarea id="" cols="30" rows="10" v-model="stepText">
                </textarea>
                <div>
                <StepsVue :steps="steps" mode="edit" v-on:remove="handleRemoveStep" /> 
                </div>
                <button @click="handleClickStep">Add Step</button>
            </div> 
            <div>
                <button @click="handleClickRecipe">Add Recipe</button>
            </div>
        </form>
    
    </div>
  </template>
  <style scoped>
form{
    width:400px;
    margin:0 auto;
}
.col{
    display:flex;
    gap:5px;
}
input,textarea, select{
    font-size: 18px;
    padding:5px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 5px;
    border:solid 2px #dbaf79;
    margin: 5px 0;
    background-color: blanchedalmond;
    color:#754b18
}
button{
    border:solid 2px #0e9678;
    background-color: #0e9678;
    color:white;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 18px;
}
label{
    font-size: 16px;
    display: block;
}
@media (min-width:1024px){
    .create{
        min-height:100vh;
        display:flex;
        align-items: center;
    }
}
  </style>
  
  
  
  