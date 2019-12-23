import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
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
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})