import { createRouter, createWebHistory } from 'vue-router';
import PeopleList from '../pages/PeopleList.vue';
import PersonFull from '../pages/PersonFull.vue';

const routes = [
  {
    path: '/',
    name: 'PeopleList',
    component: PeopleList,
  },
  {
    path: '/:id',  // Dynamic route for individual person's details
    name: 'PersonFull',
    component: PersonFull,
    props: true,  // Pass the route params as props to the component
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
