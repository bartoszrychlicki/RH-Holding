import { createApp } from 'vue';
import App from './App.vue';
//import 'bootstrap/dist/css/bootstrap';
import 'bootstrap';
import Popper from 'vue3-popper';

createApp(App).component('Popper', Popper).mount('#app');
