import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../store/all-users'

class AllUsers extends React.Component {
  componentDidMount() {
    this.props.fetch()
  }

  render() {
    const { allUsersView } = this.props;
    console.log(allUsersView)
    return (
      <div>
       { allUsersView.map((user) => {
         return (
          <div className='cont' key={user.id}>
           <div className='card'>
              <img src={user.imageUrl} className='userImage'/>
            <div className='container'>
              <p>Account Created: {user.date}</p>
             <p>Username: {user.username}</p>
             <p>Email: {user.email} </p>
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
    fetch: () => dispatch(fetchUsers())
  }
}

export default connect(mapState, mapDispatch)(AllUsers)
