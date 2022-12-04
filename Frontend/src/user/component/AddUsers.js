import React from "react";
import { useNavigate } from "react-router-dom";
import User from '../model/user';
import UserService from '../service/UserService';

function AddUsers(){
    const service = new UserService();
    const navigate = useNavigate();
    const[state, changeState] = React.useState({user: new User()});
    const [error, setError] = React.useState({
        userNameError: '',
        passwordError: '',
        userTypeError: '',
        emailError: '',
        mobileError: ''  
    });
    React.useEffect(()=>{
        if(sessionStorage.getItem('userType')==='Customer') {
            alert('Unauthorised Access to Page.');
            navigate('/links');
        }
    },[]);
    return(
        <div className="my-4">
            <form>
                <h2><span className='badge badge-dark px-4 py-2'><i class="fas fa-user-plus"></i> &nbsp;Register New User</span></h2>
                <div className='form-group'>
                    <label><i class="fas fa-user"></i>&nbsp;User Name</label>
                    <div className="text-danger">{error.userNameError}</div>
                    <input className="form-control" type="text" id="userName" name="userName" placeholder="Enter user name"
                    value = {state.user.userName}
                    onChange = {(event)=>changeState({user: {...state.user, userName: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label><i class="fas fa-key"></i>&nbsp;Password</label>
                    <div className="text-danger">{error.passwordError}</div>
                    <input className="form-control" type="password" id="password" name="password" placeholder="Enter password"
                    value = {state.user.password}
                    onChange = {(event)=>changeState({user: {...state.user, password: event.target.value}})}
                    />
                </div>
                {sessionStorage.getItem('userType')==='Admin' ? (
                    <div className='form-group'>
                        <label><i class="fas fa-user-cog"></i>&nbsp;User type</label>
                        <div className="text-danger">{error.userTypeError}</div>
                        <input className="form-control" type="text" id="userType" name="userType" placeholder="Enter user type"
                        value = {state.user.userType}
                        onChange = {(event)=>changeState({user: {...state.user, userType: event.target.value}})}
                        />
                    </div>
                ) : null}
                <div className='form-group'>
                    <label><i class="far fa-envelope-open"></i>&nbsp;Email</label>
                    <div className="text-danger">{error.emailError}</div>
                    <input className="form-control" type="text" id="email" name="email" placeholder="Enter email"
                    value = {state.user.email}
                    onChange = {(event)=>changeState({user: {...state.user, email: event.target.value}})}
                    />
                </div>
                <div className='form-group'>
                    <label><i class="fas fa-phone"></i>&nbsp;Mobile Number</label>
                    <div className="text-danger">{error.mobileError}</div>
                    <input className="form-control" type="text" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number"
                    value = {state.user.mobileNumber}
                    onChange = {(event)=>changeState({user: {...state.user, mobileNumber: event.target.value}})}
                    />
                </div>
                <button className="btn btn-success" onClick={(event)=>{
                    event.preventDefault();
                    if(sessionStorage.getItem('userType')!=='Admin'){
                        state.user.userType = 'Customer'
                    }
                    let err = {};
                    let isError = false;
                    if (!state.user.userName) {
                        err.userNameError = "User name is required.";
                        isError = true;
                    }
                    if (!state.user.password) {
                        err.passwordError = "Password is required.";
                        isError = true;
                    }
                    if (!state.user.userType) {
                        err.userTypeError = "User type is required.";
                        isError = true;
                    }
                    if (!state.user.email) {
                        err.emailError = "Email is required.";
                        isError = true;
                    }
                    if (!state.user.mobileNumber) {
                        err.mobileError = "Mobile number is required.";
                        isError = true;
                    }
                    if(!isError){
                        service.addUser(state.user).then(()=>{
                            navigate("/login")
                        }).catch(()=>{
                            alert("Problem in adding users.")
                        })
                    }else{
                        setError(err);
                    }
                }}><i class="fas fa-user-plus"></i> &nbsp;Add user</button>
            </form>
        </div>
    );
}

export default AddUsers;