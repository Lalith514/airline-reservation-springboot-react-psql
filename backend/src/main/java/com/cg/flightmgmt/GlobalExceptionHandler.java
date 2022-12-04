package com.cg.flightmgmt;

import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cg.flightmgmt.exception.AirportNotFoundException;
import com.cg.flightmgmt.exception.BookingNotFoundException;
import com.cg.flightmgmt.exception.ErrorInfo;
import com.cg.flightmgmt.exception.FlightNotFoundException;
import com.cg.flightmgmt.exception.UserNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(FlightNotFoundException.class)
	public @ResponseBody ErrorInfo checkNoSuchFlightFoundExceptionInfo(FlightNotFoundException e, HttpServletRequest req) {
		 ErrorInfo info = new ErrorInfo(LocalDateTime.now(), e.getMessage(), req.getRequestURI());
		 return info;
	}
	
	@ExceptionHandler(UserNotFoundException.class)
	public @ResponseBody ErrorInfo checkNoSuchUserFoundExceptionInfo(UserNotFoundException e, HttpServletRequest req) {
		 ErrorInfo info = new ErrorInfo(LocalDateTime.now(), e.getMessage(), req.getRequestURI());
		 return info;
	}
	
	@ExceptionHandler(AirportNotFoundException.class)
	public @ResponseBody ErrorInfo checkNoSuchAirportFoundExceptionInfo(AirportNotFoundException e, HttpServletRequest req) {
		 ErrorInfo info = new ErrorInfo(LocalDateTime.now(), e.getMessage(), req.getRequestURI());
		 return info;
	}
	
	@ExceptionHandler(BookingNotFoundException.class)
	public @ResponseBody ErrorInfo checkNoSuchBookingFoundExceptionInfo(BookingNotFoundException e, HttpServletRequest req) {
		 ErrorInfo info = new ErrorInfo(LocalDateTime.now(), e.getMessage(), req.getRequestURI());
		 return info;
	}
}
