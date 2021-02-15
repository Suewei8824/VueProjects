<template>
  <div class="div">
    <input class="input" v-model="value" type="text" @change="change" />
  </div>
</template>
<script>
export default {
  name: 'Input',
  data() {
    return {
      value: '',
    }
  },
  props: {},
  methods: {
    change() {
      this.$emit('change-handel', this.value)
    },
  },
}
</script>
<style scoped>
.div {
  display: inline-block;
}
.input {
  display: inline-block;
}</style
>>
