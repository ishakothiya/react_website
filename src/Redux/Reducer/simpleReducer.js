// import { ADD, DELETE } from "../Type/type"

// export const simpleReducer = (state = [] , action) =>{
//     switch(action.type) {
//         case ADD : {
//             if(action.obj.id)
//             {
//                 let indexId  = state.findIndex(x => x.id == action.obj.id)
//                 state.splice(indexId , 1  , action.obj)
//             }
//             else
//             {
//                 action.count++
//                 action.setcount(action.count)
//                 action.obj.id = action.count
//                 console.log(action.obj.id)
//                 state.push(action.obj)
//             }
//             return [...state]
//         }
//         case DELETE : {
//             let index = state.findIndex(x => x.id == action.id)
//             state.splice(index , 1)
//             return[...state]
//         }
//         default:{
//             return state
//         }
//     }
// } 