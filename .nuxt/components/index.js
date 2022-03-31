export const Claims = () => import('../../components/Claims.vue' /* webpackChunkName: "components/claims" */).then(c => wrapFunctional(c.default || c))
export const Games = () => import('../../components/Games.vue' /* webpackChunkName: "components/games" */).then(c => wrapFunctional(c.default || c))
export const Heads = () => import('../../components/Heads.vue' /* webpackChunkName: "components/heads" */).then(c => wrapFunctional(c.default || c))
export const Leaderboard = () => import('../../components/Leaderboard.vue' /* webpackChunkName: "components/leaderboard" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../../components/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const Setuser = () => import('../../components/Setuser.vue' /* webpackChunkName: "components/setuser" */).then(c => wrapFunctional(c.default || c))
export const Switchs = () => import('../../components/Switchs.vue' /* webpackChunkName: "components/switchs" */).then(c => wrapFunctional(c.default || c))
export const PopupConfirmation = () => import('../../components/Popup/Confirmation.vue' /* webpackChunkName: "components/popup-confirmation" */).then(c => wrapFunctional(c.default || c))
export const PopupCurrency = () => import('../../components/Popup/Currency.vue' /* webpackChunkName: "components/popup-currency" */).then(c => wrapFunctional(c.default || c))
export const PopupNotification = () => import('../../components/Popup/Notification.vue' /* webpackChunkName: "components/popup-notification" */).then(c => wrapFunctional(c.default || c))
export const PopupPlay = () => import('../../components/Popup/Play.vue' /* webpackChunkName: "components/popup-play" */).then(c => wrapFunctional(c.default || c))
export const PopupSingin = () => import('../../components/Popup/Singin.vue' /* webpackChunkName: "components/popup-singin" */).then(c => wrapFunctional(c.default || c))
export const PopupTransaction = () => import('../../components/Popup/Transaction.vue' /* webpackChunkName: "components/popup-transaction" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
