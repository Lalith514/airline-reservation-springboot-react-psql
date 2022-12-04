package com.cg.flightmgmt.service;

import java.util.List;

import com.cg.flightmgmt.dto.User;
import com.cg.flightmgmt.exception.UserNotFoundException;

public interface UserService {
	// create a new user and add it in the database
	public User addUser(User user);

	// view user details from its given user ID
	public User viewUser(int userId) throws UserNotFoundException;

	// view a list of all users
	public List<User> viewUser();

	// update user details
	public User updateUser(User user);

	// delete the user from the database
	public void deleteUser(int userId);

	public int getUserByName(String UserName);
	public boolean validateUser(String userName, String password);
	public String getUserType(int userId);
}
