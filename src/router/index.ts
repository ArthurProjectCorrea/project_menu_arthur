import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Deshboard from "../views/protocolos/Deshboard.vue";
import Protocolos from "../views/protocolos/Protocolos.vue";
import Workshop from "../views/controlPanel/workshop/Workshop.vue";
import DeshboardControlPanel from "../views/controlPanel/DeshboardControlPanel.vue";

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
  {
    path: "/deshboard_controlPanel",
    name: "deshboardControlPanel",
    component: DeshboardControlPanel,
  },
  {
    path: "/workshop",
    name: "oficina",
    component: Workshop,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default router;
