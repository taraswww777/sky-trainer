import {
    HomePage,
    CoursesPage,
    CurrentCoursePage,
    LoginPage,
    ContactsPage,
    AboutPage,
    SupportPage
} from "../vue/pages";
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'


const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/contacts', component: ContactsPage},
    {path: '/support', component: SupportPage},
    {path: '/login', component: LoginPage},
    {path: '/login', component: LoginPage},
    {path: '/courses', component: CoursesPage},
    {path: '/courses/:courseId', component: CurrentCoursePage},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
