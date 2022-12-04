package com.cg.flightmgmt.service;

import java.util.List;

import com.cg.flightmgmt.dto.Flight;
import com.cg.flightmgmt.exception.FlightNotFoundException;

public interface FlightService {
	// create a new flight and add it to the the database
	public Flight addFlight(Flight flight);

	// view a flight using its flight number
	public Flight viewFlight(int flightno) throws FlightNotFoundException;

	// view all flights in the database
	public List<Flight> viewFlight();

	// delete a flight using the flight number
	public void deleteFlight(int flightno);

	// modify a flight using the flight number
	public Flight modifyFlight(Flight flight);
}
