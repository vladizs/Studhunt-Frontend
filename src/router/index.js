import Vue from 'vue';
import VueRouter from 'vue-router';
import Students from '../views/Students.vue';
import Vacancies from '../views/Vacancies.vue';
import AnnouncementComponent from '../views/AnnouncementComponent.vue';
import TeamPage from '../views/TeamPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'students',
    path: '/students',
    component: Students,
  },
  {
    name: 'vacancies',
    path: '/vacancies',
    component: Vacancies,
  },
  {
    name: 'newpost',
    path: '/newpost',
    component: AnnouncementComponent,
  },
  {
    path: '/',
    component: TeamPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
