export default function categoryReducer(state = null, action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.payload
    default:
      return state
  }
}
