package com.cg.flightmgmt.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cg.flightmgmt.dto.ScheduledFlight;

public interface ScheduledFlightRepository extends JpaRepository<ScheduledFlight, Integer>{
	@Transactional
	@Modifying
	@Query(value="delete from scheduled_flight_table where schedule_flight_id=?1", nativeQuery = true)
	public void deleteScheduledFlight(int flightno);
}
