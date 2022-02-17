export { default as Claims } from '../../components/Claims.vue'
export { default as Games } from '../../components/Games.vue'
export { default as Heads } from '../../components/Heads.vue'
export { default as Leaderboard } from '../../components/Leaderboard.vue'
export { default as Loading } from '../../components/Loading.vue'
export { default as Switchs } from '../../components/Switchs.vue'

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
