<template>
  <div class="wrap">
    <ul class="nav">
      <li v-for="item in arr" :key="item.name" class="nav-item">
        <a
          :class="[curPath === item.path ? 'active' : '']"
          @click="changeRoute(item.path)"
          >{{ item.name }}</a
        >
      </li>
      <li class="nav-item"><button @click="logout">Logout</button></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { appRouter } from "../route/router";
export default {
  name: "App",
  components: {},
  data() {
    return {
      curPath: sessionStorage.getItem('curPath') ?  sessionStorage.getItem('curPath') : "reading"
    };
  },
  computed: {
    arr() {
      return this.$store.state.menu.menuList[0].children;
    },
  },
  methods: {
    changeRoute(val) {
      this.curPath = val;
      sessionStorage.setItem("curPath", this.curPath);
      this.$router.push({ path: `/app/${val}` });
    },
    logout() {
      sessionStorage.removeItem("login");
      sessionStorage.removeItem("menu");
      sessionStorage.removeItem("roles");
      sessionStorage.removeItem("curPath");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  overflow: hidden;
}
.nav {
  width: 100%;
  display: flex;
  list-style: none;
}
.nav-item {
  flex: 1;
  height: 32px;
  line-height: 32px;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.active {
  color: blue;
}
</style>