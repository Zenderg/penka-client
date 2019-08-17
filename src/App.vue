<template>
  <v-app>
    <Header class="header"/>
    <Contacts />
    <router-view />
  </v-app>
</template>

<script>
    import Header from './components/core/Header';
    import Contacts from './components/core/Contacts/component';

    export default {
        name: 'App',
        components: {
            Header,
            Contacts,
        },
        data: () => ({
            //
        }),
    };
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 48px;
  right: 0;
  left: 0;
  margin: 0 auto;
}
</style>
