import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from '../service/UserService';
import User from '../model/user';

function UpdateUsers(){
    const{ id } = useParams();
    const service = new UserService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({user: new User()});
    React.useEffect(()=>{
        service.getUser(id).then((data)=>{
            changeState({user: data.data});
        }).catch(()=>{
            alert("Problem in getting user data");
        });
    },[]);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'>Update User {id}</span></h2>
                <div className='form-group'>
                    <label>User Id</label>
                    <input className="form-control" type="text" id="userName" name="userName" placeholder="Enter user name"
                    value = {state.user.userId}
                    readOnly
                    />
                </div>
                <div className='form-group'>
                    <label>User Name</label>
                    <input className="form-control" type="text" id="userName" name="userName" placeholder="Enter user name"
                    value = {state.user.userName}
                    onChange = {(event)=>changeState({user: {...state.user, userName: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input className="form-control" type="text" id="password" name="password" placeholder="Enter password"
                    value = {state.user.password}
                    onChange = {(event)=>changeState({user: {...state.user, password: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>User Type</label>
                    <input className="form-control" type="text" id="userType" name="userType" placeholder="Enter user type"
                    value = {state.user.userType}
                    onChange = {(event)=>changeState({user: {...state.user, userType: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input className="form-control" type="text" id="email" name="email" placeholder="Enter email"
                    value = {state.user.email}
                    onChange = {(event)=>changeState({user: {...state.user, email: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label>Mobile Number</label>
                    <input className="form-control" type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number"
                    value = {state.user.mobileNumber}
                    onChange = {(event)=>changeState({user: {...state.user, mobileNumber: event.target.value}})}
                    />
                </div>
                <button className="btn btn-primary" onClick={(event)=>{
                    event.preventDefault();
                    service.addUser(state.user).then(()=>{
                        alert("User added");
                        navigate("/")
                    }).catch(()=>{
                        alert("Problem in adding users.")
                    })
                }}>Update user</button>
            </form>
        </div>
    );
}

export default UpdateUsers;