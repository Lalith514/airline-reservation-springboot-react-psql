package com.cg.flightmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.flightmgmt.dto.Airport;

public interface AirportRepository extends JpaRepository<Airport, Integer> {

}
