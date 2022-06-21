import React , { useEffect, useState } from "react";
import { login_user } from "../Redux/Action/action";
import { useDispatch , useSelector } from "react-redux";

const Home = () => {
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();
    const dispatch = useDispatch();
    const login_response = useSelector((state)=>state);
    console.log(1051,login_response);
    
    const login = (e) =>{
        e.preventDefault();
        let login_object = { email, password }
        dispatch(login_user(login_object))
        console.log(31231231,login_object)
        
    }
    useEffect(()=>{
        if(login_response?.userReducer?.logindata?.status === 200){
            alert(`${login_response?.userReducer?.logindata?.data?.message[0]}`)
            window.location.href = "/dashboard"
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
                             onChange={(e)=>setEmail(e.target.value)}
                              />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="password"
                             onChange={(e)=>setPassword(e.target.value)}
                              />
                        </div>
                        <div className="form-field">
                            <button className="login-btn" onClick={(e)=>login(e)}>Login</button>
                        </div>
                        <div className="reg-link">
                            <p>If not Register please<a href="/register">Register</a>first.</p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Home;