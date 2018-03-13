const ADD_STICKY = 'ADD_STICKY'
const TOGGLE_STICKY = 'TOGGLE_STICKY'

export const addSticky = (sticky) => {
  return { type: ADD_STICKY, sticky }
}

export const toggleSticky = (id) => {
  return { type: TOGGLE_STICKY, id }
}