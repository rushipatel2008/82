import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";
import FeedScreen from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

const Tab=createMaterialBottomTabNavigator()
const BottomTabNavigator=()=>{
return(
    <Tab.Navigator
    labeled={false}
    barStyle={styles.bottomTabStyle}
    screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconname
            if(route.name==='Feed'){
                iconname=focused?'home':'home-outline'
            }
            else if(route.name='CreatePost'){
                iconname=focused?'add-circle':'add-circle-outline'
            }
            return(
                <Ionicons
                name={iconname}
                size={RFValue(25)}
                color={color}
                style={styles.icon}

                />
            )

        }
    })}
    activeColor={'blue'}
    inactiveColor={'green'}

    >
    <Tab.Screen name='Feed' component={FeedScreen}

    
    />
    <Tab.Screen name='CreatePost' component={CreatePost}/>

        </Tab.Navigator>
        
)
}
const styles=StyleSheet.create({
bottomTabStyle:{
    backgroundColor:'red',
height:'8%',
borderTopLeftRadius:30,
borderTopRightRadius:30,
overflow:'hidden',
position:'absolute',

},
icons:{
    width:RFValue(30),
    height:RFValue(30),

}

})
export default BottomTabNavigator