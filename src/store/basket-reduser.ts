const defaultState = {
    products: [{
        id: null,
        name: "",
        count: 0
    }]
}

const ADD_BASKET = "ADD_BASKET"
const REMOVE_BASKET = "REMOVE_BASKET"
const GET_BASKET = "GET_BASKET"
const UPDATE_BASKET = "UPDATE_BASKET"

export const basketReduser = (state = defaultState, action: any) => {
    switch (action.type) {
        case GET_BASKET:
            return { ...state, products: action.payload.data }
        case ADD_BASKET:
            return { ...state, products: [...state.products, action.payload] }
        case REMOVE_BASKET:
            return { ...state, products: state.products.filter(product => product.id !== action.payload) }
        case UPDATE_BASKET:
            const { productId, countChange } = action.payload
            const productToUpdateIndex = state.products.findIndex(product => product.id === productId)
            if (productToUpdateIndex !== -1) {
                const updatedProducts = [...state.products]
                updatedProducts[productToUpdateIndex].count += countChange
                return { ...state, products: updatedProducts }
            } else {
                return state
            }


        default:
            return state
    }
}


export const getBasketActoion = (payload: any) => ({ type: GET_BASKET, payload })
export const RemoveBasketActoion = (payload: any) => ({ type: REMOVE_BASKET, payload })
export const addBasketActoion = (payload: any) => ({ type: ADD_BASKET, payload })
export const updataBasketActoion = (payload: any) => ({ type: UPDATE_BASKET, payload })