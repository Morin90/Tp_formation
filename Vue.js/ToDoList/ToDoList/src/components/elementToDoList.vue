<script >
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    name: 'elementToDoList',
    data() {
        return {
            nothing: null
        }
    },
    props: {
        todolist: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        editEl(elId) {
            this.setEditElMode(true)
            this.setElToEditId(elId)
        },
        ...mapActions(useCounterStore, ["deleteEl", "setEditElMode", "setElToEditId"])
    },
    
}
</script>

<template>
  <section id="el-table" class="container">
      <h2 class="text-center">Todo List</h2>
      <table class="table">
          <thead>
              <tr>
                  <th scope="col">A faire</th>
                  
              </tr>
          </thead>
          <tbody class="table-group-divider">
              <tr 
                  v-for="item in getToDoList"
                  :key="item.id"
              >
                  
                  
                  <td>
                      <p>
                          {{item.description}}
                          {{ item.status }}
                      </p>
                  </td>
                  
                  <td>
                      <button 
                          class="btn btn-primary"
                          @click="editEl(item.id)"
                      >
                          Éditer
                      </button>
                      
                      <button 
                          class="btn btn-danger"
                          @click="deleteEl(item.id)"
                      >
                          Supprimer
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
.checkbox{
  width: 30px;
  height: 20px;
  position: relative;
  top: 3px;
}
.inputbox{
  position: relative;
  width : 25rem;
}



</style>
