import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/question/:id",
    name: "Question",
    component: () => import("./pages/question.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () => import("./pages/privacy_policy.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
