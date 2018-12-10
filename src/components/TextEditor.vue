<template>
  <div class="text-editor">
    <EditArea/>
    <PreviewArea/>
    <!-- <button >Test</button> -->
  </div>
</template>

<script>
import EditArea from '@/components/EditArea'
import PreviewArea from '@/components/PreviewArea'
export default {
  name: 'TextEditor',
  mounted () {
    this.$store.dispatch('readFromLocalStorge')
    const self = this
    this.interval = setInterval(function () {
      if (localStorage) {
        localStorage.setItem('inputFields', JSON.stringify(self.$store.state.inputFields))
        clearInterval(self.interval)
      }
    }, 5000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    //
  },
  components: {
    EditArea,
    PreviewArea
  }
}
</script>

<style>
.text-editor {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
