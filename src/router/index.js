import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio-View.vue";
import Montaña from "../views/Montana-View.vue";
import Playa from "../views/Playa-View.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/montaña", component: Montaña },
  { path: "/playa", component: Playa },
];

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
