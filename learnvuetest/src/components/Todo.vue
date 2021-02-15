<template>
  <div>
    <div>
      <Input @change-handel="changeHandel" />
      <button @click="addList">add</button>
    </div>
    <div>
      待办事项
      <List
        v-for="todo in todos"
        :key="todo.key"
        :todo="todo"
        @check-handel="checkHandelTodo"
      />
    </div>
    <div>
      已完成
      <List
        v-for="done in dones"
        :key="done.key"
        :todo="done"
        @check-handel="checkHandelDone"
      />
    </div>
  </div>
</template>
<script>
import Input from './Input.vue'
import List from './List.vue'
let countId = 1
export default {
  name: 'Todo',
  data() {
    return {
      newText: '',
      todos: [],
      dones: [],
    }
  },
  components: {
    Input,
    List,
  },
  methods: {
    changeHandel(value) {
      this.newText = value
    },
    checkHandelTodo(checked) {
      console.log('todo')
      if (checked.value) {
        this.dones.push({
          key: checked.key,
          value: checked.value,
          status: checked.status,
        })

        this.todos = this.todos.filter(item => {
          return item.key !== checked.key
        })
      }
    },
    checkHandelDone(checked) {
      console.log('done', checked)
      if (checked.value) {
        this.todos.push({
          key: checked.key,
          value: checked.value,
          status: checked.status,
        })

        this.dones = this.dones.filter(item => {
          return item.key !== checked.key
        })
      }
    },
    addList() {
      this.todos.push({
        key: countId++,
        value: this.newText,
        status: false,
      })
    },
  },
}
</script>
