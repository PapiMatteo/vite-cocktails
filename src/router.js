import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path     : '/',
            name     : 'home',
            component: () => import('./pages/HomePage.vue')
        },
        {
            path: '/cocktail/:slug',
            name: 'single-cocktail',
            component: () => import('./pages/SingleCocktail.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: () => import('./pages/NotFoundPage.vue')
        }

    ]
});

export { router };