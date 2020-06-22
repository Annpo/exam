import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import homePage from '@/components/main';

//Подключаем matherial ui 
Vue.use(VueMaterial);
Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: homePage },
  ]
});



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
