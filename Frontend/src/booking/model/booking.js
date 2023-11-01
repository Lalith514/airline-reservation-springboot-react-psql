import ScheduledFlight from '../../scheduledflight/model/scheduledflight';

class Booking {
    bookingId = '';
    flight = new ScheduledFlight();
    
    // Create a bookingDate in the format "yyyy-MM-dd"
    bookingDate = (() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return ${year}-${month}-${day};
    })();

    ticketCost = '';
    passengerList = [];
    noOfPassengers = '';
}

export default Booking;

