<template>
  <q-scroll-area style="height: 500px">
    <q-list highlight class="col-auto">
        <q-item v-for="i in Users" :key="i.id">
          <q-item-side :avatar="i.avatar">
            <div :class="'status' + (i.isTyping ? ' status-typing ' : '') + ' status-' + colotStatus(i.status)">
              <chat-spinner class="status-spinner" v-if="i.isTyping === true" :loading="true" :color="'#FFFFFF'" :size="'5px'"/>
            </div>
          </q-item-side>
          <q-item-main>
            <q-item-tile label :color="i.colorName">{{i.name}}</q-item-tile>
          </q-item-main>
          <q-item-side>
            <q-item-tile icon="fa-comment-o" size="16px"/>
          </q-item-side>
        </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import ChatSpinner from '../chatspinner/ChatSpinner'
import { MixinProps, MixinMethods } from './model'
export default {
  'name': 'chat-friends-list',
  components: {
    ChatSpinner
  },
  mixins: [MixinProps, MixinMethods]
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .q-item
    cursor pointer
  .status
    position absolute
    border-radius 7px
    height 10px
    width 10px
    left 43px
    bottom 10px
  .status-online
    background-color #43b581
  .status-dnd
    background-color #f04747 
  .status-idle
    background-color #faa61a
  .status-offline
    background-color #747f8d
  .status-typing
    width 50px
  .status-spinner
    z-index 50
    bottom -4px
    left 8px
    color #FFFFFF
    position absolute
</style>