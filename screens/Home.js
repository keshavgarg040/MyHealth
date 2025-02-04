import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
    StyleSheet,
    Image
} from 'react-native'

import MyDrawer from '../components/MyDrawer';
import HomeContent from '../screens/HomeContent';
import NextVaccines from '../screens/NextVaccines';
import EditVaccine from '../screens/EditVaccine';
import NewVaccine from '../screens/NewVaccine';

const listaVacinas = [
    {
        vacina: 'BCG',
        data: '11-06-2022',
        dose: 'Dose única',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Não há próxima dose'
    },
    {
        vacina: 'Febre amarela',
        data: '11/10/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2023'
    },
    {
        vacina: 'Hepatite B',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2022'
    },
    {
        vacina: 'Poliomelite',
        data: '11/08/2022',
        dose: '1a. dose',
        urlImage: require('../images/comprovanteVacina.png'),
        proximaDose: 'Próxima dose em: 11/10/2022'
    }
  ]

const Drawer = createDrawerNavigator()

const Home = (props) => {

    return(
        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} screenOptions={{drawerActiveTintColor: '#419ED7', drawerInactiveTintColor: '#419ED7', drawerActiveBackgroundColor: '#ADD4D0', 
            drawerInactiveBackgroundColor: '#ADD4D0', headerTintColor: 'gray', drawerStyle: { backgroundColor: '#ADD4D0' }}}   >
            <Drawer.Screen name="HomeContent" component={HomeContent} 
                options={{
                    title: "Minhas vacinas",
                    headerStyle: {
                        backgroundColor: '#C1E7E3',
                    },
                    headerTitleStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 26,
                        color: '#419ED7',
                    },
                    drawerIcon: () => 
                        (<Image style={[styles.iconVaccine, {marginTop: 30}]} 
                            source={require('../images/vaccine.png')} 
                        />
                    ),
                    drawerLabelStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 22,
                        marginTop: 30,
                        marginLeft: -20
                    }
                }}
            />
            <Drawer.Screen name="NextVaccines" component={NextVaccines}
                options={{
                    title: "Próximas vacinas",
                    headerStyle: {
                        backgroundColor: '#C1E7E3',
                    },
                    headerTitleStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 26,
                        color: '#419ED7',
                    },
                    drawerIcon: () => 
                        (<Image style={styles.iconVaccine} 
                            source={require('../images/calendar.png')} 
                        />
                    ),
                    drawerLabelStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 22,
                        marginLeft: -20
                    },
                    
                }}
            />
            <Drawer.Screen name="EditVaccine" component={EditVaccine}
                options={{
                    drawerItemStyle: {
                        display: 'none'
                    },
                    title: "Minhas Vacinas",
                    headerStyle: {
                        backgroundColor: '#C1E7E3',
                    },
                    headerTitleStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 26,
                        color: '#419ED7',
                    },
                }}
            />
            <Drawer.Screen name="NewVaccine" component={NewVaccine}
                options={{
                    drawerItemStyle: {
                        display: 'none'
                    },
                    title: "Minhas Vacinas",
                    headerStyle: {
                        backgroundColor: '#C1E7E3',
                    },
                    headerTitleStyle: {
                        fontFamily: 'AveriaLibre-Regular',
                        fontSize: 26,
                        color: '#419ED7',
                    },
                }}
            />
            
            
        </Drawer.Navigator>
        
    );
}

const styles = StyleSheet.create({
    iconVaccine: {
        width: 25,
        height: 25,
    }
})

export default Home