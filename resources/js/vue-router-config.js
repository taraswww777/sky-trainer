import {
    HomePage,
    CoursesPage,
    CurrentCoursePage,
    LoginPage,
    ContactsPage,
    AboutPage,
    RegisterPage,
    ForgotPasswordPage,
    SupportPage
} from "../vue/pages";
import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/contacts', component: ContactsPage},
    {path: '/support', component: SupportPage},
    {path: '/auth/login', component: LoginPage},
    {path: '/auth/forgot', component: ForgotPasswordPage},
    {path: '/auth/register', component: RegisterPage},
    {path: '/courses', component: CoursesPage},
    {path: '/courses/:courseId', component: CurrentCoursePage},
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
