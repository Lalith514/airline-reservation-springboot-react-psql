import React from "react";
import { Link } from "react-router-dom";
import UserService from "../service/UserService";

function ViewUsers(){
    const service = new UserService();
    const[users, changeUsers] = React.useState([]);
    React.useEffect(()=>{
        service.getAllUsers().then((data)=>{
            changeUsers(data.data);
        }).catch(()=>{
            alert("Problem in getting list of airports");
        })
    });
    return(
        <div className="my-3">
            {users.length>0 ? (
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">User type</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile number</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr>
                                <th scope="row">{user.userId}</th>
                                <td>{user.userName}</td>
                                <td>{user.password}</td>
                                <td>{user.userType}</td>
                                <td>{user.email}</td>
                                <td>{user.mobileNumber}</td>
                                <td><Link className="btn btn-warning" to={{ pathname: `/users/update/${user.userId}`}}><i class="fas fa-pen"></i> &nbsp;Update</Link></td>
                                <td><Link className="btn btn-danger" to={{ pathname: `/users/delete/${user.userId}`}}><i class="fas fa-trash-alt"></i> &nbsp;Delete</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : <span className='text-danger'>No users present in the database currently.</span>}
        </div>
    );
}

export default ViewUsers;