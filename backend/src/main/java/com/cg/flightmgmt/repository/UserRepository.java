package com.cg.flightmgmt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cg.flightmgmt.dto.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	@Query(value="SELECT u FROM User u WHERE u.userName = ?1" )
	public User validateUser(String username);
}
