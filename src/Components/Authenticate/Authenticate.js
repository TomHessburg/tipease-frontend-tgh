import React from 'react'
import { connect } from 'react-redux';


export default function(ComposedComponent){

    class Authenticate extends React.Component{

        componentWillMount(){
            if(!this.props.isAuthenticated){
                this.props.history.push('/home/login')
            }
        }

        render(){
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = state => {
        return {
            isAuthenticated: state.isAuthenticated
        }
    }

    return connect(mapStateToProps, {})(Authenticate);
}

