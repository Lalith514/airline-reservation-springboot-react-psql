import React from "react";
import AirportService from "../service/AirportService";

function ViewAirports(){
    const service = new AirportService();
    const[airports, changeAirports] = React.useState([]);
    React.useEffect(()=>{
        service.getAllAirports().then((data)=>{
            changeAirports(data.data);
        }).catch(()=>{
            alert("Problem in getting list of airports");
        })
    }, []);
    return(
        <div className="my-3">
            {airports.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Airport Name</th>
                            <th scope="col">Airport Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airports.map((airport)=>(
                            <tr>
                                <th scope="row">{airport.airportCode}</th>
                                <td>{airport.airportName}</td>
                                <td>{airport.airportLocation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No airports present in the database currently.</span>}
        </div>
    );
}

export default ViewAirports;