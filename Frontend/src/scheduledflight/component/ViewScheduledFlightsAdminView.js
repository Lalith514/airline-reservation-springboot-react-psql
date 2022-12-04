import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ScheduledFlightService from "../service/ScheduledFlightService";

function ViewScheduledFlightsAdminView(){
    const service=new ScheduledFlightService();
    const navigate = useNavigate();
    const[scheduleFlights, changescheduleFlights]=React.useState([]);
    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')==null) {
            alert('Unauthorised Access to Page.');
            navigate('/login');
        }else if(sessionStorage.getItem('userType')!=='Admin') {
            alert('Unauthorised Access to Page.');
            navigate('/links');
        }
        service.getScheduledFlights().then((data)=>{
            changescheduleFlights(data.data);
        }).catch(()=>{
            alert("problem in getting list of Scheduled Flights");
        })
    },[]);
    return(
        <div className="my-3">
            {scheduleFlights.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th>Flight</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Date</th>
                            <th>Departure</th>
                            <th>Arrival</th>
                            <th>Available</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleFlights.map((scheduledFlight)=>(
                            <tr>
                                <th scope="row">{scheduledFlight.scheduleFlightId}</th>
                                <td>{scheduledFlight.flight.carrierName} Flight {scheduledFlight.flight.flightNumber}</td>
                                <td>{scheduledFlight.schedule.sourceAirport.airportLocation}</td>
                                <td>{scheduledFlight.schedule.destinationAirport.airportLocation}</td>
                                <td>{`${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).getDate()} ${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).toLocaleString('default', {month: 'short'})} ${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).getFullYear()}`}</td>
                                <td>{scheduledFlight.schedule.departureTime.slice(11,16)}</td>
                                <td>{scheduledFlight.schedule.arrivalTime.slice(11,16)}</td>
                                <td>{scheduledFlight.availableSeats}</td>
                                { /*<td><Link className="btn btn-warning" to={{ pathname: `/scheduleFlight/admin/update/${scheduledFlight.scheduleFlightId}`}}><i class="fas fa-pen"></i> &nbsp;Update</Link></td> */ }
                                <td><Link className="btn btn-danger" to={{ pathname: `/scheduleFlight/admin/delete/${scheduledFlight.scheduleFlightId}`}}><i class="fas fa-trash-alt"></i> &nbsp;Cancel Flight</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No scheduled flights present in the database.</span>}
        </div>        
    );
}

export default ViewScheduledFlightsAdminView;
