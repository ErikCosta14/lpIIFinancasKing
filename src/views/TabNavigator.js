import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, useWindowDimensions } from 'react-native';
import Home from './Home';
import Transacoes from './Transacoes';
import styles from '../styles/styles';
import styleMobile from '../styles/styleMobile';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const { width } = useWindowDimensions();
    const isCell = width < 1000;
    const estilos = isCell ? styleMobile : styles;

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#00490e',
                tabBarInactiveTintColor: '#666',
                tabBarStyle: estilos.tabBar,
                tabBarLabelStyle: estilos.tabBarLabel,
                tabBarIconStyle: estilos.tabBarIcon,
                tabBarItemStyle: {
                    paddingVertical: 1,
                    marginVertical: 1,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={Home}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, focused }) => (
                        <Text style={estilos.tabIcon}>📊</Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Transacoes"
                component={Transacoes}
                options={{
                    tabBarLabel: 'Transações',
                    tabBarIcon: ({ color, focused }) => (
                        <Text style={estilos.tabIcon}>💰</Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}