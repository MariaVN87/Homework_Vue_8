import Vue from 'vue';
import Router from 'vue-router'
import Home from '@/components/pages/HomeComponent.vue'
import Project from '@/components/pages/ProjectComponent.vue'
import Blog from '@/components/pages/BlogComponent.vue'
import NotFound from '@/components/pages/NotFound.vue'
import BlogDetailsComponent from '@/components/pages/BlogDetailsComponent.vue'
import ProjectDetailsComponent from '@/components/pages/ProjectDetailsComponent.vue'
//import ArticleNewsComponent from '@/components/ArticleNewsComponent.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/NotFound',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/BlogDetailsComponent',
            name: 'BlogDetails',
            component: BlogDetailsComponent
        },
        {
            path: '/ProjectDetailsComponent',
            name: 'ProjectDetails',
            component: ProjectDetailsComponent
        }
    ]
})