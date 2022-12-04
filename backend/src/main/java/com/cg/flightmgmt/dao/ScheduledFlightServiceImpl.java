package com.cg.flightmgmt.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.Proxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Flight;
import com.cg.flightmgmt.dto.Schedule;
import com.cg.flightmgmt.dto.ScheduledFlight;
import com.cg.flightmgmt.repository.FlightRepository;
import com.cg.flightmgmt.repository.ScheduleRepository;
import com.cg.flightmgmt.repository.ScheduledFlightRepository;
import com.cg.flightmgmt.service.ScheduledFlightService;

@Service
@Proxy(lazy=false)
public class ScheduledFlightServiceImpl implements ScheduledFlightService{
	@Autowired
	private ScheduledFlightRepository repo;
	
	@Autowired
	private ScheduleRepository repo1;
	
	@Autowired
	private FlightRepository repo2;
	
	@Override
	public ScheduledFlight addScheduleFlight(ScheduledFlight flight, int scheduleId, int flightNumber) {
		Schedule schedule = repo1.getById(scheduleId);
		Flight realFlight = repo2.getById(flightNumber);
		flight.setSchedule(schedule);
		flight.setFlight(realFlight);
		return repo.save(flight);
	}	
	@Override
	public List<ScheduledFlight> viewScheduledFlights(){
		return repo.findAll();
	}
	@Override
	public ScheduledFlight viewScheduledFlights(int num){
		return repo.getById(num);
	}
	@Override
	public List<ScheduledFlight> viewScheduledFlight(int flightno){
		List<ScheduledFlight> ans = new ArrayList<>();
		List<ScheduledFlight> list = repo.findAll();
		for(ScheduledFlight s: list) {
			if(s.getFlight().getFlightNumber()==flightno) {
				ans.add(s);
			}
		}
		return ans;
	}
	@Override
	public void deleteScheduledFlight(int flightno){
		repo.deleteScheduledFlight(flightno);
	}
	@Override
	public ScheduledFlight modifyFlightSchedule(ScheduledFlight flight) {
		return repo.save(flight);
	}
}