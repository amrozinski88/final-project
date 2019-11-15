import axios from "axios"

export default {
    getUsersInfo: (email)=>{
        return axios.get(`/api/users/${email}`)
    },
    createUser: (userInfoObject)=>{
        return axios.post(`/api/users`,userInfoObject)
    },
    deleteUser: (email)=>{
        return axios.delete(`/api/users`,email)
    }
}