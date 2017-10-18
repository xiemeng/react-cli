import * as TYPES from './ActionsTypes'

export const changeInputVal = function(inpVal){
    return {
        type: TYPES.CHANGE_INPUT_VAL,
        inpVal
    }
}