import React from "react";
import Airport from "../model/airport";
import { useNavigate } from "react-router-dom";
import AirportService from "../service/AirportService";

function AddAirports(){
    const service = new AirportService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({airport: new Airport()});
    const [error, setError] = React.useState({
        AirportNameError: '',
        AirportLocationError: ''   
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
                <h2><span className='badge badge-dark px-4 py-2'><i class="fas fa-map-marker-alt"></i>&nbsp;Airport form</span></h2>
                <div className='form-group'>
                    <label>Airport Name</label>
                    <div className="text-danger">{error.AirportNameError}</div>
                    <input className="form-control" type="text" id="airportName" name="airportName" placeholder="Enter airport name"
                    value = {state.airport.airportName}
                    onChange = {(event)=>changeState({airport: {...state.airport, airportName: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Airport Location</label>
                    <div className="text-danger">{error.AirportLocationError}</div>
                    <input className="form-control" type="text" id="airportLocation" name="airportLocation" placeholder="Enter airport location"
                    value = {state.airport.airportLocation}
                    onChange = {(event)=>changeState({airport: {...state.airport, airportLocation: event.target.value}})}
                    />
                </div>
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    let err = {};
                    let isError = false;
                    if (!state.airport.airportName) {
                        err.AirportNameError = "Airport name is required.";
                        isError = true;
                    }
                    if (!state.airport.airportLocation) {
                        err.AirportLocationError = "Airport location is required.";
                        isError = true;
                    }
                    if(!isError){
                        service.addAirport(state.airport).then(()=>{
                            navigate('/airports')
                        }).catch(()=>{
                            alert("Problem in adding airport.")
                        });
                    }else{
                        setError(err);
                    }
                }}><i class="fas fa-map-marker-alt"></i>&nbsp; Add airport</button>
            </form>
        </div>
    );
}

export default AddAirports;