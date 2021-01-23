<template>
    <div>
        <h3>Login</h3>
        <div><button @click="login">普通人登录</button></div>
    </div>
</template>

<script>
    import router from "../route/router"
    import appRouter from "../route/appRouter"
  export default {
    name: "Login",
    methods: {
      login(){
        sessionStorage.setItem('login', "login");
        router.addRoutes(appRouter);
        this.$store.commit("setMenus", appRouter);
        this.$store.commit("setRoles", "admin");
        this.$router.push({path: '/app/reading'});
      }
    },
    computed: {
      menuList(){
        return this.$store.state.menu.menuList;
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style scoped>

</style>