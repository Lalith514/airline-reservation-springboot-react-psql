import AirportService from "../../airport/model/airport";

class Schedule{
    scheduleId = '';
    departureTime = '';
    arrivalTime = '';
    sourceAirport = new AirportService();
    destinationAirport = new AirportService();
}

export default Schedule;