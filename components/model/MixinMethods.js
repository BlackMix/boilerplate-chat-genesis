import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('chat', [
      'setTyping',
      'setMessages',
      'setStatus'
    ]),
    mes (obj) {
      this.message = obj
    },
    stats (obj) {
      this.setStatus(obj)
    },
    send () {
      let el = this
      if (el.$data.message) {
        let send = {
          id: Date.now(),
          user_id: el.getAuthUser.id,
          name: el.getAuthUser.name,
          colorName: el.getAuthUser.colorName,
          avatar: el.getAuthUser.avatar,
          time: moment().format('YYYY-MM-DD HH:mm:ss'),
          message: el.$data.message
        }
        el.$socket.emit('messages', send)
        el.$data.message = ''
        el.$socket.emit('setTyping', {isTyping: false})
        el.setTyping(false)
      }
    },
    setIsTyping () {
      let el = this
      if (!el.typing) {
        el.$socket.emit('setTyping', {isTyping: true})
        el.setTyping(true)
        setTimeout(() => {
          el.$socket.emit('setTyping', {isTyping: false})
          el.setTyping(false)
        }, 4000)
      }
    }
  }
}
