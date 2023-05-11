


const authReducer = (state = { auth: null }, action) => {
    switch (action.type) {
        case "KAYIT":
            localStorage.setItem("auth", JSON.stringify(action.payload))
            return {
                ...state,
                auth: action.payload
            }
        case "GİRİŞ":
            localStorage.setItem('auth', JSON.stringify(action.payload))
            return {
                ...state,
                auth: action.payload
            }
        case "ÇIKIŞ":
            localStorage.clear();
            return {
                ...state,
                auth: null
            }
        default:
            return state
    }
}

export default authReducer;