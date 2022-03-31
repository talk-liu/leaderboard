import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eb448922 = () => interopDefault(import('../pages/flappybirds.vue' /* webpackChunkName: "pages/flappybirds" */))
const _44594bf7 = () => interopDefault(import('../pages/modify.vue' /* webpackChunkName: "pages/modify" */))
const _7e577b8f = () => interopDefault(import('../pages/towerdefenses.vue' /* webpackChunkName: "pages/towerdefenses" */))
const _3acda5b4 = () => interopDefault(import('../pages/transaction/index.vue' /* webpackChunkName: "pages/transaction/index" */))
const _10ec844b = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _7c51f414 = () => interopDefault(import('../pages/transaction/history.vue' /* webpackChunkName: "pages/transaction/history" */))
const _e88eca66 = () => interopDefault(import('../pages/user/history.vue' /* webpackChunkName: "pages/user/history" */))
const _097c4c25 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/flappybirds",
    component: _eb448922,
    name: "flappybirds"
  }, {
    path: "/modify",
    component: _44594bf7,
    name: "modify"
  }, {
    path: "/towerdefenses",
    component: _7e577b8f,
    name: "towerdefenses"
  }, {
    path: "/transaction",
    component: _3acda5b4,
    name: "transaction"
  }, {
    path: "/user",
    component: _10ec844b,
    name: "user"
  }, {
    path: "/transaction/history",
    component: _7c51f414,
    name: "transaction-history"
  }, {
    path: "/user/history",
    component: _e88eca66,
    name: "user-history"
  }, {
    path: "/",
    component: _097c4c25,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
