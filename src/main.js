import Vue from 'vue';
import App from './App.vue';
import { router } from "./router";
import store from "./store";
import moment from 'moment'
import axios from 'axios'

import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
/*
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)*/



Vue.config.productionTip = false
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('yyyy-MM-dd HH:mm')
  }
});



Vue.use(Toaster, {timeout: 5000})

  Vue.use(axios)
  new Vue({
    el: '#App',
    render: h => h(App),
    router,
    store
  });

  