import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens";
import { RootStackParamList } from "./types";


const Stack = createNativeStackNavigator<RootStackParamList>();


const PublicNavigator: React.FC = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}


export default PublicNavigator; 