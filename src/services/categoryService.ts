import $api from "../http";

export default class CategoryService{
    static async getCategorys(){
        return $api.get("/api/categorys")
    }
    static async getCategory(id:number){
        return $api.get(`/api/category/${id}`)
    }
    static async createCategory(name:string){
        return $api.post(`/api/category/`, {name})
        .then(res=>res.data)
    }
    static async delCategory(id:number){
        return $api.delete(`/api/category/${id}`)
    }
  
}