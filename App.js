import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {AntDesign, MaterialIcons} from '@expo/vector-icons';
import UIView from "./UIView";
import CalculationView from "./CalculationView";

export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
      <Tab.Navigator
          initialRouteName="UI-View"
          screenOptions={{
              title: "React Native Test App",
              headerStyle: {backgroundColor:'#2196F3FF'},
              headerTintColor: '#fff',
              tabBarActiveTintColor: '#2196F3FF',
              tabBarLabelPosition: "below-icon",
              unmountOnBlur: true
          }}
      >
        <Tab.Screen
            name="UI-View"
            component={UIView}
            options={{
                tabBarLabel:"UI-View",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="eye" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Calculation-View"
            component={CalculationView}
            options={{
                tabBarLabel: "Calculation-View",
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="calculate" color={color} size={size} />
                ),
            }}
        />
      </Tab.Navigator>
  );
}
