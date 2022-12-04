package com.cg.flightmgmt.controller;

import java.util.List;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cg.flightmgmt.dao.UserServiceImpl;
import com.cg.flightmgmt.dto.User;
import com.cg.flightmgmt.exception.UserNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
	Logger logger=org.slf4j.LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserServiceImpl dao;
	
	//localhost:5010/airline-api/user/createUser
	@PostMapping(path="/createUser")
	public User createFlight(@RequestBody User user) {
		logger.info("User created sucessfully");
		return dao.addUser(user);
	}
	
	//localhost:5010/airline-api/user/users
	@RequestMapping(path="/users")
	public List<User> viewAllUsers(){
		return dao.viewUser();
	}
	
	//localhost:5010/airline-api/user/users/:id
	@GetMapping(path="/users/{userId}")
	public User viewUserById(@PathVariable int userId) throws UserNotFoundException{
		return dao.viewUser(userId);
	}
	
	//localhost:5010/airline-api/user/updateUser/:id
	@PutMapping(path="/updateUser/{id}")
	public User updateUser(@RequestBody User user, @PathVariable int id) {
		logger.info("User updated sucessfully");
		return dao.updateUser(user);
	}
	
	//localhost:5010/airline-api/user/deleteUser/:id
	@DeleteMapping(path="deleteUser/{userId}")
	public void deleteUser(@PathVariable int userId){
		logger.info("User deleted sucessfully");
		dao.deleteUser(userId);
	}
	
	//http://localhost:5010/airline-api/user/login?userName='+userName+'&password='+password
	@PostMapping(path="/login")
	public ResponseEntity<Integer> validateUser(@RequestParam("userName") String userName, @RequestParam("password") String password) {
		boolean result= dao.validateUser(userName, password);
		System.out.println(userName+"  "+password);
		ResponseEntity<Integer> response = null;
		if(result) {
			Integer id=dao.getUserByName(userName);
			response = new ResponseEntity<Integer>(id, HttpStatus.OK);
		}else {
			response = new ResponseEntity<Integer>( 0, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}

	//http://localhost:5010/airline-api/user/usertype/'+userId
	@GetMapping(path="/usertype/{userId}")
	public ResponseEntity<String> getUserType(@PathVariable("userId") int userId){
		ResponseEntity<String> response = null;
		String result = dao.getUserType(userId);
		if(result!=null) {
			response = new ResponseEntity<String>(result, HttpStatus.OK);
		}else {
			response = new ResponseEntity<String>( "null", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return response;
	}
	
	//http://localhost:5010/airline-api/user/username/'+userName
	@GetMapping(path="/username/{userName}")
	public ResponseEntity<Integer> getUserByName(@PathVariable("userName") String userName){
		ResponseEntity<Integer> response = new ResponseEntity<Integer>(dao.getUserByName(userName), HttpStatus.OK);
		return response;
	}
}