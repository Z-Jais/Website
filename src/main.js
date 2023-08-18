import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import hljs from 'highlight.js';
import frFR from '@kangc/v-md-editor/lib/lang/fr-FR';

const routes = [
    {path: '/', component: () => import('./views/HomeView.vue')},
    {path: '/episodes', component: () => import('./views/EpisodesView.vue')},
    {path: '/anime/:uuid', component: () => import('./views/AnimeDetailView.vue')},
    {path: '/simulcast/:uuid', component: () => import('./views/SimulcastView.vue')},
    {path: '/privacy', component: () => import('./views/CGUView.vue')},
    {path: '/404', component: () => import('./views/404View.vue')},
    {path: '/:catchAll(.*)', redirect: '/404'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

VMdEditor.use(githubTheme, {
    Hljs: hljs,
});
VMdEditor.lang.use('fr-FR', frFR);

VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

const app = createApp(App)
app.use(VMdEditor)
app.use(VMdPreview)
app.use(router)
app.mount('#app')
