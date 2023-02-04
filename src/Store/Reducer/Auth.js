const initilAuth = {}

export default function Auth(state = initilAuth, action) {
    if (action.type === 'change') {
        let currentState = { ...state }
        currentState = action.payload
        return state = currentState
    }
    return state
}