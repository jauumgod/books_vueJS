import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
createApp(App).use(VueAxios, axios).mount('#app')
