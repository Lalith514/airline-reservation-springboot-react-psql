import React from "react";
import { useNavigate, useParams } from "react-router";
import Booking from "../model/booking";
import Passenger from "../../passenger/model/passenger";
import BookingService from "../service/BookingService";
import ScheduledFlight from "../../scheduledflight/model/scheduledflight";
import ScheduledFlightService from "../../scheduledflight/service/ScheduledFlightService";

function AddBooking(){
    const navigate = useNavigate();
    const service = new BookingService();
    const flightService = new ScheduledFlightService();

    const[state, changeState] = React.useState({booking: new Booking()});
    const{ scheduleFlightId } = useParams();
    const[flight, changeFlight] = React.useState(new ScheduledFlight());
    const[numOfPassengers, changeNumOfPassengers] = React.useState(0);

    const[passengerName1, changePassengerName1] = React.useState();
    const[passengerAge1, changePassengerAge1] = React.useState();
    const[passengerUIN1, changePassengerUIN1] = React.useState();
    const[luggage1, changeLuggage1] = React.useState();

    const[passengerName2, changePassengerName2] = React.useState();
    const[passengerAge2, changePassengerAge2] = React.useState();
    const[passengerUIN2, changePassengerUIN2] = React.useState();
    const[luggage2, changeLuggage2] = React.useState();

    const[passengerName3, changePassengerName3] = React.useState();
    const[passengerAge3, changePassengerAge3] = React.useState();
    const[passengerUIN3, changePassengerUIN3] = React.useState();
    const[luggage3, changeLuggage3] = React.useState();

    const [error, setError] = React.useState({
        passengerName1Error: '',
        passengerAge1Error: '',
        passengerUIN1Error: '',
        luggage1Error: '',
        passengerName2Error: '',
        passengerAge2Error: '',
        passengerUIN2Error: '',
        luggage2Error: '',
        passengerName3Error: '',
        passengerAge3Error: '',
        passengerUIN3Error: '',
        luggage3Error: '',    
    });

    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')==null) {
            alert('Unauthorised Access to Page.');
            navigate('/login');
        }
        flightService.findScheduledFlight(scheduleFlightId).then((data)=>{
            changeFlight(data.data);
        }).catch(()=>{
            alert("Problem in getting flight data.");
        });
    },[]);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'><i class="fas fa-clipboard-check"></i> &nbsp;Book Tickets</span></h2>
                <div className="form-row">
                    <div className='col'>
                        <label><i class="fas fa-user"></i>&nbsp;User Id</label>
                        <input className="form-control" type="text" id="userId" name="userId" placeholder="Enter user Id"
                        value = {sessionStorage.getItem('userId')}
                        readOnly
                        />
                    </div>
                    <div className='col'>
                        <label><i class="fab fa-avianex"></i>&nbsp;Scheduled Flight Id</label>
                        <input className="form-control" type="text" id="scheduleFlightId" name="scheduleFlightId" placeholder="Enter schedule flight Id"
                        value = {scheduleFlightId}
                        readOnly
                        />
                    </div>
                </div>
                <div className="form-row my-2">
                    <div className='col'>
                        <label><i class="far fa-calendar-alt"></i>&nbsp;Booking Date</label>
                        <input className="form-control" type="text" id="bookingDate" name="bookingDate" placeholder="Enter booking date"
                        value = {state.booking.bookingDate}
                        readOnly
                        />
                    </div>
                    <div className='col'>
                        <label><i class="fas fa-rupee-sign"></i>&nbsp;Ticket Cost</label>
                        <input className="form-control" type="text" id="ticketCost" name="ticketCost" placeholder="Enter ticket cost"
                        value = {numOfPassengers * 1000}
                        readOnly
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label><i class="fas fa-users"></i>&nbsp;Number of passengers</label>
                    <select class="form-control" id="numberOfPassengers"
                    value = {numOfPassengers}
                    onChange = {(event)=>changeNumOfPassengers(event.target.value)}>
                        <option value={0}>Choose number of passengers</option>
                        <option value={1}>1</option>
                        {flight.availableSeats>1 ? (
                            <option value={2}>2</option>
                        ) : null}
                        {flight.availableSeats>2 ? (
                            <option value={3}>3</option>
                        ) : null}
                    </select>
                </div>
                { numOfPassengers>0 ? (
                    <div className="border p-3 mt-4 mb-2">
                        <label><i class="fas fa-user-friends"></i>&nbsp;Passenger 1 Data</label>
                        <div className='form-group'>
                            <div className="text-danger">{error.passengerName1Error}</div>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName1}
                            onChange={(event)=>changePassengerName1(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="text-danger">{error.passengerAge1Error}</div>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge1}
                                onChange={(event)=>changePassengerAge1(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.passengerUIN1Error}</div>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN1}
                                onChange={(event)=>changePassengerUIN1(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.luggage1Error}</div>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage1}
                                onChange={(event)=>changeLuggage1(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
                { numOfPassengers>1 ? (
                    <div className="border p-3 my-2">
                        <label><i class="fas fa-user-friends"></i>&nbsp;Passenger 2 Data</label>
                        <div className='form-group'>
                            <div className="text-danger">{error.passengerName2Error}</div>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName2}
                            onChange={(event)=>changePassengerName2(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="text-danger">{error.passengerAge2Error}</div>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge2}
                                onChange={(event)=>changePassengerAge2(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.passengerUIN2Error}</div>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN2}
                                onChange={(event)=>changePassengerUIN2(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.luggage2Error}</div>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage2}
                                onChange={(event)=>changeLuggage2(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
                { numOfPassengers>2 ? (
                    <div className="border p-3 my-2">
                        <label><i class="fas fa-user-friends"></i>&nbsp;Passenger 3 Data</label>
                        <div className='form-group'>
                            <div className="text-danger">{error.passengerName3Error}</div>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passenger name"
                            value = {passengerName3}
                            onChange={(event)=>changePassengerName3(event.target.value)}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <div className="text-danger">{error.passengerAge3Error}</div>
                                <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passenger age"
                                value = {passengerAge3}
                                onChange={(event)=>changePassengerAge3(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.passengerUIN3Error}</div>
                                <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passenger UIN"
                                value = {passengerUIN3}
                                onChange={(event)=>changePassengerUIN3(event.target.value)}
                                />
                            </div>
                            <div className="col">
                                <div className="text-danger">{error.luggage3Error}</div>
                                <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage"
                                value = {luggage3}
                                onChange={(event)=>changeLuggage3(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    let err = {};
                    let isError = false;
                    if(numOfPassengers>0){
                        if (!passengerName1) {
                            err.passengerName1Error = "Passenger name is required.";
                            isError = true;
                        }
                        if (!passengerAge1) {
                            err.passengerAge1Error = "Passenger age is required.";
                            isError = true;
                        }
                        if (!passengerUIN1) {
                            err.passengerUIN1Error = "Passenger UIN is required.";
                            isError = true;
                        }
                        if (!luggage1) {
                            err.luggage1Error = "Luggage is required.";
                            isError = true;
                        }
                    }
                    if(numOfPassengers>1){
                        if (!passengerName2) {
                            err.passengerName2Error = "Passenger name is required.";
                            isError = true;
                        }
                        if (!passengerAge2) {
                            err.passengerAge2Error = "Passenger age is required.";
                            isError = true;
                        }
                        if (!passengerUIN2) {
                            err.passengerUIN2Error = "Passenger UIN is required.";
                            isError = true;
                        }
                        if (!luggage2) {
                            err.luggage2Error = "Luggage is required.";
                            isError = true;
                        }
                    }
                    if(numOfPassengers>2){
                        if (!passengerName3) {
                            err.passengerName3Error = "Passenger name is required.";
                            isError = true;
                        }
                        if (!passengerAge3) {
                            err.passengerAge3Error = "Passenger age is required.";
                            isError = true;
                        }
                        if (!passengerUIN3) {
                            err.passengerUIN3Error = "Passenger UIN is required.";
                            isError = true;
                        }
                        if (!luggage3) {
                            err.luggage3Error = "Luggage is required.";
                            isError = true;
                        }
                    }
                    if(!isError){
                        if(numOfPassengers>0){
                            let passenger1 = new Passenger();
                            passenger1.passengerName = passengerName1;
                            passenger1.passengerAge = passengerAge1;
                            passenger1.passengerUIN = passengerUIN1;
                            passenger1.luggage = luggage1;
                            state.booking.passengerList.push(passenger1);
                        }
                        if(numOfPassengers>1){
                            let passenger2 = new Passenger();
                            passenger2.passengerName = passengerName2;
                            passenger2.passengerAge = passengerAge2;
                            passenger2.passengerUIN = passengerUIN2;
                            passenger2.luggage = luggage2;
                            state.booking.passengerList.push(passenger2);
                        }
                        if(numOfPassengers>2){
                            let passenger3 = new Passenger();
                            passenger3.passengerName = passengerName3;
                            passenger3.passengerAge = passengerAge3;
                            passenger3.passengerUIN = passengerUIN3;
                            passenger3.luggage = luggage3;
                            state.booking.passengerList.push(passenger3);
                        }
                        state.booking.noOfPassengers = numOfPassengers;
                        state.booking.ticketCost = numOfPassengers * 1000;
                        service.bookTicket(state.booking, sessionStorage.getItem('userId'), scheduleFlightId).then(()=>{
                            alert("Tickets booked!");
                            navigate("/booking/view");
                        }).catch(()=>{
                            alert("Problem in booking tickets")
                        })
                    }else{
                        setError(err);
                    }
                }}><i class="fas fa-clipboard-check"></i> &nbsp;Book Ticket</button>
            </form>
        </div>
    );
}

export default AddBooking;