package com.cg.flightmgmt.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.flightmgmt.dao.BookingServiceImpl;
import com.cg.flightmgmt.dao.PassengerServiceImpl;
import com.cg.flightmgmt.dto.Booking;
import com.cg.flightmgmt.dto.Passenger;
import com.cg.flightmgmt.exception.BookingNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/booking")
public class BookingController {
	Logger logger=org.slf4j.LoggerFactory.getLogger(BookingController.class);
	
	@Autowired
	private BookingServiceImpl dao;
	@Autowired
	private PassengerServiceImpl pdao;
	
	//localhost:5010/airline-api/booking/createBooking?userId=&scheduleFlightId=
	@PostMapping(path="/createBooking")
	public Booking createBooking(@Valid @RequestBody Booking booking, @RequestParam("userId") int userId,
			@RequestParam("scheduleFlightId") int scheduleFlightId) {
		logger.info("New Booking created sucessfully");
		return dao.addBooking(booking, userId, scheduleFlightId);
	}
	
	//localhost:5010/airline-api/booking/viewBookings
	@GetMapping("/viewBookings")
    public List<Booking> viewBookings(){
    	return dao.viewBookings();   	
    }
	
	//localhost:5010/airline-api/booking/deleteBooking/:id
	@DeleteMapping(path="deleteBooking/{bookingId}")
	public void deletebooking(@PathVariable("bookingId") int bookingId) {
		logger.info("Booking cancelled");
    	dao.deleteBooking(bookingId);
    }
    
	//localhost:5010/airline-api/booking/updateBooking/:id
    @PutMapping("/updateBooking/{id}")
    public Booking updateBooking(@RequestBody Booking booking, @PathVariable int id) {
    	logger.info("Booking details modified");
    	return dao.modifyBooking(booking);
    }
    
    //localhost:5010/airline-api/booking/viewBookings/:id
    @GetMapping("/viewBookings/{bookingId}")
    public Booking getBooking(@PathVariable(name="bookingId") int bookingId) throws BookingNotFoundException {
    	return dao.viewBooking(bookingId);
    }
    
    //localhost:5010/airline-api/booking/getBookings/:id
    @GetMapping("/getBookings/{userId}")
    public List<Booking> getBookingByUserId(@PathVariable(name = "userId") int userId){
    	return dao.getBookingByUserId(userId);
    }
    
    @GetMapping("/getPassenger/{pnrNumber}")
    public Passenger getPassengerById(@PathVariable(name="pnrNumber") int pnrNumber) {
    	return pdao.getPassengerById(pnrNumber);
    }

    @PutMapping("/updatePassenger/{bookingId}")
    public ResponseEntity<String> updatePassenger(@PathVariable(name="bookingId") int bookingId,@RequestBody Passenger p){
    	ResponseEntity<String> response=null;
    	int res=pdao.updatePassenger(p, bookingId);
    	if(res!=0) {
			response = new ResponseEntity<String>("Data updated sucessfully", HttpStatus.OK);
		}else {
			response = new ResponseEntity<String>( "problem in updating the details", HttpStatus.INTERNAL_SERVER_ERROR);
		}
    	return response;
    }
}