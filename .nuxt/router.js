import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cf49a9c = () => interopDefault(import('../pages/flappybirds/index.vue' /* webpackChunkName: "pages/flappybirds/index" */))
const _44594bf7 = () => interopDefault(import('../pages/modify.vue' /* webpackChunkName: "pages/modify" */))
const _e2e44daa = () => interopDefault(import('../pages/rankingsWork.vue' /* webpackChunkName: "pages/rankingsWork" */))
const _5ff6dad2 = () => interopDefault(import('../pages/towerdefenses/index.vue' /* webpackChunkName: "pages/towerdefenses/index" */))
const _3acda5b4 = () => interopDefault(import('../pages/transaction/index.vue' /* webpackChunkName: "pages/transaction/index" */))
const _10ec844b = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _c3fc77c2 = () => interopDefault(import('../pages/flappybirds/howToPlay.vue' /* webpackChunkName: "pages/flappybirds/howToPlay" */))
const _5d3c4782 = () => interopDefault(import('../pages/towerdefenses/howToPlay.vue' /* webpackChunkName: "pages/towerdefenses/howToPlay" */))
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
    component: _7cf49a9c,
    name: "flappybirds"
  }, {
    path: "/modify",
    component: _44594bf7,
    name: "modify"
  }, {
    path: "/rankingsWork",
    component: _e2e44daa,
    name: "rankingsWork"
  }, {
    path: "/towerdefenses",
    component: _5ff6dad2,
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
    path: "/flappybirds/howToPlay",
    component: _c3fc77c2,
    name: "flappybirds-howToPlay"
  }, {
    path: "/towerdefenses/howToPlay",
    component: _5d3c4782,
    name: "towerdefenses-howToPlay"
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
