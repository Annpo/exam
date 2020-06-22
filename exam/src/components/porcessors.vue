<template>
  <div class="Processors">
    <md-list-item>
      <b>Название</b>
      <b>
        <code>Цена (руб.)</code>
      </b>
    </md-list-item>

    <Processor
      v-for="processor in processors"
      :key="processor.id"
      v-bind:name="processor.title"
      v-bind:link="processor.link"
      v-bind:payment="processor.payment"
    />

    <div class="Processors-Addblock">
      <md-button class="md-raised md-primary" @click="showDialog = true">Добавить</md-button>

      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Добавить процессор</md-dialog-title>

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
          <md-button class="md-primary" @click="addProcessor(name,payment,link)">Save</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import Processor from "./proc";
export default {
  name: "Processors",
  data() {
    return {
      processors: [],
      showDialog: false
    };
  },
  props: {},
  components: {
    Processor
  },
  created() {
    this.getNewProcessorsData();
  },
  methods: {
    async getNewProcessorsData() {
      try {
        this.processors = await this.getAllProcessors();
      } catch (error) {
        console.log(error);
      }
    },
    async addProcessor(name, payment, link) {
      this.showDialog = false;
      let id = await this.getAllProcessors();

      id = id.lenght + 1;

      const add = await fetch("http://localhost:3000/processors", {
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
      this.getNewProcessorsData();
    },
    getAllProcessors() {
      return fetch("http://localhost:3000/processors", {
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
li {
  list-style-type: none;
}
</style>
