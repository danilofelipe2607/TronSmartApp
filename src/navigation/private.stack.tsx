
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { CardDetail } from "@screens";

const Stack = createNativeStackNavigator();

const PrivateNavigator: React.FC = () => {

    return (
        <Stack.Navigator >
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                    presentation: 'containedModal',
                }}>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="CardDetail" component={CardDetail} />
            </Stack.Group>
        </Stack.Navigator >
    )
}


export default PrivateNavigator; 