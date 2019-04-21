import React from 'react';
//import styles from './ServiceWorkers.module.scss'
import TopBar from './TopBar/TopBar.js';
import SWDashboard from './SWDashboard/SWDashboard.js';
import { connect } from 'react-redux';


const ServiceWorkers = props => {
  return (
    <div>
      <TopBar />
      <SWDashboard />
    </div>
  )
}

const mapStateToProps = state => {
  return{
    ...state
  }
}

export default connect(mapStateToProps, {})(ServiceWorkers);