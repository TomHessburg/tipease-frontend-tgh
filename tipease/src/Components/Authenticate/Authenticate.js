import React from 'react'

import { Redirect } from 'react-router-dom';


export default function(ComposedComponent){
    
    const isAuthenticated = true;

    const Authenticate = props => {


        if(isAuthenticated){
            return (
                <ComposedComponent {...props} />
            )
        }else{
            return <Redirect to="/home/login" />
        }
    }

    return Authenticate;
}

