<template>
<div id="app">
  <Header />
  <router-view />
</div>
</template>

<style lang="scss">
@import './assets/css/main';
body {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #0F1A27;
}
</style>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
