package com.cg.flightmgmt.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Flight;
import com.cg.flightmgmt.exception.FlightNotFoundException;
import com.cg.flightmgmt.repository.FlightRepository;
import com.cg.flightmgmt.service.FlightService;

@Service
public class FlightServiceImpl implements FlightService{
	@Autowired
	private FlightRepository repo;
	
	@Override
	public Flight addFlight(Flight flight) {
		return repo.save(flight);
	}
	
	@Override
	public Flight viewFlight(int flightno) throws FlightNotFoundException{
		Optional<Flight> found = repo.findById(flightno);
		if(found.isPresent()) {
			return found.get();
		}else {
			throw new FlightNotFoundException("This flight does not exist");
		}
	}
	
	@Override
	public List<Flight> viewFlight(){
		return repo.findAll();
	}
	
	@Override
	public void deleteFlight(int flightno) {
		repo.delete(repo.getById(flightno));
	}
	
	@Override
	public Flight modifyFlight(Flight flight) {
		return repo.save(flight);
	}
}
