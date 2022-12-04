import axios from 'axios';

class ScheduleService {
    addSchedule(schedule, sourceCode, destCode){
        return axios.post('http://localhost:5010/airline-api/schedule/createSchedule?sourceAirportCode=' + sourceCode + '&destinationAirportCode=' + destCode, schedule);
    }

    getSchedules(){
        return axios.get('http://localhost:5010/airline-api/schedule/schedules');
    }
}

export default ScheduleService;