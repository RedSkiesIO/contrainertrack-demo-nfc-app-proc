<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',

  data() {
    return {};
  },

  beforeCreate() {

  },

  beforeMount() {

  },

  updated() {
    //
  },

  methods: {
    log(payload) {
      console.log(payload);
    },
  },
};
</script>

<style>
</style>
