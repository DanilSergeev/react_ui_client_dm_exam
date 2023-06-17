
const defaultState = {
    users: [{
        id: null,
        name: "",
        surname: "",
        email: null,
        role: "USER",
    }],
    user: {
        id: null,
        email: null,
        role: "USER",
        name: "",
        surname: "",
        isActivated: false
    }
}

const GET_USERS = "GET_USERS"
const GET_USER = "GET_USER"

export const userReduser = (state = defaultState, action:any) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload.data }

        case GET_USER:
            return { ...state, user: action.payload.data }

        default:
            return state
    }
}

export const getUsersActoion = (payload:any) => ({ type: GET_USERS, payload })
export const getUserActoion = (payload:any) => ({ type: GET_USER, payload })