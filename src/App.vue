<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/projects">projects</router-link>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
