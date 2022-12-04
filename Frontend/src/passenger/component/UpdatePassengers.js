import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Passenger from "../../passenger/model/passenger";
import Booking from "../../booking/model/booking";
import BookingService from "../../booking/service/BookingService";

function UpdatePassengers(){
    const { bookingId } = useParams();
    const service = new BookingService();
    const[state, changeState] = React.useState({ booking: new Booking() });
    const[pnrNumber, changePnrNumber] = React.useState();
    const[passengerName, changePassengerName] = React.useState();
    const[passengerAge, changePassengerAge] = React.useState();
    const[passengerUIN, changePassengerUIN] = React.useState();
    const[luggage, changeLuggage] = React.useState();
    const [condition, changeCondition] = React.useState('');
    const navigate= useNavigate();
    React.useEffect(()=>{
        service.getBooking(bookingId).then((data)=>{
            changeState({booking: data.data});
        }).catch(()=>{
            alert("Problem in getting booking data")
        });
    }, []);
    return(
        <div>
            <div className="my-4">
                <form>
                    <h2><span className='badge badge-dark px-4 py-2'>Update Booking</span></h2>
                    <div className='form-row'>
                        <div className='col'>
                            <div className='form-group'>
                            <label>Booking Id</label>
                            <input className="form-control" type="text" id="BookingId" name="BookingId" placeholder="BookingId"
                                value={state.booking.bookingId}
                                readOnly
                            />
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-group'>
                                <label>Flight Id</label>
                                <input className="form-control" type="text" id="FlightNo" name="FlightNo" placeholder="FlightNo"
                                    value={state.booking.flight.scheduleFlightId}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Passenger PNR Number</label>
                        <input className="form-control" type="text" id="pnrnumber" name="pnrnumber" placeholder="Enter Passenger PNR Number"
                            value={pnrNumber}
                            onChange={(e) => changePnrNumber(e.target.value)}
                            required="required"
                        />
                    </div>
                    <div>
                        <button className="btn btn-info" onClick={(e) => {
                            e.preventDefault();
                            for(let i=0;i<state.booking.passengerList.length;i++){
                                if(pnrNumber==state.booking.passengerList[i].pnrNumber){
                                    changePassengerName(state.booking.passengerList[i].passengerName);
                                    changePassengerAge(state.booking.passengerList[i].passengerAge);
                                    changePassengerUIN(state.booking.passengerList[i].passengerUIN);
                                    changeLuggage(state.booking.passengerList[i].luggage);
                                    changeCondition('yes');
                                    break;
                                }
                            }
                        }} >Get Passenger data</button>
                    </div>          
                </form>
            </div>
            <div className="my-4">
                {condition!=''? (
                    <form>
                        <div className='form-group'>
                            <label>Pnr Number</label>
                            <input className="form-control" type="text" id="pnrnumber" name="pnrnumber" placeholder="Enter pnrnumber"
                                value={pnrNumber}
                            readOnly
                            />
                        </div>
                        <div className='form-group'>
                            <label>Passenger Name</label>
                            <input className="form-control" type="text" id="passengerName" name="passengerName" placeholder="Enter passengerName"
                                value={passengerName}
                                onChange={(e) => changePassengerName(e.target.value)}
                            />
                        </div>
                        <div className='form-row'>                       
                            <div className='col'>
                                <div className='form-group'>
                                    <label>Passenger Age</label>
                                    <input className="form-control" type="text" id="passengerAge" name="passengerAge" placeholder="Enter passengerAge"
                                        value={passengerAge}
                                        onChange={(e) => changePassengerAge(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-group'>
                                    <label>Passenger UIN</label>
                                    <input className="form-control" type="text" id="passengerUIN" name="passengerUIN" placeholder="Enter passengerUIN"
                                        value={passengerUIN}
                                        onChange={(e) => changePassengerUIN(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='form-group'>
                                    <label>Passenger luggage weight</label>
                                    <input className="form-control" type="text" id="luggage" name="luggage" placeholder="Enter luggage weight"
                                        value={luggage}
                                        onChange={(e) => changeLuggage(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-warning" onClick={(e)=>{
                                e.preventDefault();
                                let passenger= new Passenger();
                                passenger.pnrNumber=pnrNumber;
                                passenger.passengerName=passengerName;
                                passenger.passengerAge=passengerAge;
                                passenger.passengerUIN=passengerUIN;
                                passenger.luggage=luggage;
                                service.updatePassenger(bookingId,passenger).then((result)=>alert(result.data)).catch(()=>alert('Error occured in updating passenger'));
                            }
                            }>Update Passenger</button>
                            <button className="btn btn-success ml-2" onClick={()=>{navigate(`/booking/update/${bookingId}`)}}>Find again?</button>
                            <button className="btn btn-primary ml-2" onClick={()=>{navigate(`/booking/view/${bookingId}`)}}>Go back to Booking</button>
                        </div>
                    </form>
                ) : null}
            </div>
        </div>
    );
}

export default UpdatePassengers;