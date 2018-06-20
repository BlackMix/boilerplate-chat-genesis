export default {
  computed: {
    textClass () {
      if (this.textColor) {
        return `text-${this.textColor}`
      }
    },
    messageClass () {
      if (this.bgColor) {
        return `text-${this.bgColor}`
      }
    },
    sizeClass () {
      if (this.size) {
        return `col-${this.size}`
      }
    }
  }
}
