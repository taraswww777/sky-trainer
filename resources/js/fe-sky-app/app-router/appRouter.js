import {createRouter, createWebHistory} from 'vue-router';
import {routerConfig} from './routerConfig';

export const appRouter = createRouter({
  history: createWebHistory(),
  routes: routerConfig
});
