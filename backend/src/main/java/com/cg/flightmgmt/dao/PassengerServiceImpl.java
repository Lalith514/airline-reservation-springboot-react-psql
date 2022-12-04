package com.cg.flightmgmt.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Booking;
import com.cg.flightmgmt.dto.Passenger;
import com.cg.flightmgmt.repository.BookingRepository;
import com.cg.flightmgmt.repository.PassengerRepository;
import com.cg.flightmgmt.service.PassengerService;

@Service
public class PassengerServiceImpl implements PassengerService {
	
	@Autowired
	private PassengerRepository repo;
	
	@Autowired
	private BookingRepository repo1;

	@Override
	public Passenger getPassengerById(int pnrNumber) {
		Passenger p= repo.getById(pnrNumber);
		return p;
	}

	@Override
	public int updatePassenger(Passenger passenger, int bookingId) {
		int result=0;
		Booking B= repo1.getById(bookingId);
		passenger.setBooking(B);
		Passenger n=repo.save(passenger);
		if(n!=null) {
			result=1;
		}
		return result;
	}
}
