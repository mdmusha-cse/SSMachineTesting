import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'


const allReducers = combineReducers({
    AuthReducer: AuthReducer,
})
const rootReducer = (state : any , action : any ) => {
    return allReducers(state, action);
}
export default rootReducer;