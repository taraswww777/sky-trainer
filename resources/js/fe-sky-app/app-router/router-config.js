import {createRouter, createWebHashHistory} from 'vue-router';
import {
  HomePage,
  CoursesPage,
  CurrentCoursePage,
  LoginPage,
  ContactsPage,
  AboutPage,
  RegisterPage,
  ForgotPasswordPage,
  SupportPage,
  LogoutPage,
} from '../pages';
import {PAGE_NAMES} from '../constants';
import {checkAuth} from './guards';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: PAGE_NAMES.home,
    beforeEnter: checkAuth,
  },
  {
    path: '/about', component: AboutPage, name: PAGE_NAMES.about,
  },
  {
    path: '/contacts', component: ContactsPage, name: PAGE_NAMES.contacts,
  },
  {
    path: '/support', component: SupportPage, name: PAGE_NAMES.support,
  },
  {
    path: '/auth/login', component: LoginPage, name: PAGE_NAMES.login,
  },
  {
    path: '/auth/logout', component: LogoutPage, name: PAGE_NAMES.logout,
  },
  {
    path: '/auth/forgot',
    component: ForgotPasswordPage,
    name: PAGE_NAMES.forgotPassword,
    beforeEnter: checkAuth,
  },
  {
    path: '/auth/register',
    component: RegisterPage,
    name: PAGE_NAMES.register,
    beforeEnter: checkAuth,
  },
  {
    path: '/courses',
    component: CoursesPage,
    name: PAGE_NAMES.courses,
    beforeEnter: checkAuth,
  },
  {
    path: '/courses/:courseId',
    component: CurrentCoursePage,
    name: PAGE_NAMES.courseItem,
    beforeEnter: checkAuth,
  },
];

export const appRouter = createRouter({
  history: createWebHashHistory(),
  routes,
});
