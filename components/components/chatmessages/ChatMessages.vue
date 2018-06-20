<template>
  <q-scroll-area ref="ListMessages" style="height: 500px">
    <chat-message v-if="MessagesList[0]" v-for="i in MessagesList"
      :name="i.name"
      :colorName="i.colorName"
      :avatar="i.avatar"
      :text="[i.message]"
      :stamp="i.time"
      :sent="i.user_id === User.id"
      :edit="i.user_id === User.id"
      :del="i.user_id === User.id"
      :key="i.id"
    />
  </q-scroll-area>
</template>

<script>
import ChatMessage from '../chatmessage/ChatMessage'
import { MixinProps, MixinMethods, MixinWatch, MixinComputed } from './model'
export default {
  'name': 'chat-messages',
  components: {
    ChatMessage
  },
  mixins: [MixinProps, MixinMethods, MixinWatch, MixinComputed]
}
</script>

<style>
</style>