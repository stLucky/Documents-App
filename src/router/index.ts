import { createRouter, createWebHistory } from "vue-router";
import DocumentsModule from "@/modules/documents";

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", redirect: "/documents" }, DocumentsModule],
});
