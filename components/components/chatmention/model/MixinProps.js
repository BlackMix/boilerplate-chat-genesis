export default {
  props: {
    tag: {
      type: String,
      default: '@'
    },
    tags: {
      type: Array,
      default: () => (['@'])
    },
    suffix: {
      type: String,
      default: ' '
    },
    keyItem: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    users: {
      type: Array,
      default: () => ([])
    },
    filterMatch: {
      type: Function,
      default: (name, crazytag, tag) => {
        return name.toLowerCase()
          .indexOf(crazytag.toLowerCase()) > -1
      }
    }
  }
}
