import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ScheduledFlightService from "../service/ScheduledFlightService";
import ScheduledFlight from "../model/scheduledflight";
import FlightService from "../../flight/service/FlightService";
import ScheduleService from "../../schedule/service/ScheduleService";

function UpdateScheduledFlights(){
    const service = new ScheduledFlightService();
    const flightService = new FlightService();
    const scheduleService = new ScheduleService();
    const navigate = useNavigate();
    const{ flightNumber } = useParams();
    const[state, changeState] = React.useState({scheduledFlight: new ScheduledFlight()});
    const[flights, changeFlights] = React.useState([]);
    const[schedules, changeSchedules] = React.useState([]);
    const[scheduleId, changeScheduleId] = React.useState([]);
    const[flightId, changeFlightId] = React.useState();
    React.useEffect(()=>{
        service.findScheduledFlight(flightNumber).then((data)=>{
            changeState({scheduledFlight: data.data});
        }).catch(()=>{
            alert("Problem in getting scheuded flight data");
        })
        flightService.getAllFlights().then((data)=>{
            changeFlights(data.data);
        }).catch(()=>{
            alert("Problem in getting list of planes(flights)");
        })
        scheduleService.getSchedules().then((data)=>{
            changeSchedules(data.data);
        }).catch(()=>{
            alert("Problem in getting schedules");
        })
    }, []);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'>Update scheduled flight {state.scheduledFlight.scheduleFlightId}</span></h2>
                <div class="form-group">
                    <label>Schedule Flight Id</label>
                    <input className="form-control" type="text" id="flightnumber" name="flightnumber" placeholder="Scheduled Flight ID" value={state.scheduledFlight.scheduleFlightId} readOnly />
                </div>
                <div class="form-group">
                    <label>Schedule</label>
                    <select class="form-control" id="scheduleId"
                    value = {state.scheduledFlight.schedule.scheduleId}
                    onChange = {(event)=>changeScheduleId(event.target.value)}>
                    <option>Choose a schedule</option> 
                    {schedules.map((schedule)=>(
                        <option value={schedule.scheduleId}>{schedule.sourceAirport.airportLocation} to {schedule.destinationAirport.airportLocation}, at {new Date(schedule.departureTime).getHours()}:{new Date(schedule.departureTime).getMinutes()} to {new Date(schedule.arrivalTime).getHours()}:{new Date(schedule.arrivalTime).getMinutes()}</option>  
                    ))}
                    </select>
                </div>
                <div class="form-group">
                    <label>Flight</label>
                    <select class="form-control" id="flightId"
                    value = {state.scheduledFlight.flight.flightNumber}
                    onChange = {(event)=>{
                        changeFlightId(event.target.value);
                        flightService.getFlight(event.target.value).then((data)=>{
                            changeState({scheduledFlight: {...state.scheduledFlight, availableSeats: data.data.seatCapacity}});
                        }).catch(()=>{
                            alert("Change error.");
                        })
                    }}>
                    <option>Choose a flight</option> 
                    {flights.map((flight)=>(
                        <option value={flight.flightNumber}>Flight {flight.flightNumber}, {flight.carrierName}. {flight.flightModel}, seat capacity: {flight.seatCapacity}</option>  
                    ))}
                    </select>
                </div>
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    service.addScheduledFlight(state.scheduledFlight, scheduleId, flightId).then(()=>{
                        alert("Scheduled Flight added");
                        navigate("/links")
                    }).catch(()=>{
                        alert("Problem in adding scheduled flights.")
                    })
                    
                }}>Add schedule</button>
            </form>
        </div>
    );
}

export default UpdateScheduledFlights;