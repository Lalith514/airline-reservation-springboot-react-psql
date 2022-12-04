package com.cg.flightmgmt.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.flightmgmt.dao.ScheduleServiceImpl;
import com.cg.flightmgmt.dto.Airport;
import com.cg.flightmgmt.dto.Schedule;
import com.cg.flightmgmt.repository.AirportRepository;

@RestController
@CrossOrigin
@RequestMapping("/schedule")
public class ScheduleController {
	Logger logger=org.slf4j.LoggerFactory.getLogger(ScheduleController.class);
	
	@Autowired
	private ScheduleServiceImpl dao;
	@Autowired
	private AirportRepository airRepo;
	
	//localhost:5010/airline-api/schedule/createSchedule?sourceAirportCode=&destinationAirportCode=
	@PostMapping(path="/createSchedule")
	public void createBooking(@Valid @RequestBody Schedule schedule, @RequestParam(name="sourceAirportCode") int sourceAirportCode, 
			@RequestParam(name="destinationAirportCode") int destinationAirportCode) {
		Airport source = airRepo.getById(sourceAirportCode);
		Airport destination = airRepo.getById(destinationAirportCode);
		schedule.setSourceAirport(source);
		schedule.setDestinationAirport(destination);
		logger.info("Route schedule created sucessfully");
		dao.createSchedule(schedule);
	}
	
	//localhost:5010/airline-api/schedule/schedules
	@GetMapping(path="/schedules")
	public List<Schedule> viewAllSchedules(){
		return dao.viewSchedules();
	}
}