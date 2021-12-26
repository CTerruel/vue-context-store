import { ref, readonly } from 'vue'

const stores = [
  {
    key: 'stateId',
    store: ref(0)
  }
]

export const setContextStore = (name, value) => {
  stores.find(item => item.key === name).store.value = value
}

export const getContextStore = name => {
  const store = stores.find(item => item.key === name).store
  return readonly(store)
}