import Vue from 'vue';
import Swiper from 'vue-swiper';
import Router from 'vue-router';
import Hello from '@/components/hello';
import Cartoon from '@/components/cartoon';
import Game from '@/components/game';
Vue.use(Router);
Vue.use(Swiper);
export default new Router({
    routes: [
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/cartoon',
            name: 'Cartoon',
            component: Cartoon
        },
        {
            path: '/game',
            name: 'Game',
            component: Game
        }
    ]
});
