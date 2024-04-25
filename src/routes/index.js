import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){
    const { signed } = useContext(AuthContext);
    
    const loading = false;
    
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    )
}

export default Routes;

//import { createDrawerNavigator } from '@react-navigation/drawer';

// import StackRoutes from './stackRoutes';
// import Sobre from '../pages/Sobre';
// import Contato from '../pages/Contato';

// import CustomDrawer from '../components/CustomDrawer';

// const Drawer = createDrawerNavigator();

// export default function Routes(){
//   return(
//     <Drawer.Navigator
//         drawerContent={CustomDrawer}


//         screenOptions={{
//             headerShown: false,

//             drawerActiveBackgroundColor: '#00dae4',
//              drawerActiveTintColor: '#FFF',
             
//              drawerInactiveBackgroundColor: '#f1f1f1',
//              drawerInactiveTintColor: '#000'

//         }}
    
//     >
//         <Drawer.Screen
//             name='HomeStack'
//             component={StackRoutes}
//             options={{
//                 title: 'Inicio'
//             }}
//         />
//         <Drawer.Screen
//             name='Sobre'
//             component={Sobre}
//         />
//         <Drawer.Screen
//             name='Contato'
//             component={Contato}
//         />
//     </Drawer.Navigator>
//   )
// }