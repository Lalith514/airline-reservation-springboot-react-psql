package com.cg.flightmgmt.dao;

import com.cg.flightmgmt.dto.Schedule;
import com.cg.flightmgmt.repository.ScheduleRepository;
import com.cg.flightmgmt.service.ScheduleService;

import java.util.List;

import org.hibernate.annotations.Proxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Proxy(lazy=false)
public class ScheduleServiceImpl implements ScheduleService {
	
	@Autowired
	private ScheduleRepository repo;

	@Override
	public Schedule createSchedule(Schedule schedule) {
		return repo.save(schedule);
	}
	
	@Override
	public List<Schedule> viewSchedules(){
		return repo.findAll();
	}
}
