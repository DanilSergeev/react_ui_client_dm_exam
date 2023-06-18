import $api from "../http";

export default class ProductService{
    static async getProducts(){
        return $api.get("/api/products")
    }
    static async getProduct(id:number){
        return $api.get(`/api/product/${id}`)
    }
    static async updateProduct(id:string, formData:any){
        return $api.put(`/api/product/${id}`, formData)
        .then(res=>res.data)
    }
    static async createProduct(id:string,formData:any){
        return $api.post(`/api/product/`, formData)
        .then(res=>res.data)
    }
    static async delProduct(id:number){
        return $api.delete(`/api/product/${id}`)
    }
  
}