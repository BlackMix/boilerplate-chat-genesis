export default {
  methods: {
    mention (obj) {
      this.mes = obj
    },
    mentionWithIndex (obj) {
      this.mes = this.mes.slice(0, obj.index) + obj.m
    },
    mixxxx (ss) {
      // console.log(ss)
    }
  }
}
