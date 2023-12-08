import Main from 'views/Main.vue';
import JobDetail from 'views/JobDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/job/:id',
    name: 'JobDetail',
    component: JobDetail,
  },
];

export default routes;
