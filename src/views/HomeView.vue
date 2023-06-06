<script  setup lang="ts">
import { useRecipeStore } from '@/Store/store';
import IngredientVue from '@/components/IngredientVue.vue'
import StepsVue from '@/components/StepsVue.vue';
import { computed } from 'vue';
import "@/assets/base.css"

const modalStyles=computed(()=>{
 return {display:useRecipeStore().currentRecipe.id!==undefined? "block":"none"}
})
function handleClick(e:Event, id:string){
  e.preventDefault();
  useRecipeStore().loadRecipe(id);
}
function handleCloseModal(){
  useRecipeStore().closeRecipe();
}
</script>
<template>
  <div class="container">
    <div class="item">
      <ul>
        <li v-for="item in useRecipeStore().items" v-bind:key="item.id">
        <a href="#" @click="(e)=> handleClick(e, item.id)">
        <img :src="item.picture[0]" width="200" alt=""/>
      {{ item.name }}
      </a>
        </li>
      </ul>
    </div>
  </div>
  <main :style="modalStyles" v-if="useRecipeStore().currentRecipe.id">
<div> 
  <button @click="handleCloseModal">
Close
  </button>
</div>
<div class="content">
<h1>{{ useRecipeStore().currentRecipe.name }}</h1>
<div class="ingredients">

<IngredientVue :ingredients ="useRecipeStore().currentRecipe.ingredients ?? []" mode="view"/>
</div>
<div class="steps">
<StepsVue :steps="useRecipeStore().currentRecipe.steps ?? []" mode="view"/>
</div>
</div>
  </main>
</template>
<style scoped>
.item{
height:100vh;
}
.item ul{
list-style:none;
padding:0;
margin:0;
display:flex;
flex-wrap:wrap;
}
.item a{
display:block;
padding:10px;
display:flex;
flex-direction:column;
border-radius: 5px;
text-align:center;
font-size: 22px;
}
.item a:hover{
  background-color: white;
  color: black;
}
.item a img{
  width: 500px;
  height: 300px;
  object-fit: cover;
  background-color: black;
}
main{
  padding: 20px;
  position: absolute;
  width:100%;
  top:0;
  height: 100vh;
  background-color: bisque;
}
main .content{
  width: 500px;
  margin:0 auto;
}
main .content h1 {
font-weight: border;
}
main .content h1 {
text-align:center
}
main .content h3{
  text-align: center;
}
h1{
  font-size: 3rem;
}

</style>
