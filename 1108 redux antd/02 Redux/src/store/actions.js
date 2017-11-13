import {ADD,MINUS} from './const'

// Action 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。一般来说你会通过 store.dispatch() 将 action 传到 store。
export function add(number) {
    return { 
        type: ADD,
        number  
    }
}

export function minus(number) {
    return {
        type: MINUS,
        number
    }
}