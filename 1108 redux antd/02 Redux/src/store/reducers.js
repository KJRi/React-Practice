import {ADD,MINUS} from './const'
import {combineReducers} from 'redux'

/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
function count(state=0,action) {
    switch (action.type) {
        case ADD:
            return state + action.number;
        case MINUS:
            return state - action.number;
        default:
            return state;
    }
}
// combineReducers 辅助函数的作用是，把多个不同 reducer 函数合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore() 来创建store
export default combineReducers({count})