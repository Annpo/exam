<template>
  <div class="Main">
    <Header v-bind:changedMode="changedMode" v-bind:setPageMode="setMode"/>

    <Mainpage v-if="changedMode === 0" v-bind:setPageMode="setMode" />
    <Processors v-if="changedMode === 1" v-bind:setPageMode="setMode" />
    <Motherboards v-if="changedMode === 2" v-bind:setPageMode="setMode" />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/header";
import Processors from "../components/porcessors";
import Motherboards from "../components/motherboards";
import Footer from "../components/foorter";
import Mainpage from "../components/mainPage";
export default {
  name: "Main",
  // в зависимости от мода выбираем компонент
  data: () => ({
    changedMode: 0
  }),
  props: {},
  components: {
    Header,
    Processors,
    Motherboards,
    Footer,
    Mainpage
  },
  methods: {
    setMode(mode) {
      this.changedMode = mode;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
</style>
