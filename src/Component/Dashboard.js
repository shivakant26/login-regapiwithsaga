import React from "react";
import { GiFireDash ,GiEgyptianProfile } from 'react-icons/gi';
import { SiExercism } from 'react-icons/si';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { GrServices } from 'react-icons/gr';
import { GiHoodie } from 'react-icons/gi';
import { Outlet , Link } from "react-router-dom";

const Dashborad = () =>{
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userid");
        window.location.href="/";
    }
    return(
        <div>
            <div className="dashboard-page">
                    <div className="dash-sidebar">
                        <div className="user-profile-image">
                            <img src={require("../assets/avtar.jpg")} alt="profile-image"/>
                            <h5>Kenn Walting</h5>
                            <p>kenn124@gmail.com</p>
                        </div>
                        <div className="dashboard-controls">
                            <ul>
                                <li><Link to="/dashboard/dash-details"><span><GiFireDash/></span>Dashborad</Link></li>
                                <li><a href="#"><span><GiEgyptianProfile/></span>Account Profile</a></li>
                                <li><a href="#"><span><SiExercism /></span>Excersice Plan</a></li>
                                <li><Link to="/dashboard/action"><span><GiHoodie/></span>Action</Link></li>
                                <li><a href="#"><span><GiHoodie/></span>Diet Plan</a></li>
                                <li><a href="#"><span><MdOutlineSubscriptions /></span>Subscription</a></li>
                                <li><a href="#"><span><GrServices/></span>Extra Services</a></li>
                            </ul>
                        </div>
                        <div className="logout-btn">
                            <a onClick={()=>logout()}>Logout</a>
                        </div>
                    </div>
                    <div className="dash-content">
                        <div className="content-heading">
                            <h1>Welcome to Dashboard !</h1>
                        </div>
                        <Outlet />
                    </div>
                </div>
        </div>
    )
}

export default Dashborad;