import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/show",
    component: () => import("../views/Show.vue"),
    props: true,
    children: [
      {
        path: "swipe-cell",
        component: () => import("../components/SwipeCell.vue")
      },
      {
        path: 'calendar',
        component: () => import("../components/Calendar.vue")
      },
      {
        path: "*",
        redirect: "/show/swipe-cell"
      }
    ]
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
})

export default router
