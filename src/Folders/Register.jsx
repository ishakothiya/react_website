// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import { RiAccountCircleFill } from "react-icons/ri"
import { FaLock } from "react-icons/fa";
import '../Folders/Css/Login.css'
import axios from 'axios';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function Register (props){

    let [obj , setobj] = useState({"roleId" : 2, "profileImageBase64" : "string",
"userRole" :[
    {
        "userRoleId" : 0,
        "userId" : 0,
        "roleType" : 1
    }
 ]})
    const navigate = useNavigate()
    let [blankobj, setblankobj] = useState({});

    const register = ()=>{
        axios.post("https://iris-api.mycodelibraries.com/api/User/CreateUser",obj).then((res) => {
            if(res.data.responseData){
                // localStorage.setItem('obj')
                // localStorage.setItem('token', res.data.responseData.token)
                // props.setislogin(true);
                navigate('/login');
            }
            else{
                alert('Please enter valid email')
            }

        }).catch((err)=>{
            console.log(err)
        })

        obj = blankobj;
        setobj({...obj});

    }

    const getdata = (e)=>{
        if(e.target.type == 'file'){
            obj[e.target.name] = e.target.file[0];
            blankobj[e.target.name] = "";
        }else{
            obj[e.target.name] = e.target.value;
            blankobj[e.target.name] = "";
        }
       
        setobj({ ...obj });
        setblankobj({ ...blankobj });
       
    }

    
    return (
        <>
         <div id='login_body' >
         <div className='main'>
            <div id='login_div'>
                <h1>Register Here</h1>
                <form>
                    <div className='input-box'>

                        <span class='icon'><MdAttachEmail/></span>
                        <input type='text' name='email'  
                        placeholder='Email'
                        onChange={getdata} value={obj.email ?? ''}/>
                    </div>
                    <div className='input-box'>

                        <span class='icon'><RiAccountCircleFill/></span>
                        <input type='text' name='fullName'  
                        placeholder='Fullname'
                        onChange={getdata} value={obj.fullName ?? ''}/>
                    </div>
                    <div className='input-box'>

                        <span class='icon'><FaPhoneAlt/></span>
                        <input type='text' name='mobileNumber'  
                        placeholder='Mobile Number'
                        onChange={getdata} value={obj.mobileNumber ?? ''}/>
                    </div>
                    <div className='input-box'>
                        <span class='icon'><FaLock /></span>
                        <input 
                        placeholder='Password'
                        type='password' name='password'  onChange={getdata} value={obj.password ?? ''}/>       
                    </div>
                 


                  

                    <button id='btn' onClick={register} type='button'>Create Account</button>


                </form>
            </div>
         </div>
         </div>

        </>
    )
}

export default Register