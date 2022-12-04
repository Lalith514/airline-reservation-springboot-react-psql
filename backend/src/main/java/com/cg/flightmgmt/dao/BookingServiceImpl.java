package com.cg.flightmgmt.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.Booking;
import com.cg.flightmgmt.dto.Passenger;
import com.cg.flightmgmt.dto.ScheduledFlight;
import com.cg.flightmgmt.dto.User;
import com.cg.flightmgmt.exception.BookingNotFoundException;
import com.cg.flightmgmt.repository.BookingRepository;
import com.cg.flightmgmt.repository.ScheduledFlightRepository;
import com.cg.flightmgmt.repository.UserRepository;
import com.cg.flightmgmt.service.BookingService;

@Service
public class BookingServiceImpl implements BookingService{
	@Autowired
	private BookingRepository repo;
	@Autowired
	private UserRepository repo1;
	@Autowired
	private ScheduledFlightRepository repo2;

	@Override
	public Booking addBooking(Booking booking, int UserId, int flightId) {
		User addBooker = repo1.getById(UserId);
		ScheduledFlight currentflight = repo2.getById(flightId);
		booking.setFlight(currentflight);
		int nPassengers = booking.getPassengerList().size();
		booking.setNoOfPassangers(nPassengers);
		if (this.validateBooking(booking) == true) {
			int balence = booking.getFlight().getAvailableSeats() - booking.getNoOfPassangers();
			for(int i=0;i<booking.getPassengerList().size();i++) {
				booking.getPassengerList().get(i).setBooking(booking);
			}
			addBooker.addBooking(booking);
			booking.setUserId(addBooker);
			booking.getFlight().setAvailableSeats(balence);
			repo2.save(booking.getFlight());
		}
		repo1.save(addBooker);
		return repo.save(booking);
	}
	
	@Override
	public List<Booking> viewBookings() {
		return repo.findAll();
	}

	@Override
	public Booking modifyBooking(Booking booking) {
		Booking prevBooking = repo.getById(booking.getBookingId());
		booking.setUserId(prevBooking.getUserId());
		booking.setFlight(prevBooking.getFlight());
		for(Passenger passenger: booking.getPassengerList()) {
			passenger.setBooking(prevBooking);
		}
		booking.setNoOfPassangers(booking.getPassengerList().size());
		return repo.save(booking);
	}

	@Override
	public Booking viewBooking(int bookingid) throws BookingNotFoundException {
		Optional<Booking> found = repo.findById(bookingid);
		if (found.isPresent()) {
			return found.get();
		} else {
			throw new BookingNotFoundException("This booking does not exist");
		}
	}

	@Override
	public boolean validateBooking(Booking booking) {
		boolean res = false;
		ScheduledFlight sf = booking.getFlight();
		int pass = booking.getNoOfPassangers();
		int seatsavailable = sf.getAvailableSeats();
		if (pass <= seatsavailable) {
			res = true;
		}
		return res;
	}
	
	@Override
	public List<Booking> getBookingByUserId(int UserId) {
		List<Booking> list = repo.getBookingByUserId(UserId);
		return list;
	}
	
	@Override
	public void deleteBooking(int bookingId) {
		Booking booking = repo.getById(bookingId);
		int x = booking.getFlight().getAvailableSeats() + booking.getNoOfPassangers();
		for(Passenger p : new ArrayList<Passenger>(booking.getPassengerList())) {
			booking.deletePassenger(p);
			booking.getFlight().setAvailableSeats(x);
		}
		if(booking.getPassengerList().isEmpty()) {
			repo.deleteBooking(bookingId);
			//System.out.println("passed");
		}
	}
}
