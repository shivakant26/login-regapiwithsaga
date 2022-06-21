import React, { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delete_post, edit_post, show_all_post } from "../Redux/Action/action";

const ShowPost = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allpost_Resposne = useSelector((state)=>state?.userReducer?.showallpost?.data?.posts);
    console.log(33333,allpost_Resposne);

    const deletePost = (id) =>{
      if (window.confirm('Are You Sure to Delele?')) {
        console.log("deleteble id",id);
        dispatch(delete_post(id))
      } else {
        console.log('Nothing');
      }
      
    }

    const editPost = (id) =>{
      console.log("editable id",id);
      navigate(`../create-post/${id}`);
      dispatch(edit_post(id));
    }

    useEffect(()=>{
        dispatch(show_all_post())
    },[])
    return(
        <div>
            <h3>Show Post</h3>
            <div className="table-data">
            {
                allpost_Resposne ? <table>
                <thead>
                  <tr>
                    <th>PostID</th>
                    <th>title</th>
                    <th>Discription</th>
                    <th>Opration</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allpost_Resposne.map((item,id)=>
                    <tr key={id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>
                        <button onClick={()=>editPost(item.id)}>Edit</button>
                        <button onClick={()=>deletePost(item.id)}>Delete</button>
                      </td>
                    </tr>
                    )
                  }
                </tbody>
              </table> : "no"
            }
            </div>
        </div>
    )
}

export default ShowPost;