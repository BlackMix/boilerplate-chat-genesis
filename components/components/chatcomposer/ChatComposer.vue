<template>
<div class="form">
      <field-select v-bind="{
        label: 'Status',
        radio: true,
        width: 10, cleanable: false, options: [
        {value: 1, color: 'green-5', label: 'Disponível'},
        {value: 2, color: 'red-5', label: 'Ocupado'},
        {value: 3, color: 'orange-5', label: 'Ausente'},
        {value: 4, color: 'tertiary', label: 'Invisível'}
        ]}"
      v-model="stats"/>

    <field-color v-bind="{label: 'Cor do Texto', width: 10, color: '#000000'}" v-model="colorText"/>

    <field-color v-bind="{label: 'Cor do Nick', width: 10, color: '#DD0000'}" v-model="colorNick"/>

    <field-text 
    v-bind="{label: 'Dígite aqui', width: 100}" 
    v-on:keyup.enter="send" 
    @input="setIsTyping" 
    v-model="mes"/>

    <div>
    <chat-mention 
      :users="users" 
      @mention="mention" 
      @mentionWithIndex="mentionWithIndex" 
      :message="mes" 
      keyItem="name"
      />
    </div>
</div>
</template>

<script>
import ChatMention from '../chatmention/ChatMention'
import { MixinData, MixinProps, MixinMethods, MixinWatch } from './model'
export default {
  name: 'chat-composer',
  components: {
    ChatMention
  },
  mixins: [MixinData, MixinProps, MixinMethods, MixinWatch]
}
</script>