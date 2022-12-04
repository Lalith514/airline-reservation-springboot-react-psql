package com.cg.flightmgmt.service;

import java.util.List;

import com.cg.flightmgmt.dto.ScheduledFlight;

public interface ScheduledFlightService {
	// create a scheduled flight and add it to the database
	public ScheduledFlight addScheduleFlight(ScheduledFlight flight, int scheduleId,int flightNumber);

	// view all scheduled flights
	public List<ScheduledFlight> viewScheduledFlights();

	// view scheudled flight by ID
	public ScheduledFlight viewScheduledFlights(int num);

	// view the scheduled flights undertaken by a specific plane whose flight number is given
	public List<ScheduledFlight> viewScheduledFlight(int flightno);

	// delete a scheduled flight from the database
	public void deleteScheduledFlight(int flightno);

	// modify a scheduled flight
	public ScheduledFlight modifyFlightSchedule(ScheduledFlight flight);
}
