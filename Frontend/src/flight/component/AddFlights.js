import React from "react";
import Flight from "../model/flight";
import { useNavigate } from "react-router-dom";
import FlightService from "../service/FlightService";

function AddFlights(){
    const service = new FlightService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({flight: new Flight()});
    const [error, setError] = React.useState({
        CarrierNameError: '',
        FlightModelError: '',
        SeatCapacityError: ''       
    });
    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')==null) {
            alert('Unauthorised Access to Page.');
            navigate('/login');
        }
    },[]);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'><i class="fas fa-plane"></i>&nbsp;Plane form</span></h2>
                <div className='form-group'>
                    <label>Carrier Name</label>
                    <div className="text-danger">{error.CarrierNameError}</div>
                    <input className="form-control" type="text" id="carrierName" name="carrierName" placeholder="Enter carrier name"
                    value = {state.flight.carrierName}
                    onChange = {(event)=>changeState({flight: {...state.flight, carrierName: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Flight Model</label>
                    <div className="text-danger">{error.FlightModelError}</div>
                    <input className="form-control" type="text" id="flightModel" name="flightModel" placeholder="Enter flight model"
                    value = {state.flight.flightModel}
                    onChange = {(event)=>changeState({flight: {...state.flight, flightModel: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Seat Capacity</label>
                    <div className="text-danger">{error.SeatCapacityError}</div>
                    <input className="form-control" type="text" id="seatCapacity" name="seatCapacity" placeholder="Enter seat capacity"
                    value = {state.flight.seatCapacity}
                    onChange = {(event)=>changeState({flight: {...state.flight, seatCapacity: event.target.value}})}
                    />
                </div>
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    let err = {};
                    let isError = false;
                    if (!state.flight.carrierName) {
                        err.CarrierNameError = "Carrier name is required.";
                        isError = true;
                    }
                    if (!state.flight.flightModel) {
                        err.FlightModelError = "Flight model is required.";
                        isError = true;
                    }
                    if (!state.flight.seatCapacity) {
                        err.SeatCapacityError = "Seat capacity is required.";
                        isError = true;
                    }
                    if(!isError){
                        service.addFlight(state.flight).then(()=>{
                            navigate('/flights')
                        }).catch(()=>{
                            alert("Problem in adding planes.")
                        });
                    }else{
                        setError(err);
                    }
                }}><i class="fas fa-plane"></i>&nbsp;Add plane</button>
            </form>
        </div>
    );
}

export default AddFlights;