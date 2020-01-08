import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import History from '@/components/History'
import Projects from '@/components/Projects'


Vue.use (Router)

export default new Router ({
    routes: [
        {
            path: '/',
            redirect: '/about'
        },
        {

            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/history',
            name: 'history',
            component: History
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})