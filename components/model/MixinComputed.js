import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getAuthUser']),
    ...mapGetters('chat', {
      users: 'getUsers',
      status: 'getStatus',
      channel: 'getChannel',
      typing: 'getTyping',
      messages: 'getMessages'
    })
  }
}
