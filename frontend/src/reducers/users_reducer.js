import { RECEIVE_CURRENT_USER } from "../actions/current_user_actions";

const UsersReducer = (state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser;
        default:    
            return state;
    }
}

export default UsersReducer;