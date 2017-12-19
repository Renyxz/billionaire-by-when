import { USER_DATA } from '../actions';

export default function(state=null, action) {
    switch(action.type) {
        case USER_DATA:
            return action.payload;
        
        default:
            return state;
    }
}