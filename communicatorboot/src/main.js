import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue3-cookies'

import Inicial from './components/Inicial.vue'
import NuevoJuego from './components/NuevoJuego.vue'
import Partida from './components/Partida.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const routes = [
  { path: '/', component: Inicial },
  { path: '/juego', component: NuevoJuego },
  { path: '/game', component: Partida },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const app = createApp(App)
app.use(VueAxios, axios)
app.use(VueCookies)
app.use(router)
app.mount('#app')