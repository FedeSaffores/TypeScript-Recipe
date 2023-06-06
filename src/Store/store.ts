import { reactive, ref } from "vue";
import {defineStore} from"pinia";
import type { Recipe } from "@/Types/types";

export const useRecipeStore= defineStore('recipeStore',()=>{
    const items:Recipe[] = reactive([]);
    const currentRecipe:Partial<Recipe>=reactive({});

    function add(item:Recipe){
        items.push(item);
    }
    function loadRecipe(id:string){
        const item= items.find(x=>x.id===id);
        if(item){
            currentRecipe.id=id;
            currentRecipe.duration=item.duration;
            currentRecipe.ingredients=[...item.ingredients];
            currentRecipe.steps=[...item.steps];
            currentRecipe.picture=item.picture;
            currentRecipe.name=item.name;
        }
    }
        function closeRecipe(){
            currentRecipe.id=undefined;
            currentRecipe.duration=undefined;
            currentRecipe.ingredients=undefined;
            currentRecipe.steps=undefined;
            currentRecipe.picture=undefined;
            currentRecipe.name=undefined;
        }
  
    return {add,items,currentRecipe, loadRecipe,  closeRecipe}

})