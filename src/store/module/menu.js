import appRouter from '../../route/appRouter'
const menu = {
  state: {
    menuList: []
  },
  mutations: {
    setMenus: (state, menus) => {
      state.menuList = menus;
      sessionStorage.setItem('menu', JSON.stringify(menus));
    }
  },
  actions: {
    getMenus: (context)=>{
      //这里可以请求后端；或者根据后端返回的数据对 appRouter 进行过滤，只用有权限的组件。
      return new Promise((resolve, reject)=>{
        context.commit("setMenus", appRouter);
        resolve(appRouter);
      })
    }
  }
}
export default menu