const user = {
  state: {
    roles: []
  },
  mutations: {
    setRoles: (state, val)=>{
      state.roles.push(val);
      sessionStorage.setItem("roles", val);
    }
  },
  actions: {
    setRoles: (context, val)=>{
      context.commit("setRoles", val);
    },
    getRoles: (context)=>{
      return new Promise((resolve, reject)=>{
        //模拟请求后端当前用户的角色或者权限
        const roles = sessionStorage.getItem("roles");
        context.commit("setRoles", roles);
        resolve();
      })
    }
  }
}

export default user;