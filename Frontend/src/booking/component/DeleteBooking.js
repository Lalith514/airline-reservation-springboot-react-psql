import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingService from "../service/BookingService";

function DeleteBooking(){
    const{bookingId}=useParams();
    const service= new BookingService();
    const navigate= useNavigate();
    React.useEffect(()=>{
        service.deleteBooking(bookingId).then(()=>{
            alert('Booking cancelled successfully');
            navigate('/booking/view');
        }).catch(()=>{alert('Problem in cancelling booking');
        navigate('/booking/view');
        });
    },[])
    return (
    <div>
         <div className="alert alert-danger my-4">Deleting booking {bookingId}</div>
    </div>)
}
export default DeleteBooking;