export default [
    {
        path: '/home',
        name: 'Home',
        meta: {
            icon: "el-icon-s-promotion",
            title: '首页'
        },
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            icon: "el-icon-aim",
            title: '关于我们'
        },
    },
    {
        path: '/permission',
        name: 'admin',
        meta: {
            icon: "el-icon-help",
            title: '管理员页面'
        },
        children: [
            {
                path: '/permission',
                name: 'Permission',
                meta: {
                    icon: "el-icon-set-up",
                    title: '权限页面',
                    permission: true
                },
            },
            {
                path: '/message',
                name: 'message',
                meta: {
                    icon: "el-icon-bell",
                    title: '消息页面',
                    permission: true
                },
            }
        ],
    }]
