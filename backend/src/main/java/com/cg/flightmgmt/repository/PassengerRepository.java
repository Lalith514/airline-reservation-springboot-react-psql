package com.cg.flightmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.flightmgmt.dto.Passenger;
@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer>{

}
