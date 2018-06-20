<template>
  <app-card class="dashboard-home">
    <div slot="title">
      Chat
    </div>
    <div slot="content">
        <q-card class="chat-messages">
          <q-card-title>
          {{channel}}
          </q-card-title>
          <q-card-main>
            <chat-messages v-if="messages[0]" :MessagesList="messages" :User="getAuthUser"/>
            <span v-else>Sem mensagens</span>
          </q-card-main>
        </q-card>
      <chat-composer
      :setIsTyping="setIsTyping"
      :send="send"
      :message="message"
      :status="status"
      @mes="mes"
      @stats="stats"
      :users="users"
      />
    </div>
  </app-card>
</template>

<script>
import { MixinData, MixinComponents, MixinMethods, MixinWatch, MixinSockets, MixinComputed, MixinMounted } from './model'
export default {
  'name': 'chat-home',
  mixins: [MixinData, MixinComponents, MixinMethods, MixinWatch, MixinSockets, MixinComputed, MixinMounted]
}
</script>

<style>
</style>