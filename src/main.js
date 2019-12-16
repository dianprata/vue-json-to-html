import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Axios from 'axios';

Vue.component('date-picker', DatePicker);
Vue.component('v-select', vSelect);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
