<template>
  <v-container class="d-lg-flex justify-space-between align-center">
    <span class="logo">Logo</span>
    <div class="menu d-flex">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">about</router-link>
      <router-link class="link" to="/projects">projects</router-link>
    </div>
  </v-container>
</template>

<script>
    export default {
        name: 'Header',
    };
</script>

<style lang="scss" scoped>
  .menu {
    .link {
      margin-right: 115px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
