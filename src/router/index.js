import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GuildEvent from "@/views/subviews/GuildEvent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import(/* webpackChunkName: "events" */ "../views/Events.vue"),
    children: [
      {
        path: "guild_event",
        name: "guildEvent",
        component: GuildEvent
      }
    ]
  },
  {
    path: "/pve",
    name: "PvE",
    component: () => import(/* webpackChunkName: "pve" */ "../views/Pve.vue"),
    children: [
      {
        path: "delve",
        name: "Delve",
        component: () => import(/* webpackChunkName: "delve" */ "../views/subviews/Delve.vue")
      }
    ]
  },
  {
    path: "/pvp",
    name: "PvP",
    component: () => import(/* webpackChunkName: "pvp" */ "../views/Pvp.vue")
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
