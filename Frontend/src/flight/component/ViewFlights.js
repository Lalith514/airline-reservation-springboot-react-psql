import React from "react";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import FlightService from "../service/FlightService";

function ViewFlights(){
    const service = new FlightService();
    const[flights, changeFlights] = React.useState([]);
    React.useEffect(()=>{
        service.getAllFlights().then((data)=>{
            changeFlights(data.data);
        }).catch(()=>{
            alert("Problem in getting list of planes(flights)");
        })
    }, []);
    return(
        <div className="my-3">
            {flights.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Carrier Name</th>
                            <th scope="col">Flight Model</th>
                            <th scope="col">Seat Capacity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight)=>(
                            <tr>
                                <th scope="row">{flight.flightNumber}</th>
                                <td>{flight.carrierName}</td>
                                <td>{flight.flightModel}</td>
                                <td>{flight.seatCapacity}</td>
                                {/* 
                                <td><Link className="btn btn-warning" to={{ pathname: `/flights/update/${flight.flightNumber}`}}>Update</Link></td>
                                <td><Link className="btn btn-danger" to={{ pathname: `/flights/delete/${flight.flightNumber}`}}>Delete</Link></td>
                                */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No planes present in the database.</span>}
        </div>
    );
}

export default ViewFlights;