import React from 'react'
import SignInContainer from './session/signin_container'
import SignUpContainer from './session/signup_container'
import Splash from './splash/splash'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SearchContainer from './search/search_container'
import HomeContainer from './home/home_container'

const App = (props) => (
    <div>
        <AuthRoute path="/" component={Splash} /> 
        <ProtectedRoute path="/" component={HomeContainer} />
    </div>
)

export default App;