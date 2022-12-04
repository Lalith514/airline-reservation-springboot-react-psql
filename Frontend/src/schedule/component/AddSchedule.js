import React from "react";
import Schedule from "../model/schedule";
import { useNavigate } from "react-router-dom";
import ScheduleService from "../service/ScheduleService";
import AirportService from "../../airport/service/AirportService";

function AddSchedule(){
    const service = new ScheduleService();
    const airportService = new AirportService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({schedule: new Schedule()});
    const[airports, changeAirports] = React.useState([]);
    const[sourceAirportCode, changeSourceAirportCode] = React.useState();
    const[destinationAirportCode, changeDestinationAirportCode] = React.useState();
    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')==null) {
            alert('Unauthorised Access to Page.');
            navigate('/login');
        }
        airportService.getAllAirports().then((data)=>{
            changeAirports(data.data);
        }).catch(()=>{
            alert("Problem in getting all the airports.");
        });
    }, []);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'><i class="far fa-calendar-alt"></i> &nbsp;Create a schedule</span></h2>
                <div className="form-row">
                    <div className='col'>
                        <label>From</label>
                        <select class="form-control" id="sourceAirportCode"
                        value = {sourceAirportCode}
                        onChange = {(event)=>changeSourceAirportCode(event.target.value)}>
                            <option>Select source</option>
                            {airports.map((airport)=>(
                                <option value={airport.airportCode}>{airport.airportLocation}</option>
                            ))}
                        </select>
                    </div>
                    <div className='col'>
                        <label>To</label>
                        <select class="form-control" id="destinationAirportCode"
                        value = {destinationAirportCode}
                        onChange = {(event)=>changeDestinationAirportCode(event.target.value)}>
                            <option>Select destination</option>
                            {airports.map((airport)=>(
                                <option value={airport.airportCode}>{airport.airportLocation}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <br />
                <div className="form-row">
                    <div className="col">
                        <div className="form-group">
                            <label>Departure Time</label>
                            <input className="form-control" type="datetime-local" id="departureTime" name="departureTime" placeholder="Enter departure time"
                            value = {state.schedule.departureTime}
                            onChange = {(event)=>changeState({schedule: {...state.schedule, departureTime: event.target.value}})}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Arrival Time</label>
                            <input className="form-control" type="datetime-local" id="arrivalTime" name="arrivalTime" placeholder="Enter arrival time"
                            value = {state.schedule.arrivalTime}
                            onChange = {(event)=>changeState({schedule: {...state.schedule, arrivalTime: event.target.value}})}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    service.addSchedule(state.schedule, sourceAirportCode, destinationAirportCode).then(()=>{
                        alert("Schedule added");
                        navigate("/links");
                    }).catch(()=>{
                        alert("Problem in adding schedule");
                    })
                }}>Add schedule</button>
            </form>
        </div>
    );
}

export default AddSchedule;