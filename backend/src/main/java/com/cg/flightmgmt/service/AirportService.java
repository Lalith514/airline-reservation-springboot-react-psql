package com.cg.flightmgmt.service;

import java.util.List;

import com.cg.flightmgmt.dto.Airport;
import com.cg.flightmgmt.exception.AirportNotFoundException;

public interface AirportService {
    // add an airport to the database
	public Airport addAirport(Airport airport);

    // view all airports in the database
    public List<Airport> viewAirport();

    // view an airport using its airport code
    public Airport viewAirport(int airportCode) throws AirportNotFoundException;
}
