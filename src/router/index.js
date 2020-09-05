import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import GuildEvent from "@/views/subviews/GuildEvent";
import RaidBoss from "@/views/subviews/RaidBoss";
import Guildwars from "@/views/subviews/Guildwars";
import Invasion from "@/views/subviews/Invasion";
import TowerOfDoom from "@/views/subviews/TowerOfDoom";

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
    component: () => import(/* webpackChunkName: "events" */ "../views/Events.vue")
  },
  {
    path: "/guild_event",
    name: "guildEvent",
    component: GuildEvent,
    children: [
      { path: "raid_boss", name: "raidBoss", component: RaidBoss },
      { path: "guild_wars", name: "gw", component: Guildwars },
      { path: "invasion", name: "invasion", component: Invasion },
      { path: "tod", name: "tod", component: TowerOfDoom },
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
