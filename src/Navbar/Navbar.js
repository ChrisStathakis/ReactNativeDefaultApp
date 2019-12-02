import React from 'react';
import {createBottomTabNavigator } from 'react-navigation-tabs';
import HomepageScreen from '../Homepage/Homepage';
import UserScreen from '../Account/UserScreen';
import ExploreScreen from '../Explore/Explore';
import Icon from "react-native-vector-icons/FontAwesome";
import CategoryHomepageScreen from "../Category/Homepage";
import WorkOutNavigation from '../WorkOut/WorkOutNavigator';


const Navbar = createBottomTabNavigator({
        Home: {
            screen: HomepageScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={25} color={tintColor} />
                )
            }
        },
        Category: {
            screen: CategoryHomepageScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="hourglass" size={25} color={tintColor} />
                )
            }
        },
        Explore: {
            screen: ExploreScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="search" size={25} color={tintColor} />
                )
            }
        },
        Workouts: {
            screen: WorkOutNavigation
        },
        User: {
            screen: UserScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor}) => (
                    <Icon name='user' size={25} color={tintColor} />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#eb6e3d'
        }
    }
);


export default Navbar;