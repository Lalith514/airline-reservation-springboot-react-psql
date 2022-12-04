package com.cg.flightmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.flightmgmt.dto.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

}