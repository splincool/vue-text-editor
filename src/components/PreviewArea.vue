<template>
  <div class="preview-area">
    <h1 class="headline">{{headlineValue}}</h1>
    <h2 class="subheadline">{{subHeadlineValue}}</h2>
    <div v-html="bodyTextValue"></div>
    <div class="contact-area">
      <p>{{firstNameValue}} {{lastNameValue}}</p>
      <p>{{emailValue}}</p>
    </div>
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
  width: 600px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
}
.preview-area h1.headline,
.preview-area h4 {
  margin-bottom: 0px;
}
.preview-area h2.subheadline {
  margin-top: 0px;
}
.contact-area {
  margin-top: 50px;
}
.contact-area p {
  margin: 0px;
}
</style>
