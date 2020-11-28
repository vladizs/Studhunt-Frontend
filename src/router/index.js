import Vue from 'vue';
import VueRouter from 'vue-router';
import Students from '../views/Students.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/students',
    component: Students,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
