import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import FlightService from "../service/FlightService";
import Flight from "../../flight/model/flight";

function UpdateFlights(){
    const{ flightNumber } = useParams();
    const service = new FlightService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({flight: new Flight()});
    const [error, setError] = React.useState({
        CarrierNameError: '',
        FlightModelError: '',
        SeatCapacityError: ''       
    });
    React.useEffect(()=>{
        service.getFlight(flightNumber).then((data)=>{
            changeState({flight: data.data});
        }).catch(()=>{
            alert("Problem in getting flight data");
        });
    },[]);
    return(
        <div className="my-3">
            <form>
                <h2><span className="badge badge-dark px-4 py-2">Update flight</span></h2>
                <div className="form-group">
                    <div className="text-danger">{error.FlightNumbererror}</div>
                    <input className="form-control" type="text" id="flightnumber" name="flightnumber" placeholder="Flight number"
                    defaultValue={state.flight.flightNumber}
                    readOnly
                    />
                </div>
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
                }}>Update plane</button>
            </form>
        </div>
    );
}

export default UpdateFlights;