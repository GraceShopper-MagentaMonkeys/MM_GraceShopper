import axios from "axios";

const SHOW_USERS = 'SHOW_USERS';
const DELET_USER = 'DELETE_USER';

const showUsers = (users) => {
  return {
    type: SHOW_USERS,
    allUsers: users
  }
}

const deleteUser = (user) => {
  return {
    type: DELET_USER,
    userToRemove: user,
  }
}

// THUNK
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

export const deleteTheUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`/api/admin/${id}`)
      const userRemoved = response.data;

      dispatch(deleteUser(userRemoved))

    } catch(error) {
      console.log('Sorry not able to delete this User', error);
    }
  }
}

// REDUCER
export default function allUserReducer(state = [], action) {
  switch (action.type) {
    case SHOW_USERS:
      return action.allUsers;
    case DELET_USER:
      return state.filter((user) => user.id !== action.userToRemove.id);
    default:
      return state;
  }
}
