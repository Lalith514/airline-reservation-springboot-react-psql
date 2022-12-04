import React, { useState } from "react";
import { useNavigate } from "react-router";
import UserSerivce from "../../user/service/UserService";

function Login() {
    const [userName, setuserName] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();
    let service = new UserSerivce();
    let jumbotronStyle = {backgroundColor: "aliceblue"}

    React.useEffect(()=>{
        if(sessionStorage.getItem('userId')!==null){
            navigate("/");
        }
    })
    return (
        <div>
            <div className="jumbotron text-center" style={jumbotronStyle}>
                <h3><i class="fas fa-paper-plane mr-1"></i>Supporting You Through Your Travel Journey</h3>
                <h5>Let the journey begin</h5>
            </div>
            <h1 className="my-4"><i class="fas fa-sign-in-alt"></i> Login</h1>
            <form>
                <div className="form-group">
                    <label><i class="fas fa-user"></i>&nbsp;User Name</label>
                    <input className="form-control" type="text" id="username" placeholder="Enter User Name"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label><i class="fas fa-key"></i>&nbsp;Password</label>
                    <input className="form-control" type="password" id="password" placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={
                        (e) => {
                            e.preventDefault();
                            service.loginService(userName, password).then((result) => {
                                if (result !== 0) {
                                    alert("Login credentials are valid.");
                                    service.getUserType(result.data).then((result1) => {
                                        sessionStorage.setItem('userId', result.data);
                                        sessionStorage.setItem('userType', result1.data);
                                        window.location.reload();
                                    }).catch((e) => {
                                        alert('User type error.')
                                    });
                                }
                            }).catch((error) => {
                                alert('Invalid Username/Password. Please try again!');
                                window.location.reload();
                            })
                        }
                    }><i class="fas fa-sign-in-alt"></i> &nbsp;Login</button>
                    <button className="btn btn-success mx-2" onClick={(e) => { 
                        e.preventDefault();
                        navigate('/users/add');
                    }}><i class="fas fa-user-plus"></i> &nbsp;New Registration</button>
                </div>
            </form>
        </div>
    );
}
export default Login;