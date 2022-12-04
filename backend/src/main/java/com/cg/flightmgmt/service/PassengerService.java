package com.cg.flightmgmt.service;

import com.cg.flightmgmt.dto.Passenger;

public interface PassengerService {
	public Passenger getPassengerById(int pnrNumber);
	
	public int updatePassenger(Passenger passenger,int bookingId);
}