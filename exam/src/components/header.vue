<template>
  <div class="Header">
    <md-content class="md-primary">
      <div class="md-primary">
        <div class="Header-Title">
          <img src="../assets/logo.png" alt />
          <h1>Каталог комплектуюших ПК</h1>
        </div>

        <md-tabs class="md-primary" md-alignment="centered">
          <md-tab id="tab-home" md-label="Главная" @click="setPageMode(0)"></md-tab>
          <md-tab id="tab-prc" md-label="Процессоры" @click="setPageMode(1)"></md-tab>
          <md-tab id="tab-mthboards" md-label="Материнские плат" @click="setPageMode(2)"></md-tab>
        </md-tabs>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    changedMode: Number,
    setPageMode: Function
  }
};
</script>

<style scoped>
.Header {
  font-family: "Lora", sans-serif;
}
.Header-Title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Header-Title img {
  max-width: 81px;
  object-fit: cover;
  background: beige;
  border-radius: 19px;
}

h1 {
  font-style: 2em;
  text-align: center;
  margin: 0;
  margin-left: 10px;
  padding: 20px 0;
}

@media screen and (max-width: 570px) {
  h1 {
    font-size: 1.5em;
  }

  .Header-Title img {
    max-width: 50px;
  }
}

@media screen and (max-width: 350px) {
  h1 {
    font-size: 1.2em;
  }

  .List-Item button {
    font-size: 0.3em;
  }
}
</style>
