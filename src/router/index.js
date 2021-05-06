import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';
import store from '../store'
import isExist from '../utils/isExist'

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */ '../layout/main.vue'),
        children: [
            {
                path: '/home',
                meta: {
                    title: '首页'
                },
                component: () => import(/* webpackChunkName: "home" */ '../views/Home')
            },
            {
                path: '/about',
                meta: {
                    title: '关于我们'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/About')
            },

            {
                path: '/permission',
                component: () => import(/* webpackChunkName: "permission" */ '../views/Permission'),
                meta: {
                    title: '权限页面',
                    permission: true
                },
            },
            {
                path: '/message',
                component: () => import(/* webpackChunkName: "message" */ '../views/Message'),
                meta: {
                    title: '消息页面',
                    permission: true
                },
            },
            {
                path: '/403',
                meta: {
                    title: '/403'
                },
                component: () => import(/* webpackChunkName: "about" */ '../views/403')
            }
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/Login')
    },
    {
        path: '/404',
        meta: {
            title: '404'
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/404')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

const storeMap = data => {
    let routesHistory = store.state.RoutesHistory
    for (let i = 0; i < routesHistory.length; i++) {
        if (routesHistory[i].path === data.path)
            return true
    }
    return false
}

const FORBID = [
    '/login',
    '/403',
    '/404'
]

router.afterEach(transition => {
    let { path, meta } = transition
    if (!storeMap(transition)
        && FORBID.indexOf(transition.path) < 1
        && !!isExist(store.state.routes, 'path', path).length
    ) store.commit('changeRoutesHistory', { path, meta })

    NProgress.done();
});


router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue3 + element plus`;
    const role = sessionStorage.getItem('userRole');
    if ((role === 'false' || !role) && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        isExist(store.state.routes, 'path', to.path).length
            ? next()
            : next('/403');
    } else if (to.matched.length !== 0) {
        next();
    } else {
        next('/404')
    }
    NProgress.start();
});

export default router