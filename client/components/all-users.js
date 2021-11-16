import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteTheUser } from '../store/all-users'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const { allUsersView, remove } = this.props;
    return (
      <div>
       { allUsersView.map((user) => {
         return (
          <div className='cont' key={user.id}>
            {/* JOE_CR: The formatting here is difficult to read. Make sure you are keeping indentations consistent! */}
           <div className='card'>
             {/* JOE_CR: Establish consistent conventions for your HTML labeling -- this JSX has both camelCase and kebab-case classes/ids. */}
              <img src={user.imageUrl} className='userImage'/>
            <div className='container'>
              <p>Account Created: {user.date}</p>
             <p>Username: {user.username}</p>
             <p>Email: {user.email} </p>
            <div id='delete-button'>
              <button type='button' onClick={() =>remove(user.id)}>Delete this Account</button>
            </div>
            </div>
           </div>
          </div>
         )
       })
       }
      </div>
    )
  }
}


const mapState = (state) => {
  return {
    allUsersView: state.allUserReducer,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetch: () => dispatch(fetchUsers()),
    remove: (id) => dispatch(deleteTheUser(id))
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
