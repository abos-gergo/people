import { createRouter, createWebHistory } from "vue-router";
import PeopleList from "../pages/PeopleList.vue";
import PersonFull from "../pages/PersonFull.vue";

const routes = [
  {
    path: "/",
    redirect: "/emberek",
  },
  {
    path: "/emberek",
    name: "PeopleList",
    component: PeopleList,
  },
  {
    path: "/emberek/:id",
    name: "PersonFull",
    component: PersonFull,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(from, to, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
  },
});

export default router;
