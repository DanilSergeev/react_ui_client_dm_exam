import $api from "../http";

export default class UserService{
    static async getUsers(){
        return $api.get("/api/users")
    }
    static async getUser(id:number){
        return $api.get(`/api/user/${id}`)
    }
    static async updateUser(id:number, role:string){
        return $api.put(`/api/user/update/${id}`, {role})
        .then(res=>res.data)
    }
}