import { createRouter, createWebHistory } from "vue-router";
import AdsListView from "@/views/AdsListView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/ads-list",
            alias: "/",
            name: "AdsListView",
            component: AdsListView,
        },
        {
            path: "/new",
            name: "NewAdsView",
            component: () => import("../views/NewAdsView.vue"),
        },
        {
            path: "/edit", // temp decision
            name: "EditAdsView",
            component: () => import("../views/EditAdsView.vue"),
            // props: true, // add props to pass id
        },
        {
            path: "/dashboards",
            name: "DashboardView",
            component: () => import("../views/DashboardView.vue"),
        },
    ]
});
