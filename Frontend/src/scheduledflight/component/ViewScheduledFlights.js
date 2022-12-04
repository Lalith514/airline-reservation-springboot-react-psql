import React from "react";
import { Link } from "react-router-dom";
import ScheduledFlightService from "../service/ScheduledFlightService";

function ViewScheduledFlights(){
    const service=new ScheduledFlightService();
    const[scheduleFlights, changescheduleFlights]=React.useState([]);
    React.useEffect(()=>{
        service.getScheduledFlights().then((data)=>{
            changescheduleFlights(data.data.filter(flight => new Date(flight.schedule.departureTime.slice(0,10)) > new Date(new Date().getTime() - (1000*60*60*24))));
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
                            {/*<th scope="col">#</th>*/}
                            <th>Flight</th>
                            <th>Date</th>
                            <th>From</th>
                            <th>Departure</th>
                            <th>To</th>
                            <th>Arrival</th>
                            <th>Available</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleFlights.map((scheduledFlight)=>(
                            <tr>
                                {/*<th scope="row">{scheduledFlight.scheduleFlightId}</th> */}
                                <td>{scheduledFlight.flight.carrierName} Flight {scheduledFlight.flight.flightNumber}</td>
                                <td>{`${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).getDate()} ${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).toLocaleString('default', {month: 'short'})} ${new Date(scheduledFlight.schedule.departureTime.slice(0,10)).getFullYear()}`}</td>
                                <td>{scheduledFlight.schedule.sourceAirport.airportLocation}</td>
                                <td>{scheduledFlight.schedule.departureTime.slice(11, 16)}</td>
                                <td>{scheduledFlight.schedule.destinationAirport.airportLocation}</td>
                                <td>{scheduledFlight.schedule.arrivalTime.slice(11, 16)}</td>
                                <td>{scheduledFlight.availableSeats}</td>
                                <td>{scheduledFlight.availableSeats>0 ? (
                                <Link className="btn btn-primary" to={{ pathname: `/booking/${scheduledFlight.scheduleFlightId}` }}><i class="fas fa-clipboard-check"></i> &nbsp;Book flight</Link>
                                ) : (
                                    <span class="text-danger">Not available</span>
                                ) }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No scheduled flights present in the database.</span>}
        </div>        
    );
}

export default ViewScheduledFlights;
