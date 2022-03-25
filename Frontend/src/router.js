import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store.js';
import { evBus } from '@/services/bus.js';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active active',
    base: process.env.BASE_URL,
    auth: '',

    // routes: [
    //     // Autheticated Only
    //     {
    //         path: '/',
    //         name: 'HOME',
    //         component: () => import('./views/BoardTest.vue'),
    //     },
        
    // ]
});

// Any invalid route will redirect to home
// router.redirect({
//   '*': '/'
// });

// Navigation Gaurd

export default router;
