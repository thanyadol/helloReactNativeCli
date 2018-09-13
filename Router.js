
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Login } from './src/scenes/Login';
//import Login from './scenes/Login';
 
const RouterConfig = () => {

 // with nested scenes flow name   
 return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
       <Scene key="login" component={Login} title="Login !" />
     </Scene>
   </Router>
 );
};
 
export default RouterConfig;