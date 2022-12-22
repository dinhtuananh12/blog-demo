import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { makeServer } from './api/mock'
import JwPagination from 'jw-vue-pagination';
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.component('jw-pagination', JwPagination);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

makeServer()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


