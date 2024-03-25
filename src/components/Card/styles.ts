import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import CustomButton from './CustomButton';

interface CardContainerProps {
    backgroundColor: string; // Propriedade opcional para a cor de fundo
}


export const CardContainer = styled.View<CardContainerProps>`
    flex-direction: row;
    background-color: ${props => props.backgroundColor};
    border-radius: 12px;
    padding: 16px;
    margin-vertical: 8px;
    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    }
    shadow-opacity: 0.25;
    shadow-radius: 3.84;
`;

export const Image = styled(Animated.Image)`
    resize-mode: stretch;
    width: 120px;
    height: 120px;
    border-radius: 12px;
    margin-right: 16px;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: white;
`;

export const Company = styled.Text`
    font-size: 14px;
    font-weight: 500;
    color: red;
    margin-top: 8px;
`;

export const Description = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: red;
    margin-top: 8px;
    margin-bottom: 16px;
    line-height: 20px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Price = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

export const Button = styled(CustomButton)`
    background-color: green;
    height: 34px;
    margin-left: 16px;
    padding-horizontal: 16px;
`;