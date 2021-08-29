import React from 'react'
import { Redirect, Route} from 'react-router-dom';
import auth from '../../services/authService';
import MovieForm from '../movieForm';

export default function ProtectedRoutes({path, component: Component, render, ...rest}) {
    //render contain location where is redirect to.  
    const user = auth.getCurrentUser()
    return (
        <Route path={path}
        {...rest}
        render={props=> !user ? <Redirect to={{pathname:render,
                                            state: { from: props.location}}}></Redirect>
                    :<Component {...props} /> 
                }
                />
    )
}
