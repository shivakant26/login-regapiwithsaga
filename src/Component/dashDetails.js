import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { total_user } from "../Redux/Action/action";

const DashDetails = () => {
    const dispatch = useDispatch();
    const responce = useSelector((state)=>state?.userReducer?.totaluser?.data?.users)
    let count = responce?.length;
    console.log("all user",responce);
    useEffect(()=>{
        dispatch(total_user())
    },[])
    return (
        <div>
            <div className="my-dash-details">
                <div className="content-heading">
                    <h2>Persnoal Progress</h2>
                </div>
                <div className="card">
                    <h3>Total User</h3>
                    <h4>{count}</h4>
                </div>
            </div>
        </div>
    )
}

export default DashDetails;