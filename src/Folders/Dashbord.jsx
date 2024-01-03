import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../Folders/Css/Dashbord.css'
import HOC from "./HOC";



function Dashbord (props) {
    const navigate = useNavigate()

    const close = ()=>{
        localStorage.removeItem('islogin' )
        props.setislogin(false)
        navigate('/login')
    }

    return (

        <>
       
       <button type="button" onClick={close}>closew</button>
               
            
        </>
    );
}

export default  HOC(Dashbord)