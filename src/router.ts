import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Contact from "./views/Contact.vue";
import About from "./views/About.vue";
import Services from "./views/Services.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about", name: "About", component: About },
  { path: "/services", name: "Services", component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
