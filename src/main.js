import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
import VueRouter from 'vue-router';
import routes from './router.config.js';
Vue.use(VueRouter);
const router=new VueRouter({
    routes:routes,
    mode:'history'
});
new Vue({
  el: '#app',
  render: h => h(App),
    router
});
