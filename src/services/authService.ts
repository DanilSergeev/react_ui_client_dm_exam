import $api from "../http";

export default class AuthService {
    static async login(login: string, password: string) {
        return $api.post("/api/login", { login, password })
            .then(res => res.data)
    }
    static async register(login: string, password: string, role: string = "USER", name: string, surname: string, otchestvo: string, email: string) {
        return $api.post("/api/register", { login, password, role, name, surname, otchestvo, email })
            .then(res => res.data)
    }
    static async logout() {
        return $api.post("/api/logout")
            .then(res => res.data)
    }
}