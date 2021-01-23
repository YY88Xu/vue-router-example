const appRouter = [
  {
    path: "/app",
    name: "app",
    component: ()=> import(/* webpackChunkName: "app" */ '../pages/app.vue'),
    meta: {
      title: "app"
    },
    children: [
      {
        path: 'reading',
        name: 'reading',
        component: () => import(/* webpackChunkName: "reading" */ '../pages/reading.vue'),
        meta: {
          title: "reading"
        }
      },
      {
        path: "userInfo",
        name: "userInfo",
        component: ()=> import(/* webpackChunkName: "userInfo" */ '../pages/userInfo.vue'),
        meta: {
          title: "userInfo"
        }
      },
      {
        path: "movie",
        name: "movie",
        component: ()=> import(/* webpackChunkName: "movie" */ '../pages/movie.vue'),
        meta: {
          title: "movie"
        }
      }
    ]
  },
  {
    path: '*', redirect: '/notFound'
  }
]

export default appRouter;