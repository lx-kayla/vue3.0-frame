import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from '../App'
import A1 from '@/views/A'
import B1 from '@/views/B'
export default new Router({
    router: [
        {
            path: '/',
            name: 'index',
            component: App
        },
        {
            path: '/a',
            name: 'a',
            component: A1
        },
        {
            path: '/b',
            name: 'b',
            component: B1
        }
    ]
})
