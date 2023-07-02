import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import LinkListComponent from "./pages/linkList.vue"
import HistoryComponent from "./pages/history.vue"

const LINKLIST = { template: '<div>linkList</div>' }
const HISTORY = { template: '<div>history</div>' }

const routes = [
  { path: '/linkList', component: LinkListComponent },
  { path: '/history', component: HistoryComponent },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount("#app")
