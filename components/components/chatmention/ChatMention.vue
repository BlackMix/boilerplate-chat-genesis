<template>
  <div v-if="mention[0]" class="chat-mention">
    <div class="chat-mention-view">
        <ul class="chat-mention-ul">
            <li class="chat-mention-li"
            v-for="user in mention"
            @click="handleMention(user.name)"
            :disabled="disable(user.name)"
            >
              <img style="width:25px;border-radius:50%;" :src="user.avatar">
               {{user.name}}
            </li>
          </ul>
    </div>
  </div>
</template>

<script>
import { MixinData, MixinProps, MixinMethods, MixinWatch } from './model'
export default {
  name: 'chat-mention',
  mixins: [MixinData, MixinProps, MixinMethods, MixinWatch]
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.chat-mention
  color #000
  min-width 120px
  z-index 9999
  position relative
  bottom 160px
  width 200px
.chat-mention-view
  position absolute
  cursor default
  background-color rgba(255, 255, 255, 0.94)
  border-radius 3px
  box-shadow 0 0 5px rgba(0,0,5,5.5)
  min-width 200px
  max-width 200px
  max-height 200px
.chat-mention-ul
  list-style none
  padding 0
  margin 0
.chat-mention-li
  height 30px
  padding 0 15px
  &:hover
    background-color rgba(5, 0, 0, 0.2)
    cursor pointer
</style>