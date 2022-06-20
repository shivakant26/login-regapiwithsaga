import React , { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { create_post } from "../Redux/Action/action";

const user_id = localStorage.getItem("userid");

const CreatePost = () =>{
    const[ title , setTitle ] = useState();
    const[ description , setDescription ] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const create_res = useSelector((state)=>state?.userReducer?.createpost);
    console.log("create post response",create_res?.data);

    const createPost = (e) =>{
        e.preventDefault();
        let create_post_object = {title,description,user_id}
        dispatch(create_post(create_post_object));
        if(create_res?.status === 200){
            alert(`${create_res?.data?.message[0]}`);
            navigate("../show-post");
        }
    }
    return(
        <div>
            <h3>create Post</h3>
            <div className="create-post">
                <div className="create-post-form">
                    <form>
                        <fieldset>
                        <legend>Create post</legend>
                        <div className="form-field">
                            <input type="text"
                             placeholder="Title"
                             onChange={(e)=>setTitle(e.target.value)}
                             />
                        </div>
                        <div className="form-field">
                            <input type="text"
                             placeholder="Discription"
                             onChange={(e)=>setDescription(e.target.value)}
                             />
                        </div>
                        <div className="form-field">
                            <button className="create-btn" onClick={(e)=>createPost(e)}>Create Post</button>
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;