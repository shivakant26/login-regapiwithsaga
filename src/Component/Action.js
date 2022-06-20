import React from "react";
import { Outlet , Link } from 'react-router-dom';
const Action = () => {
    return(
        <div>
            <div className="action-heading">
                <div className="action-heading">
                    <div className="action-list">
                        <ul>
                            <li><Link to="/dashboard/action/create-post">Create Post</Link></li>
                            <li><Link to="/dashboard/action/show-post">Show Post </Link></li>
                        </ul>
                    </div>
                    <div className="list-content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Action;