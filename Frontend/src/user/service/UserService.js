import axios from 'axios';

class UserService {
    addUser(user){
        return axios.post('http://localhost:5010/airline-api/user/createUser', user);
    }

    getAllUsers(){
        return axios.get('http://localhost:5010/airline-api/user/users');
    }

    getUser(id){
        return axios.get('http://localhost:5010/airline-api/user/users/'+id);
    }

    loginService(userName, password) {
        return axios.post('http://localhost:5010/airline-api/user/login?userName='+userName+'&password='+password);
    }

    getUserType(userId){
        return axios.get('http://localhost:5010/airline-api/user/usertype/'+userId)
    }

    deleteUser(userId){
        return axios.delete('http://localhost:5010/airline-api/user/deleteUser/'+userId);
    }

    getUserByName(name){
        return axios.get('http://localhost:5010/airline-api/user/username/'+name);
    }
}

export default UserService;