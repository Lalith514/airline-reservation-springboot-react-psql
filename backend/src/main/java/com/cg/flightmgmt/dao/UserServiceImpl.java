package com.cg.flightmgmt.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.flightmgmt.dto.User;
import com.cg.flightmgmt.exception.UserNotFoundException;
import com.cg.flightmgmt.repository.UserRepository;
import com.cg.flightmgmt.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository repo;
	
	@Override
	public User addUser(User user) {
		return repo.save(user);
	}
	
	@Override
	public User viewUser(int userId) throws UserNotFoundException {
		Optional<User> found = repo.findById(userId);
		if(found.isPresent()) {
			return found.get();
		}else {
			throw new UserNotFoundException("This user does not exist");
		}
	}
	
	@Override
	public List<User> viewUser(){
		return repo.findAll();
	}
	
	@Override
	public User updateUser(User user) {
		return repo.save(user);
	}
	
	@Override
	public void deleteUser(int userId) {
		repo.delete(repo.getById(userId));
	}
	
	@Override
	public boolean validateUser(String userName, String password) {
		boolean result = false;
		User validate = repo.validateUser(userName);
		if (validate != null) {
			String validPassword = validate.getPassword();
			if (validPassword.equals(password)) {
				result = true;
			}

		}
		return result;
	}

	@Override
	public int getUserByName(String UserName) {
		User u = repo.validateUser(UserName);
		int id = u.getUserId();
		return id;
	}

	@Override
	public String getUserType(int UserId) {
		User u = repo.getById(UserId);
		String type=u.getUserType();
		return type;
	}
}
