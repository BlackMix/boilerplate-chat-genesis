// Types
export const USERS = 'USERS'
export const STATUS = 'STATUS'
export const USERS_STATUS = 'USERS_STATUS'
export const TYPING = 'TYPING'
export const USERS_TYPING = 'USERS_TYPING'
export const MESSAGES = 'MESSAGES'
export const CHANNEL = 'CHANNEL'

const state = {
  users: [],
  status: 1,
  typing: false,
  channel: 'global',
  messages: []
}

const getters = {
  getUsers (state) {
    return state.users
  },
  getTotalUsers (state) {
    return state.users.length
  },
  getStatus (state) {
    return state.status
  },
  getTyping (state) {
    return state.typing
  },
  getMessages (state) {
    return state.messages
  },
  getChannel (state) {
    return state.channel
  }
}

const actions = {
  setUsers ({commit}, obj) {
    commit(USERS, obj)
  },
  setStatus ({commit}, obj) {
    commit(STATUS, obj)
  },
  setUsersStatus ({commit}, obj) {
    commit(USERS_STATUS, obj)
  },
  setTyping ({commit}, obj) {
    commit(TYPING, obj)
  },
  setUsersTyping ({commit}, obj) {
    commit(USERS_TYPING, obj)
  },
  setMessages ({commit}, obj) {
    commit(MESSAGES, obj)
  },
  setChannel ({commit}, obj) {
    commit(CHANNEL, obj)
  }
}

const mutations = {
  [USERS] (state, obj) {
    state.users = obj
  },
  [STATUS] (state, obj) {
    state.status = obj
  },
  [USERS_STATUS] (state, obj) {
    state.users.filter(x => x.id === obj.user_id ? (x.status = obj.status) : undefined)
  },
  [TYPING] (state, obj) {
    state.typing = obj
  },
  [USERS_TYPING] (state, obj) {
    state.users.filter(x => x.id === obj.user_id ? (x.isTyping = obj.isTyping) : undefined)
  },
  [MESSAGES] (state, obj) {
    state.messages = obj
  },
  [CHANNEL] (state, obj) {
    state.channel = obj
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
