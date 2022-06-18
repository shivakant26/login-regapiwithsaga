import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { register_user } from "../Redux/Action/action";
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


const Registration = () => {
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const [ confirm_password  , setConfirmPassword ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const response = useSelector((state)=>state?.userReducer);
    // console.log(1321321,response.data.data.message)

    const Register = (e) =>{
        e.preventDefault();
       let object = {email,password,confirm_password}
       console.log(121321,object);
       dispatch(register_user(object));
    }
    useEffect(()=>{
        if(response?.data?.status === 200){
            toast(`${response?.data?.data?.message[0]}`,
           {position: toast.POSITION.TOP_CENTER})
            navigate("/");
        }
    },[])
    return (
        <div className="home-page">
            <div className="form-section">
                <div className="login-form">
                    <form>
                        <div className="form-field">
                            <input type="text"
                             placeholder="email"
                             onChange={(e)=>{setEmail(e.target.value)}} 
                             />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="password"
                             onChange={(e)=>{setPassword(e.target.value)}} 
                              />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="confirm_password"
                             onChange={(e)=>{setConfirmPassword(e.target.value)}}  
                             />
                        </div>
                        <div className="form-field">
                            <button onClick={(e)=>Register(e)}>Register</button>
                        </div>
                        <div className="reg-link">
                            <p>If already Register please<a href="/">Loign</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Registration;