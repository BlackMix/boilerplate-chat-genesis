export default {
  methods: {
    scrollDown () {
      this.$refs.ListMessages.setScrollPosition(9999999999, 1)
    }
  }
}
