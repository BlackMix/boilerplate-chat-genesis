export default {
  socket: {
    events: {
      setMessages (data) {
        let mes = data.map(item => JSON.parse(item))
        this.setMessages(mes.sort((a, b) => { return a.id - b.id || a.name.localeCompare(b.name) }))
      }
    }
  }
}
