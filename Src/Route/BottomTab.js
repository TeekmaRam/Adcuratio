
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Node } from '../Component/Node'
import { View } from 'react-native'
import { ReactNative } from '../Component/ReactNative'
import { Reactcomponent } from '../Component/Reactcomponent'
import NodeIcon from '../Component/Img/NodeIcon'
import ReactIcon from '../Component/Img/ReactIcon'


const Tab = createBottomTabNavigator()

const BottomTab = () => {
    const Tabstyle = {
        headerStyle: {
            backgroundColor: 'green',
        },
        headerTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
    };

    const tabOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {


            return <View style={{ height: 28, marginLeft: 57 }} >
                {route.name === 'React' ? <ReactIcon clr={focused ? "green" : "gray"} /> : null}
                {route.name === 'ReactNative' ? <ReactIcon clr={focused ? "green" : "gray"} /> : null}
                {route.name === 'Node' ? <NodeIcon clr={focused ? "green" : "gray"} /> : null}
            </View>
        },
    });

    return (
        <Tab.Navigator
            screenOptions={tabOptions}
            tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="React" component={Reactcomponent} options={Tabstyle} />
            <Tab.Screen name="ReactNative" component={ReactNative} options={Tabstyle} />
            <Tab.Screen name="Node" component={Node} options={Tabstyle} />
        </Tab.Navigator>
    );
};



export default BottomTab;


