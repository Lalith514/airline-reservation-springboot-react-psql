package com.cg.flightmgmt.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Airport;
import com.cg.flightmgmt.exception.AirportNotFoundException;
import com.cg.flightmgmt.repository.AirportRepository;
import com.cg.flightmgmt.service.AirportService;

@Service
public class AirportServiceImpl implements AirportService{
	@Autowired
	private AirportRepository repo;
	
	@Override
	public Airport addAirport(Airport airport) {
		return repo.save(airport);
	}
	
	@Override
	public List<Airport> viewAirport(){
		return repo.findAll();
	}
	
	@Override
    public Airport viewAirport(int airportCode) throws AirportNotFoundException{
		Optional<Airport> found = repo.findById(airportCode);
		if (found.isPresent()) {
			return found.get();
		}else{
			throw new AirportNotFoundException("Airport with airport code: " + airportCode + " does not exists");
		}
	}
}
