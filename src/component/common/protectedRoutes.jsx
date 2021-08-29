import React from 'react'
import { Redirect, Route} from 'react-router-dom';
import auth from '../../services/authService';
import MovieForm from '../movieForm';

export default function ProtectedRoutes({path, component: Component, render, ...rest}) {
    const user = auth.getCurrentUser()
    return (
        <Route path={path}
        {...rest}
        render={props=> !user ? <Redirect to={render}></Redirect>
                    :<Component {...props} /> 
                }
                />
    )
}
