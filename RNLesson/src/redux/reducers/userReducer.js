const INITAL_STATE = {
    username: ""
}

const userReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_USERNAME':
            return {
                username: action.payload
            }
        case "RESET":
            return INITAL_STATE
        default:
            return state
    }
}

export default userReducer