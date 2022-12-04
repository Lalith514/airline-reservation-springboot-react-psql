import axios from 'axios';

class ScheduledFlightService{
    addScheduledFlight(scheduledFlight, scheduleId, flightId){
        return axios.post('http://localhost:5010/airline-api/scheduledFlightController/addScheduleFlight?scheduleId=' + scheduleId + '&flightId=' + flightId, scheduledFlight);
    }

    getScheduledFlights(){
        return axios.get('http://localhost:5010/airline-api/scheduledFlightController/viewScheduledFlights');
    }

    findScheduledFlight(flightno){
        return axios.get('http://localhost:5010/airline-api/scheduledFlightController/viewScheduledFlights/' + flightno);
    }

    searchFlightsBetweenSourceAndDest(sourceId, destId){
        return axios.get('http://localhost:5010/airline-api/scheduledFlightController/viewScheduledFlights/' + sourceId +'/' +  destId);
    }

    deleteScheduledFlight(flightno){
        return axios.delete('http://localhost:5010/airline-api/scheduledFlightController/deleteScheduledFlight/'+flightno);
    }
}

export default ScheduledFlightService;