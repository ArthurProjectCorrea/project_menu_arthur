import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Deshboard from "../views/protocolos/Deshboard.vue";
import Protocolos from "../views/protocolos/Protocolos.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "deshboard",
    component: Deshboard,
  },
  {
    path: "/protocolos",
    name: "protocolos",
    component: Protocolos,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default router;
