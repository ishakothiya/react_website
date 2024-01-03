import axios from "axios"
import { GETAPI } from "../Type/type"

let auth ={
    headers :{
        Authorization : `Bearer ${localStorage.getItem('token')}`
    }
}

export const getapi = () =>{
    return (dispatch) =>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get",auth).then((res) =>{
            dispatch({type: GETAPI , data : res.data.responseData})
        })
    }
}


export const addApi = (obj) =>{
    return (dispatch) =>{
        axios.post("https://student-api.mycodelibraries.com/api/student/add" , obj,auth).then((res) =>{
            dispatch(getapi())
        })
    }
}


// export const deleteapi = (obj) =>{
//     return (dispatch) =>{
//             axios.post('https://student-api.mycodelibraries.com/api/student/update'+id,auth).then((res)=>{
//                 dispatch(getapi())
//             })
//     }
// }


export const deleteApi = (id) =>{
    return (dispatch) =>{
            axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+id,auth).then((res)=>{
                dispatch(getapi())
            })
    }
}