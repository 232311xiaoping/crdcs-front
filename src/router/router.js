import Main from '@/components/main'
export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/views/Home.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'userManage',
        name: 'userManage',
        meta: {
          icon: '_user-manage',
          title: '用户管理'
        },
        component: () => import('@/views/user/User.vue')
      }
    ]
  }
]
