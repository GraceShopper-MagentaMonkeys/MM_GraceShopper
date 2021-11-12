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
    return (
      <div>
       { allUsersView.map((user) => {
         return (
           <div key={user.id}>
             <h1>username: {user.username}</h1>
             <img src={user.imageUrl} className='productImage'/>
             <h2>Email: {user.email}</h2>
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
