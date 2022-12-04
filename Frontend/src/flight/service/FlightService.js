import axios from 'axios';

class FlightService {
    getAllFlights(){
        return axios.get('http://localhost:5010/airline-api/flight/flights');
    }

    addFlight(flight){
        return axios.post('http://localhost:5010/airline-api/flight/createFlight', flight);
    }

    getFlight(flightno){
        return axios.get('http://localhost:5010/airline-api/flight/flights/' + flightno);
    }

    deleteFlight(flightno){
        return axios.delete('http://localhost:5010/airline-api/flight/deleteFlight/' + flightno);
    }
}

export default FlightService;