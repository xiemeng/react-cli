import * as TYPES from './ActionsTypes'

const initailState = 'defaultVal'

export const inputVal = function(state = initailState, action){
    switch (action.type){
        case TYPES.CHANGE_INPUT_VAL:
            return action.inpVal
        default:
            return state
    }
}