export const list = [
  {
    id:1,
    description: "fazer compras",
    isChecked: false
  },
  {
    id:2,
    description: "teste",
    isChecked: false
  }
]

export function listReducer(state, action){
  switch(action.type){
    case 'insert': 
      return [...state, action.value]
    case 'remove':
      return state.filter(item => item.id !== action.value)
    case 'update':
      return state.map(item => (item.id !== action.value.id ? item : action.value))
    default: return state
  }
}