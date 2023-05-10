


const authReducer = (state = { auth: null }, action) => {
    switch (action.type) {
        case "KAYIT":
            localStorage.setItem(("auth", JSON.stringify(action.payload)))
            return {
                auth: action.payload
            }

        default:
            return state
    }
}

export default authReducer;