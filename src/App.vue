<template>
  <div id="app">
    <TextEditor/>
  </div>
</template>

<script>
import TextEditor from '@/components/TextEditor'
export default {
  name: 'App',
  components: {
    TextEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
