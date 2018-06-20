export default {
  methods: {
    itemName (v) {
      const { keyItem } = this
      return keyItem ? v[keyItem] : v
    },
    tagItems () {
      const { tag, tags } = this
      return tag ? [tag] : tags
    },
    getTextIndex (text, tags) {
      return tags.map(tag => {
        return { tag, index: text.lastIndexOf(tag) }
      }).reduce((a, b) => {
        return a.index > b.index ? a : b
      })
    },
    handleText (text) {
      if (!text) { this.mention = []; this.mentions = []; return }
      const { disable, tagItems, users, itemName, getTextIndex, filterMatch } = this
      const { tag, index } = getTextIndex(text, tagItems())
      if (index < 0) return
      const crazytag = text.slice(index + tag.length, text.length)
      const matched = users.filter(v => {
        const name = itemName(v)
        return filterMatch(name, crazytag, tag)
      })
      if (matched.length) {
        this.mention = matched
        this.index = index
        matched.filter(v => {
          if (crazytag === itemName(v)) {
            if (!disable(crazytag)) {
              this.mentions.push(crazytag)
            }
          }
        })
      }
      else {
        this.mention = []
      }
    },
    handleMention (m) {
      if (!this.disable(m)) {
        this.mentions.push(m)
        this.insertText(this.tag, m, this.suffix, this.index)
      }
    },
    disable (d) {
      return this.mentions.filter(m => {
        return m === d
      }).length > 0
    },
    insertText (tag, text, suffix, index) {
      if (!index) {
        this.$emit('mention', tag + text + suffix)
      }
      else {
        this.$emit('mentionWithIndex', {m: tag + text + suffix, index: index})
      }
    }
  }
}
