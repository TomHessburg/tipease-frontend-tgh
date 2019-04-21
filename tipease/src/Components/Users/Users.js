import React from 'react';
import { connect } from 'react-redux';

const Users = props => {
  console.log(props);
  return (
    <div>
      hi from Users
    </div>
  )
}

const mapStateToProps = state => {
  return{
    ...state
  }
}

export default connect(mapStateToProps, {})(Users);