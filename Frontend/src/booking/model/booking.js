import ScheduledFlight from '../../scheduledflight/model/scheduledflight';

class Booking {
    bookingId = '';
    flight = new ScheduledFlight();
    bookingDate = `${new Date().getYear() +1900}-${new Date().getMonth()<10 ? 0 : null}${new Date().getMonth() + 1}-${new Date().getDate()<10 ? 0 : null}${new Date().getDate()}`;
    ticketCost = '';
    passengerList = [];
    noOfPassengers = '';
}

export default Booking;