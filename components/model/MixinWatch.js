export default {
  watch: {
    status () {
      this.$socket.emit('setStatus', {status: this.status})
    }
  }
}
