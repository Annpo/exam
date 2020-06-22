<template>
  <div class="Motherboards">
    <md-list-item>
      <b>Название</b>
      <b>
        <code>Цена (руб.)</code>
      </b>
    </md-list-item>

    <Motherboard
      v-for="motherboard in motherboards"
      :key="motherboard.id"
      v-bind:name="motherboard.title"
      v-bind:link="motherboard.link"
      v-bind:payment="motherboard.payment"
    />

    <div class="Processors-Addblock">
      <md-button class="md-raised md-primary" @click="showDialog = true">Добавить</md-button>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Добавить материнскую плату</md-dialog-title>

        <md-field class="Dialog-Input">
          <label>Название</label>
          <md-input v-model="name" type="string"></md-input>
        </md-field>

        <md-field class="Dialog-Input">
          <label>Цена</label>
          <md-input v-model="payment" type="string"></md-input>
        </md-field>

        <md-field class="Dialog-Input">
          <label>Ссылка</label>
          <md-input v-model="link" type="string"></md-input>
        </md-field>

        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false">Close</md-button>
          <md-button class="md-primary" @click="addMotherboard(name,payment,link)">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import Motherboard from './mthboard'
export default {
  name: "Motherboards",
  data() {
    return {
      motherboards: [],
      showDialog: false
    };
  },
  props: {},
  components: {
    Motherboard
  },
  created() {
    this.getNewMotherboardsData();
  },
  methods: {
    async getNewMotherboardsData() {
      try {
        this.motherboards = await this.getAllMotherboards();
      } catch (error) {
        console.log(error);
      }
    },
    async addMotherboard(name, payment, link) {
      this.showDialog = false;
      let id = await this.getAllMotherboards();

      id = id.lenght + 1;

      const add = await fetch("http://localhost:3000/motherboard", {
        method: "POST",
        headers: {
          "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ id, title: name, payment, link })
      })
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => err);

      console.log(add);
      this.getNewMotherboardsData();
    },
    getAllMotherboards() {
      return fetch("http://localhost:3000/motherboard", {
        method: "GET"
      })
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => err);
    }
  }
};
</script>

<style scoped>
</style>
