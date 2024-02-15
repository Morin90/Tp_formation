
import { defineStore } from 'pinia'
import todolist from "../data/todolist.json"

const STORE_NAME = 'todolist'
const STORE_LOCALE_STORAGE_KEY = 'todolist'

const getDefaultState = () => todolist
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useCounterStore = defineStore(STORE_NAME, {
  state: () => {
    return{
      todolist: getCurrentState(), 
      editToDoListMode: false,
      elToEditId: null
    }
  },
  getters: {
    getEl : (state) => state.todolist,
    getEditElMode : (state) => state.editElMode,
    getElToEditId: (state) => state.elToEditId,
    getElById: (state) => (id) => {
      return state.todolist.find(el => el.id == id)
    },
    getElByDescription: (state) => (description) => {
      return state.counter.filter(el => el.description == description)
    }
  },
  actions: {
    updateLocaleStorage() {
      localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.todolist))
    },
    addEl(el) {
      this.todolist.push(el)
      this.updateLocaleStorage()
    },
    updateEl(el) {
      const index = this.todolist.findIndex(el => {
          return el.id === todolist.id
      })
      this.todolist[index] = el
      this.updateLocaleStorage()
      this.resetEditionMode()
    },
    deleteEl(elId) {
      /* Ici on va parcourir le tableau products et supprimer le produit transmis */
      this.todolist = this.todolist.filter(el => el.id != elId)
      this.updateLocaleStorage()
    },
    setEditElMode(mode) {
      this.editElMode = mode
    },
    setElToEditId(id) {
      this.elToEditId = id
    },
    resetEditionMode() {
      this.elToEditId = null
      this.editElMode = false 
    }
  }
})
