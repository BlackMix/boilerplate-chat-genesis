export default {
  props: {
    sent: Boolean,
    edit: Boolean,
    del: Boolean,
    label: String,
    deleteMessage: Number,
    bgColor: String,
    textColor: String,
    name: String,
    colorName: String,
    avatar: String,
    text: {
      type: Array,
      default: []
    },
    stamp: String,
    size: String
  }
}
