import {combineReducers} from 'redux'
// reducer 是一个纯函数，接受旧的 state 和 action，返回新的state
function list(state=[],action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.content);
    default:
      return state;
  }
}
// combineReducers() 辅助函数：把多个不同的reducer函数合并成一个最终的reducer函数，然后就可以根据这个reducer调用 createStore() 来创建 store
export default combineReducers({list});