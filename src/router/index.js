import Vue from 'vue'
import Router from 'vue-router'

// 项目主页面
const index = () =>
    import ("../pages/layout/index")

// 主页二级
const welcome = () =>
    import ("../pages/index")
    // 角色管理
const role = () =>
    import ("../pages/system/role/index")
    // 菜单管理
const menu = () =>
    import ("../pages/system/menu/index")
    // 管理员管理
const user = () =>
    import ("../pages/system/user/index")
    // 商品
const shop = () =>
    import ("../pages/shop/category/index")

// 登录
const login = () =>
    import ("../pages/login")





Vue.use(Router)

export default new Router({
    routes: [
        // 主页
        {
            path: '/',
            meta: { title: "首页", tabshow: true },
            component: index,
            children: [{
                    path: '/index',
                    meta: { title: "欢迎页", tabshow: true },
                    component: welcome,
                },
                {
                    path: '/shop',
                    meta: { title: "商品管理", tabshow: true },
                    component: shop,
                },
                {
                    path: '/system',
                    meta: { title: "系统设置", tabshow: true },
                    component: menu,
                },
                {
                    path: '/role',
                    meta: { title: "角色管理", tabshow: true },
                    component: role,
                },
                {
                    path: '/user',
                    meta: { title: "管理员管理", tabshow: true },
                    component: user,
                },

            ]
        },
        // 登录
        {
            path: '/login',
            meta: { title: "登录" },
            component: login,
        },
    ]

})