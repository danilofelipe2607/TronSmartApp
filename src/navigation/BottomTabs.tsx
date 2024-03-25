
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from "react-native";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Icon } from "native-base";
import { Home } from "@screens";
import CustomBottomTab from "../components/CustomBottomTab";


const Tab = createBottomTabNavigator<RootStackParamList>();



function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const HomeIcon = () => <Icon as={<MaterialIcons name="home" />} color='primary.50' size={8} />;
const SolicitationIcon = () => <Icon as={<MaterialIcons name="task" />} color='primary.50' size={8} />;
const NotificationIcon = () => <Icon as={<MaterialIcons name="notifications" />} color='primary.50' size={8} />;
const SobreIcon = () => <Icon as={<MaterialIcons name="info" />} color='primary.50' size={8} />;

const BottomTabs: React.FC = () => {

    return (
        <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}
        >
            <Tab.Group
                screenOptions={{
                    headerShown: false,
                }}>
                <Tab.Screen
                    options={{ tabBarLabel: 'Home' }}
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    options={{ tabBarLabel: 'Cart' }}
                    name="Cart"
                    component={SettingsScreen}
                />

                <Tab.Screen
                    options={{ tabBarLabel: 'Favourites' }}
                    name="Favourites"
                    component={SettingsScreen}
                />
                <Tab.Screen
                    options={{ tabBarLabel: 'Profile' }}
                    name="Sobre"
                    component={SettingsScreen}
                />



            </Tab.Group>

        </Tab.Navigator>
    )
}


export default BottomTabs; 