<template>
  <div class="edit-area">
    <label for="headline">Headline:</label>
    <input
      type="text"
      name="headline"
      @input="updateValue"
      v-model="$store.state.inputFields.headline"
      @blur="onBlur"
    />
    <label for="subheadline">Subheadline:</label>
    <input
      type="text"
      name="subheadline"
      @input="updateValue"
      v-model="$store.state.inputFields.subheadline"
      @blur="onBlur"
    />
    <label for="bodyText">Body text:</label>
    <textarea
      rows="10" cols="80"
      class="body-text"
      name="bodyText"
      @input="updateValue"
      v-model="$store.state.inputFields.bodyText"
      @blur="onBlur">
    </textarea>
    <h4>Contact information</h4>
    <label for="firstName"> First name:</label>
    <input
      type="text"
      name="firstName"
      @input="updateValue"
      v-model="$store.state.inputFields.firstName"
      @blur="onBlur"
    />
   <label for="lastName">Last name:</label>
    <input
      type="text"
      name="lastName"
      @input="updateValue"
      v-model="$store.state.inputFields.lastName"
      @blur="onBlur"
    />
    <label for="email">Email:</label>
    <input
      type="email"
      name="email"
      @input="updateValue"
      v-model="$store.state.inputFields.email"
      @blur="onBlur"
    />
  </div>
</template>

<script>
export default {
  name: 'EditArea',
  methods: {
    updateValue (e) {
      this.$store.commit('changeFieldState', {
        fieldType: e.target.name,
        value: e.target.value
      })
      this.$store.commit('currentStateVisibleValue', false)
    },
    onBlur () {
      this.$store.dispatch('saveInLocalStorage')
    }
  }
}
</script>

<style>
.edit-area {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 500px;
  margin: 20px 50px 0px 0px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
  box-shadow: 0px 0px 5px 0px rgba(46,46,46,1);
}
.edit-area input {
  margin-bottom: 15px;
}
.body-text {
  resize: none;
}
.body-text-type {
  display: flex;
  align-items: baseline;
}
.body-text-type input[type="radio"] {
  margin: 0 5px 0 10px;
}
</style>
