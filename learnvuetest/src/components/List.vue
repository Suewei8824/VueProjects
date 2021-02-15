<template>
  <div>
    <li class="li">
      {{ todo.value }}
      <input type="checkbox" v-model="checkValue" @change="checkHandel" />
    </li>
  </div>
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      checkValue: false,
    }
  },
  props: {
    todo: {
      type: Object,
    },
  },
  methods: {
    checkHandel() {
      this.$emit('check-handel', {
        status: this.checkValue,
        key: this.todo.key,
        value: this.todo.value,
      })
    },
  },
}
</script>
<style scoped>
.li {
  list-style-type: none;
}
</style>
