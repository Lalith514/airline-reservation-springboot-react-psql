package com.cg.flightmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.flightmgmt.dto.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

}
