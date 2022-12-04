import React from "react";
import { useNavigate } from "react-router";

function Redirect(){
    const navigate = useNavigate();
    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')==null){
            navigate("/");
        }else{
            navigate("/links");
        }
    })
    return(
        <div>Redirecting...</div>
    );
}

export default Redirect;