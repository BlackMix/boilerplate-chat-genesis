export default {
  props: {
    MessagesList: {
      type: Array,
      default: () => []
    },
    User: {
      type: Object,
      default: () => {}
    }
  }
}
