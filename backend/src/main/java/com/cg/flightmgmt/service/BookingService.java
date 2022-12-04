package com.cg.flightmgmt.service;

import java.util.List;

import com.cg.flightmgmt.dto.Booking;
import com.cg.flightmgmt.exception.BookingNotFoundException;

public interface BookingService {
	// create a new booking and add to the database
	public Booking addBooking(Booking booking, int UserId,int flightId);

	// view all bookings in the database 
	public List<Booking> viewBookings();

	// view a booking using the booking ID
	public Booking viewBooking(int bookingid) throws BookingNotFoundException;

	// delete a booking using the booking ID
	public void deleteBooking(int bookingid);

	// modify a booking using the booking ID
	public Booking modifyBooking(Booking booking);

	// validate a given booking
	public boolean validateBooking(Booking booking);
	
	// get all bookings by a certain user
	public List<Booking> getBookingByUserId(int UserId);
}
