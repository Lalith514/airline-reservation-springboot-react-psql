import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../service/BookingService";
import UserService from "../../user/service/UserService";
import User from "../../user/model/user";
import Booking from "../model/booking";

function ViewBookingId() {
    const { bookingId } = useParams();
    const service = new BookingService();
    const userService = new UserService();
    const [state, changeState] = React.useState({ booking: new Booking() });
    const [user, changeUser] = React.useState(new User());
    const navigate = useNavigate();
    React.useEffect(() => {
        service.getBooking(bookingId).then((data) => {
            changeState({ booking: data.data });
        }).catch(() => {
            alert("Problem in getting booking data");
        });
        userService.getUser(sessionStorage.getItem('userId')).then((data) => {
            changeUser(data.data);
        }).catch(() => {
            alert("Problem in getting user data");
        });
    }, []);
    return (
        <div className="container">
            <div className="border border-secondary p-1 my-3">
                <div className="border border-secondary p-3">
                    <h2><i class="fas fa-paper-plane"> Your booking has been confirmed.</i></h2>
                    <div className="row">
                        <div className="col-8">
                            <div className="mt-5">
                                <h4><i class="fas fa-plane-departure"> Flight Details</i></h4>
                            </div>
                            <div>
                                <strong>Carrier</strong>: {state.booking.flight.flight.carrierName} - Flight {state.booking.flight.flight.flightNumber}<br />
                                <strong>Source</strong>: {state.booking.flight.schedule.sourceAirport.airportName}, {state.booking.flight.schedule.sourceAirport.airportLocation} <br />
                                <strong>Destination</strong>: {state.booking.flight.schedule.destinationAirport.airportName}, {state.booking.flight.schedule.destinationAirport.airportLocation} <br />
                                <strong>Date</strong>: {state.booking.flight.schedule.departureTime.slice(0, 10)} <br />
                                <strong>Departure</strong>: {state.booking.flight.schedule.departureTime.slice(11, 16)}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>Arrival</strong>: {state.booking.flight.schedule.arrivalTime.slice(11, 16)} <br />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mt-5">
                                <h4><i class="fas fa-user"> Booked by</i></h4>
                            </div>
                            <div>
                                <strong>Name</strong>: {user.userName} <br />
                                <strong>Contact number</strong>: {user.mobileNumber} <br />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3><i class="fas fa-users">  Passenger Details</i></h3>
                    </div>
                    <div className="mt-2">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">PNR Number</th>
                                    <th scope="col">Passenger Name</th>
                                    <th scope="col">Passenger Age</th>
                                    <th scope="col">Passenger UIN</th>
                                    <th scope="col">Luggage (in kg)</th>
                                </tr>
                            </thead>
                            {state.booking.passengerList.map((passenger) => (
                                <tbody>
                                    <tr>
                                        <td>{passenger.pnrNumber}</td>
                                        <td>{passenger.passengerName}</td>
                                        <td>{passenger.passengerAge}</td>
                                        <td>{passenger.passengerUIN}</td>
                                        <td>{passenger.luggage}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-warning" onClick={() => { navigate(`/booking/update/${state.booking.bookingId}`) }}><i class="fas fa-pen">  Update Booking</i></button>
                        <button className="btn btn-danger mx-2" onClick={() => { navigate(`/booking/delete/${state.booking.bookingId}`) }}><i class="fas fa-trash-alt"> Cancel Booking</i></button>
                        <button className="btn btn-danger" onClick={() => { navigate(`/booking/paynow/${state.booking.bookingId}`) }}><i class="fas fa-wallet">&nbsp;Pay Now</i></button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewBookingId;