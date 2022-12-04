import axios from 'axios';

class AirportService{
    getAllAirports(){
        return axios.get('http://localhost:5010/airline-api/airport/airports');
    }

    addAirport(airport){
        return axios.post('http://localhost:5010/airline-api/airport/addAirport', airport);
    }
}

export default AirportService;