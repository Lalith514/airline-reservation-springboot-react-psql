import React from "react";
import { useNavigate } from "react-router-dom";
import BookingService from "../service/BookingService";

function ViewBookings(){
    const service = new BookingService();
    const[bookings, changeBookings] = React.useState([]);
    const navigate = useNavigate();
    React.useEffect(()=>{
        let userId = sessionStorage.getItem('userId');
        service.getBookingByUserId(userId).then((data)=>{
            changeBookings(data.data.filter(booking => new Date(booking.flight.schedule.departureTime.slice(0,10)) > new Date(new Date().getTime() - (1000*60*60*24))));
        }).catch(()=>{
            alert("Problem in getting list of bookings.");
        })
    }, []);
    return(
        <div className="my-3">
            {bookings.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Booking Id</th>
                            <th scope="col">Flight Date</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th scope="col"> </th>
                            <th scope="col"> </th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking)=>(
                            <tr>
                                <th scope="row">{booking.bookingId}</th>
                                <td>{`${new Date(booking.flight.schedule.departureTime.slice(0,10)).getDate()} ${new Date(booking.flight.schedule.departureTime.slice(0,10)).toLocaleString('default', {month: 'short'})} ${new Date(booking.flight.schedule.departureTime.slice(0,10)).getFullYear()}`}</td>
                                <td>{booking.flight.schedule.sourceAirport.airportLocation}</td>
                                <td>{booking.flight.schedule.destinationAirport.airportLocation}</td>
                                <td><button className="btn btn-primary" onClick={()=>{navigate(`/booking/view/${booking.bookingId}`)}}><i class="fas fa-clipboard-list">&nbsp;Booking Details</i></button></td>
                                <td><button className="btn btn-warning" onClick={()=>{navigate(`/booking/update/${booking.bookingId}`)}}><i class="fas fa-pen">&nbsp;Update Details</i></button></td>
                                <td><button className="btn btn-danger" onClick={()=>{navigate(`/booking/delete/${booking.bookingId}`)}}><i class="fas fa-trash-alt">&nbsp;Cancel Booking</i></button></td>
                                <td><button className="btn btn-danger" onClick={()=>{navigate(`/booking/paynow/${booking.bookingId}`)}}><i class="fas fa-wallet">&nbsp;Pay Now</i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No bookings done by you!</span>}
        </div>
    );
}

export default ViewBookings;