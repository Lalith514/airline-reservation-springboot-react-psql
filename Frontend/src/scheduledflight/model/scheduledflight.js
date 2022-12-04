import Flight from "../../flight/model/flight";
import Schedule from "../../schedule/model/schedule";

class ScheduledFlight {
    scheduleFlightId = '';
    flight = new Flight();
    availableSeats = '';
    schedule = new Schedule();
}

export default ScheduledFlight;