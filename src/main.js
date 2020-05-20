import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

import App from './App.vue'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')