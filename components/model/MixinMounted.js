export default {
  mounted () {
    if (!this.messages[0]) {
      // this.$socket.emit('getOnlineUsers')
      this.$socket.emit('getMessages', this.channel)
    }
  }
}
