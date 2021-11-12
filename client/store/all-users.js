import axios from "axios";

const SHOW_USERS = 'SHOW_USERS';

const showUsers = (users) => {
  return {
    type: SHOW_USERS,
    allUsers: users
  }
}

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/admin');
      const users = response.data;
      dispatch(showUsers(users));
    } catch (error) {
      console.log('Sorry not able to fetch Users', error)
    }
  }
}

export default function allUserReducer(state = [], action) {
  switch (action.type) {
    case SHOW_USERS:
      return action.allUsers;
    default:
      return state;
  }
}
