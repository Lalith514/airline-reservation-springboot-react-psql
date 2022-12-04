import axios from 'axios';

class BookingService{
    bookTicket(booking, userId, scheduleFlightId){
        return axios.post('http://localhost:5010/airline-api/booking/createBooking?userId=' + userId + '&scheduleFlightId=' + scheduleFlightId, booking);
    }

    getAllBookings(){
        return axios.get('http://localhost:5010/airline-api/booking/viewBookings');
    }

    getBooking(id){
        return axios.get('http://localhost:5010/airline-api/booking/viewBookings/'+id);
    }

    getBookingByUserId(userId){
        return axios.get('http://localhost:5010/airline-api/booking/getBookings/'+userId);
    }

    deleteBooking(bookingId){
        return axios.delete('http://localhost:5010/airline-api/booking/deleteBooking/'+bookingId);
    }

    updateBooking(bookingId){
        return axios.put('http://localhost:5010/airline-api/booking/updateBooking/'+bookingId);
    }

    updatePassenger(bookingId,passenger){
        return axios.put('http://localhost:5010/airline-api/booking/updatePassenger/'+bookingId,passenger);
    }
}

export default BookingService;