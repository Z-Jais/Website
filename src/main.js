import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

const routes = [
    {path: '/', component: () => import('./views/HomeView.vue')},
    {path: '/episodes', component: () => import('./views/EpisodesView.vue')},
    {path: '/privacy', component: () => import('./views/CGUView.vue')},
    {path: '/anime/:uuid', component: () => import('./views/AnimeDetailView.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
