import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ScheduledFlightService from "../service/ScheduledFlightService";

function DeleteScheduleFlights(){
    const{ flightNumber } = useParams();
    const service = new ScheduledFlightService();
    const navigate = useNavigate();
    React.useEffect(()=>{
        service.deleteScheduledFlight(flightNumber).then(()=>{
            alert("Scheduled flight deleted");
            navigate("/scheduleFlight/admin");
        }).catch((error)=>{
            alert("Problem in deleting");
            console.log(error);
        });
    });
    return(
        <div className="alert alert-danger my-4">Deleting scheduled flight { flightNumber }</div>
    );
}

export default DeleteScheduleFlights;