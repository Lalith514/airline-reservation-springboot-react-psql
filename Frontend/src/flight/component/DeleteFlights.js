import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import FlightService from "../service/FlightService";

function DeleteFlights(){
    const{ flightNumber } = useParams();
    const service = new FlightService();
    const navigate = useNavigate();
    React.useEffect(()=>{
        service.deleteFlight(flightNumber).then(()=>{
            alert('Flight '+ flightNumber + ' is deleted');
            navigate("/flights");
        }).catch(()=>{
            alert("Problem in getting data, likely because it's a foreign key.");
        });
    }, []);
    return(
        <div className="alert alert-danger my-4">Deleting flight { flightNumber }</div>
    );
}

export default DeleteFlights;