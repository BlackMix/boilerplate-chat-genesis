<template>
  <div class="q-message" :class="{'q-message-sent': sent, 'q-message-received': !sent}">
    <p v-if="label" class="q-message-label text-center" v-html="label"></p>
    <div v-if="avatar" class="q-message-container row items-end no-wrap">
      <slot name="avatar">
        <img class="q-message-avatar" :src="avatar">
      </slot>
      <div :class="sizeClass">
      <div v-if="name" :class="'q-message-name ' + colorName ? 'text-' + colorName : ''" v-html="name">
      </div>
      <div class="message-options">
          <i v-if="edit" class="fa fa-pencil-square-o"/> <i v-if="del" class="fa fa-trash-o"/>
      </div>
        <div v-for="msg in text" :key="msg" class="q-message-text" :class="messageClass">
          <span class="q-message-text-content" :class="textClass">
            <div v-html="msg"></div>
            <div v-if="stamp" class="q-message-stamp" v-html="stamp"></div>
          </span>
        </div>
        <div v-if="!text || !text.length" class="q-message-text" :class="messageClass">
          <span class="q-message-text-content" :class="textClass">
            <slot></slot>
            <div v-if="stamp" class="q-message-stamp" v-html="stamp"></div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MixinProps, MixinComputed } from './model'
export default {
  name: 'chat-message',
  mixins: [MixinProps, MixinComputed]
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.message-options
  position relative
  margin-top -18px
  display none
  float right
.q-message
  &:hover
    > div .message-options
        display block
        cursor pointer
</style>