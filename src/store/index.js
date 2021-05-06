import { createStore } from 'vuex'
import routeNav from '../router/routeNav.config'
export default createStore({
    state: {
        SidebarSwitch: false,
        UserRole: !!sessionStorage.getItem('userRole') || false,
        RoutesHistory: JSON.parse(sessionStorage.getItem('RoutesHistory')) || [],
        routes: JSON.parse(sessionStorage.getItem('routes')) || routeNav
    },
    mutations: {
        // 侧边栏折叠
        changeSidebarSwitch(state, payload) {
            state.SidebarSwitch = payload
        },
        // 用户角色
        changeUserRole(state, payload) {
            sessionStorage.setItem('userRole', payload)
            state.UserRole = payload
        },
        // 记录页面访问
        changeRoutesHistory(state, payload) {
            state.RoutesHistory.push(payload)
            sessionStorage.setItem('RoutesHistory', JSON.stringify(state.RoutesHistory))
        },
        // 清空页面访问
        deleteRoutesHistory(state) {
            state.RoutesHistory = []
        },
        // 删除某项
        removeItemRoutesHistory(state, payload) {
            let newArr = []
            const HOME = {
                meta: {
                    title: '首页'
                },
                path: '/home'
            }
            state.RoutesHistory.forEach(item => {
                if(item.path != payload){
                    newArr.push(item)
                }
            })
            state.RoutesHistory = newArr;
            sessionStorage.setItem('RoutesHistory', JSON.stringify(newArr))
            if(JSON.stringify(newArr) === '[]'){
                state.RoutesHistory.push(HOME);
                sessionStorage.setItem('RoutesHistory', JSON.stringify([HOME]))
            }
        },
        // 添加菜单
        addRoutes(state, payload){
            state.routes = payload
            sessionStorage.setItem('routes', JSON.stringify(state.routes))
        }
    },
    actions: {
    },
    modules: {
    }
})
