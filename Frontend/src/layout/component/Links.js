import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Links(){
    const navigate = useNavigate();
    let jumbotronStyle = {backgroundColor: "aliceblue"}
    React.useEffect(()=>{
        if(sessionStorage.getItem('userType')!=='Admin') {
            alert('Unauthorised Access to Page.');
            navigate('/login');
        }
    },[]);
    return(
        <div>
            <div className="jumbotron text-center mb-1" style={jumbotronStyle}>
                <h3><i class="fas fa-paper-plane mr-1"></i>Admin tools</h3>
                <h5>Manage flight and user data centrally with admin tools.</h5>
            </div>
            <div className="ml-5 pl-5">
                <div className="form-inline">
                    <Link className="text-dark ml-3 mr-1" to={{pathname: "/airports"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-map-marker-alt"> View airports</i></h5>
                                <p class="card-text">View all the airports in the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/airports/add"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-map-marker-alt"> Add airports</i></h5>
                                <p class="card-text">Add an airport to the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/flights"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-plane"> View planes</i></h5>
                                <p class="card-text">View all planes and their carriers in the database.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="form-inline my-2">
                    <Link className="text-dark ml-3 mr-1" to={{pathname: "/flights/add"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-plane"> Add planes</i></h5>
                                <p class="card-text">Add planes and their carriers to the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/schedule/add"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-calendar"> Add schedule</i></h5>
                                <p class="card-text">Add a schedule to the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/scheduleFlight/admin"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-plane-departure"> View flights</i></h5>
                                <p class="card-text">View all scheduled flights in the database.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="form-inline my-2">
                    <Link className="text-dark ml-3 mr-1" to={{pathname: "/scheduleFlight/add"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-plane-departure"> Add flights</i></h5>
                                <p class="card-text">Add scheduled flights to the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/users"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-users"> View all users</i></h5>
                                <p class="card-text">View all the users in the database.</p>
                            </div>
                        </div>
                    </Link>
                    <Link className="text-dark mx-1" to={{pathname: "/users/add"}}>
                        <div class="card" style={{width: "14rem"}}>
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-users"> Register a user</i></h5>
                                <p class="card-text">Add an user to the database.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Links;