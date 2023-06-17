const defaultState = {
    id: null,
    email: "",
    role: "USER",
    name: "",
    surname: "",
    isAuth: false,
}
const SET_LOGIN_USER = "SET_LOGIN_USER"
const SET_REGISTER_USER = "SET_REGISTER_USER"
const CHECK_AUTH = "CHECK_AUTH"
const LOGOUT = "LOGOUT"


export const authReduser = (state = defaultState, action: any) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            try {
                localStorage.setItem("token", action.payload.accessToken)
                return {
                    ...state,
                    id: action.payload.user.id,
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    name: action.payload.user.name,
                    surname: action.payload.user.surname,
                    isAuth: action.payload.isAuth,
                }
            } catch (error: any) {
                console.log(error?.message)
                return error
            }
        case SET_REGISTER_USER:
            try {
                localStorage.setItem("token", action.payload.accessToken)
                return {
                    ...state,
                    id: action.payload.user.id,
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    name: action.payload.user.name,
                    surname: action.payload.user.surname,
                    isAuth: action.payload.isAuth,

                }
            } catch (error: any) {
                console.log(error?.message)
                return error
            }


        case CHECK_AUTH:
            try {
                localStorage.setItem("token", action.payload.data.tokens.accessToken)
                return {
                    ...state,
                    id: action.payload.user.id,
                    email: action.payload.user.email,
                    role: action.payload.user.role,
                    name: action.payload.user.name,
                    surname: action.payload.user.surname,
                    isAuth: action.payload.isAuth,

                }
            } catch (error: any) {
                console.log(error?.message)
                return error
            }

        case LOGOUT:
            try {
                localStorage.removeItem("token")
                return {
                    ...state,
                    id: null,
                    email: "",
                    role: "USER",
                    name: "",
                    surname: "",
                    isAuth: false,
                }
            } catch (error: any) {
                console.log(error?.message)
                return error
            }


        default:
            return state
    }
}


export const setLoginUserAction = (payload: any) => ({ type: SET_LOGIN_USER, payload })
export const setRegisterUserAction = (payload: any) => ({ type: SET_REGISTER_USER, payload })
export const checkAuthAction = (payload: any) => ({ type: CHECK_AUTH, payload })
export const logoutAction = (payload: any) => ({ type: LOGOUT, payload })