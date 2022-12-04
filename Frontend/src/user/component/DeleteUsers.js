import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../service/UserService";

function DeleteUsers(){
    const{ id } = useParams();
    const service = new UserService();
    const navigate = useNavigate();
    React.useEffect(()=>{
        service.deleteUser(id).then(()=>{
            alert("User deleted");
            navigate("/users");
        }).catch((error)=>{
            alert("Problem in deleting error");
            console.log(error);
        });
    });
    return(
        <div className="alert alert-danger my-4">Deleting user { id }</div>
    );
}

export default DeleteUsers;