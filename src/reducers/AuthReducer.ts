import {
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_FAILURE,
} from "../action/TypeConstants"

const initialState = {

    loginResponse: {},
    token: "",
    userId: "",
    signupResponse: {},
    forgotPasswordResponse: {},
}

const AuthReducer = (state = initialState, action : any) => {

    switch (action.type) {
        case AUTH_REQUEST:
            return {
                ...state,
                status: action.type,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                status: action.type,
                loginResponse: action.data.data,
            }
        case AUTH_FAILURE:
            return {
                ...state,
                status: action.type,
            }
      
            default:
                return state;
    }
}

export default AuthReducer;