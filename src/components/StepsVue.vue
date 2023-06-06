<script setup lang="ts">
import type {Step} from '@/Types/types';


export interface StepsViewProps {
steps?: Partial<Step>[];
mode: 'view'|'edit';
onRemove?:(e: Event,text:string)=>void;

};

// eslint-disable-next-line vue/no-setup-props-destructure
const {steps, mode, onRemove} = defineProps<StepsViewProps>();

</script>
<template>
   <ol>
   <li v-for="step in steps" v-bind:key="step.instruction">
       <div class="col">
           <span>
               {{ step.instruction }}
           </span>
           <button v-if="mode === 'edit' &&  
           onRemove"
           @click="(e) =>onRemove?.(e, step.instruction!)" >
               Remove</button>
       </div>
   </li>
   </ol>
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