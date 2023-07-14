import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import LinkListComponent from "./pages/linkList.vue"
import HistoryComponent from "./pages/history.vue"
import Rank2022Component from "./pages/rank2022.vue"

const LINKLIST = { template: '<div>linkList</div>' }

const routes = [
  { path: '/linkList', component: LinkListComponent },
  { path: '/rank2022', component: Rank2022Component },
  { path: '/', component: HistoryComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
