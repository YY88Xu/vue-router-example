import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import store from '../store'
export const loginRouter = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue'),
    meta: {
      title: "登录"
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../pages/index.vue'),
    meta: {
      title: "首页"
    }
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../pages/notFound.vue'),
    meta: {
      title: "notFound"
    }
  }
]


const router = new Router({
  routes: loginRouter
});

const whiteList = ['/login', '/index'] 
router.beforeEach(async(to, from, next) => {
  //判断是否登录
  const hasLogin = sessionStorage.getItem('login') ? true : false;
  document.title = to.meta.title;
  if(!hasLogin){
    if(whiteList.indexOf(to.path)!==-1){
      next();
    }else{
      next({path: "/login"});
    }
  }else{
    if(to.path==='/login'){
      //相当于退出登录
      sessionStorage.removeItem("login");
      sessionStorage.removeItem("menu");
      sessionStorage.removeItem("roles");
      sessionStorage.removeItem("curPath");
      next();
    }else{
      //判断是否是刷新页面
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;
      if(hasRoles){
        next();
      }else{
        //重新获取用户的权限（角色）
        const roles = await store.dispatch('getRoles');
        const menus = await store.dispatch('getMenus');
        router.addRoutes(menus);
        next({ ...to, replace: true });
      }
    }
  }
});

export default router;