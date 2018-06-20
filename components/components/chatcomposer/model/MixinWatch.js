export default {
  watch: {
    message () {
      this.mes = this.message
    },
    mes () {
      this.$emit('mes', this.mes)
    },
    stats () {
      this.$emit('stats', this.stats)
    }
  }
}
