import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export declare type RootStackParamList = {
    Login: undefined;
    Home: undefined

}

export type RouteProps<T extends keyof RootStackParamList> = {
    route: RouteProp<RootStackParamList, T>;
};

// Defina o tipo da navegação
export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: NativeStackNavigationProp<RootStackParamList, T>;
};



//types


export interface LoginProps extends RouteProps<'Login'>, NavigationProps<'Login'> {
    // Outras propriedades do componente, se houver
}