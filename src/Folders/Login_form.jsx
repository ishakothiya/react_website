// import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom' 
import { RiAccountCircleFill } from "react-icons/ri"
import { FaLock } from "react-icons/fa";
// import '../Folders/Css/Login.css'
import axios from 'axios';


function Login_form (props){

    const [obj , setobj] = useState({})
    const navigate = useNavigate()
    let [blankobj, setblankobj] = useState({});

    const login = ()=>{

        axios.post("https://iris-api.mycodelibraries.com/api/User/LoginAuthenticate",obj).then((res) => {
            if(res.data.isSuccess){
                localStorage.setItem('islogin' , true)
                localStorage.setItem('token', res.data.responseData.token)
                props.setislogin(true);
                navigate('/');
            }
            else{
                alert(res.data.errorMessage)
            }

        })

    }

    const getdata = (e)=>{
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = "";
        setobj({ ...obj });
        setblankobj({ ...blankobj });
    }

    
    return (
        <>
         <div id='login_body'>
         <div className='main'>
            <div id='login_div'>
                <h1>LOGIN</h1>
                <form>
                    <div className='input-box'>
                        <span class='icon'><RiAccountCircleFill/></span>
                        <input type='text' name='email'  
                        placeholder='Email'
                        onChange={getdata} value={obj.email ?? ''}/>
                    
                    </div>
                    <div className='input-box'>
                        <span class='icon'><FaLock /></span>
                        <input 
                        placeholder='Password'
                        type='password' name='password'  onChange={getdata} value={obj.password ?? ''}/>
                            
                    </div>

                    <div className='check'>
                    <NavLink to='/Registration'><p>Forget Password??</p></NavLink>    
                    </div>

                    <button id='btn' onClick={login} type='button'>Login</button>

                    <div className='register'>
                    Don't have an account ??
                    <NavLink to='/Registration'><p>Sign Up</p></NavLink>    
                    </div>


                </form>
            </div>
         </div>
         </div>


{/* <section class="vh-100" style="background-color: #9A616D;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                      style="color: #393f81;">Register here</a></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}

        </>
    )
}

export default Login_form