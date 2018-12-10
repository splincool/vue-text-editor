<template>
  <div class="preview-area">
    <h1>{{headlineValue}}</h1>
    <h2>{{subHeadlineValue}}</h2>
    <div>{{bodyTextValue}}</div>
    <h4>{{firstNameValue}}</h4>
    <h4>{{lastNameValue}}</h4>
    <h4>{{emailValue}}</h4>
  </div>
</template>

<script>
export default {
  name: 'PreviewArea',
  computed: {
    headlineValue () {
      return this.$store.state.inputFields.headline
    },
    subHeadlineValue () {
      return this.$store.state.inputFields.subheadline
    },
    bodyTextValue () {
      return this.$store.state.inputFields.bodyText
    },
    firstNameValue () {
      return this.$store.state.inputFields.firstName
    },
    lastNameValue () {
      return this.$store.state.inputFields.lastName
    },
    emailValue () {
      return this.$store.state.inputFields.email
    }
  }
}
</script>

<style>
.preview-area {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 500px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
}
</style>
