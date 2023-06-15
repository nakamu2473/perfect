import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainComponent from "./pages/linkList.vue"

const LINKLIST = { template: '<div>linkList</div>' }

const routes = [
  { path: '/linkList', component: MainComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
