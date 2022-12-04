import React from "react";
import { Link } from "react-router-dom";
import AirportService from "../../airport/service/AirportService";
import ScheduledFlightService from "../service/ScheduledFlightService";

function ViewScheduledFlightsAirports(){
    const service=new ScheduledFlightService();
    const airportService = new AirportService();
    const[scheduleFlights, changescheduleFlights]=React.useState([]);
    const[airports, changeAirports] = React.useState([]);
    const[sourceAirportCode, changeSourceAirportCode] = React.useState();
    const[destinationAirportCode, changeDestinationAirportCode] = React.useState();
    const[searchDate, changeSearchDate] = React.useState(new Date());
    let jumbotronStyle = {backgroundColor: "#FFFFB0"}
    const [error, setError] = React.useState({
        sourceError: '',
        destError: ''
    });
    React.useEffect(()=>{
        airportService.getAllAirports().then((data)=>{
            changeAirports(data.data);
        }).catch(()=>{
            alert("Problem in getting all the airports.");
        });
    }, []);
    return(
        <div>
            <div className="jumbotron text-center" style={jumbotronStyle}>
                <h3><i class="fas fa-paper-plane mr-1"></i>Supporting You Through Your Travel Journey</h3>
                <h5>Find the cheapest flights with premium facilities</h5>
            </div>
            <div className="form-row my-3">
                <div className='col'>
                    <select class="form-control" id="sourceAirportCode"
                    value = {sourceAirportCode}
                    onChange = {(event)=>changeSourceAirportCode(event.target.value)}>
                        <option>Select source</option>
                        {airports.map((airport)=>(
                            <option value={airport.airportCode}>{airport.airportLocation}</option>
                        ))}
                    </select>
                    <div className="text-danger">{error.sourceError}</div>
                </div>
                <div className='col'>
                    <select class="form-control" id="destinationAirportCode"
                    value = {destinationAirportCode}
                    onChange = {(event)=>changeDestinationAirportCode(event.target.value)}>
                        <option>Select destination</option>
                        {airports.map((airport)=>(
                            <option value={airport.airportCode}>{airport.airportLocation}</option>
                        ))}
                    </select>
                    <div className="text-danger">{error.destError}</div>
                </div>
                <div className="col">
                    <input className="form-control" type="date" id="searchDate" name="searchDate" placeholder="Enter search date"
                    min={`${new Date().getFullYear()}-${new Date().getMonth()<10 ? 0 : null}${new Date().getMonth() + 1}-${new Date().getDate()<10 ? 0 : null}${new Date().getDate()}`}
                    max={`${new Date(new Date().getTime()+(15*24*60*60*1000)).getFullYear()}-${new Date(new Date().getTime()+(15*24*60*60*1000)).getMonth()<10 ? 0 : ''}${new Date(new Date().getTime()+(15*24*60*60*1000)).getMonth() + 1}-${new Date(new Date().getTime()+(15*24*60*60*1000)).getDate()<10 ? 0 : ''}${new Date(new Date().getTime()+(15*24*60*60*1000)).getDate()}`}
                    value = {searchDate}
                    onChange = {(event)=>changeSearchDate(event.target.value)}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-success form-control" onClick={(event)=>{
                        event.preventDefault();
                        let err = {};
                        let isError = false;
                        if(!sourceAirportCode) {
                            err.sourceError = "Choose the source";
                            isError = true;
                        }
                        if(!destinationAirportCode) {
                            err.destError = "Choose the destination";
                            isError = true;
                        }
                        if(!isError){
                            service.searchFlightsBetweenSourceAndDest(sourceAirportCode, destinationAirportCode).then((data)=>{
                                changescheduleFlights(data.data.filter(flight => flight.schedule.departureTime.slice(0,10)===searchDate));
                            }).catch(()=>{
                                alert("Problem in getting the flights.")
                            });
                        }else{
                            setError(err);
                        }
                    }}><i class="fas fa-search"></i> &nbsp;Search</button>
                </div>
            </div>

            {scheduleFlights.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
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
                            <th>{scheduledFlight.flight.carrierName}</th>
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
            ) : <span className='text-danger'>No flights currently present.</span>}
            
        </div>     
    );
}

export default ViewScheduledFlightsAirports;
