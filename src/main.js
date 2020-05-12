import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import VueResource from 'vue-resource';

import App from './App.vue'

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')