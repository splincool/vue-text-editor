<template>
  <div class="text-editor">
    <div class="board">
      <button
        v-if="$store.state.pastStateVisible"
        @click="goPastState">Past State</button>
      <button
        v-if="$store.state.currentStateVisible"
        @click="goCurrentState">Current State</button>
    </div>
    <div class="wrapper">
      <EditArea/>
      <PreviewArea/>
    </div>
  </div>
</template>

<script>
import EditArea from '@/components/EditArea'
import PreviewArea from '@/components/PreviewArea'
export default {
  name: 'TextEditor',
  data () {
    return {
      autosaveInterval: null,
      pastStateInterval: null
    }
  },
  mounted () {
    if (localStorage) {
      this.$store.dispatch('readFromLocalStorge')
      const self = this
      this.autosaveInterval = setInterval(function () {
        localStorage.setItem('inputFields', JSON.stringify(self.$store.state.inputFields))
      }, 5000)
      this.pastStateInterval = setInterval(function () {
        localStorage.setItem('inputFieldsPastState', JSON.stringify(self.$store.state.inputFields))
        self.$store.commit('pastStateVisibleValue', true)
      }, 30000)
    }
  },
  beforeDestroy () {
    clearInterval(this.autosaveInterval)
    clearInterval(this.pastStateInterval)
  },
  methods: {
    goPastState () {
      if (localStorage && localStorage.getItem('inputFieldsPastState') && localStorage.getItem('inputFieldsPastState') !== undefined) {
        localStorage.setItem('inputFieldsCurrentState', JSON.stringify(this.$store.state.inputFields))
        this.$store.commit('updateInputFields', JSON.parse(localStorage.getItem('inputFieldsPastState')))
        this.$store.commit('pastStateVisibleValue', false)
        this.$store.commit('currentStateVisibleValue', true)
      }
    },
    goCurrentState () {
      if (localStorage && localStorage.getItem('inputFieldsCurrentState') && localStorage.getItem('inputFieldsCurrentState') !== undefined) {
        this.$store.commit('updateInputFields', JSON.parse(localStorage.getItem('inputFieldsCurrentState')))
        this.$store.commit('currentStateVisibleValue', false)
      }
    }
  },
  components: {
    EditArea,
    PreviewArea
  }
}
</script>

<style>
.board {
  margin: 20px 10px;
  display: flex;
}

.board button {
  margin: 5px;
}

.text-editor .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
