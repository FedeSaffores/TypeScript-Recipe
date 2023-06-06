<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
      <nav>
        <RouterLink to="/">Home View</RouterLink>
        <br/>
        <RouterLink to="/create">Create View</RouterLink>
      </nav>
  <RouterView />
</template>
<style scoped>
nav{
  padding:0;
  margin:0;
  display:flex;
}
nav a{
  display:block;
  padding:10px;
}
</style>

