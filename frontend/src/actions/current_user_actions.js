import { getCurrentUser } from '../util/current_user_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const fetchCurrentUser = () => dispatch => (
    getCurrentUser()
        .then(res => dispatch(receiveCurrentUser(res.data)))
        .catch(err => console.log(err)));
