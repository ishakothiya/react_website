import { GETAPI } from "../Type/type";

export const apiReducer = (state = [] , action) =>
{
    console.log(action , "apiReduser")
    switch(action.type) {
        case GETAPI : {
            return action.data
        }
        default:{
            return state
        }
    }
}