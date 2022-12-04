package com.cg.flightmgmt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cg.flightmgmt.dto.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer>{
	@Query(value = "Select * from booking_table where user_id=?1", nativeQuery = true )
	public List<Booking> getBookingByUserId(int userId);
	
	@Transactional
	@Modifying
	@Query(value="delete from booking_table where booking_id=?1", nativeQuery = true)
	public void deleteBooking(int BookingId);
}
