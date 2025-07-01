// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Create app instance
const app = createApp(App);

// Register router and BootstrapVue3
app.use(router);
app.use(BootstrapVue3);

// Mount app
app.mount('#app');
