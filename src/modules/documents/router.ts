import DocumentsView from "./views/DocumentsView.vue";
import DocumentsItemView from "./views/DocumentsItemView.vue";
// @ts-ignore

export default {
  path: "/documents",
  component: DocumentsView,
  name: "documents.view",
  children: [
    {
      path: ":id?",
      name: "documents.item.view",
      component: DocumentsItemView,
    },
  ],
};
