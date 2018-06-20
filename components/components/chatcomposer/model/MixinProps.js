export default {
  props: {
    users: {
      type: Array,
      default: () => ([])
    },
    setIsTyping: Function,
    send: Function,
    message: {
      type: String,
      default: ''
    },
    status: {
      type: Number,
      default: 1
    }
  }
}
