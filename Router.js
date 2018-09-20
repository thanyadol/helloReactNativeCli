
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './src/scenes/Login';
import List from './src/scenes/List';
 
const RouterConfig = () => {

 // with nested scenes flow name   
 return (
    <Router>
   
    <Scene key="app">
      
    <Scene key="login" component={ Login } title="Hello ~" />   
       <Scene key="list" component={ List } title="Index ~" />              
     </Scene>

   </Router>
 );
};
 
export default RouterConfig;