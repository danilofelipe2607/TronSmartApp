import { View } from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps {
    windowHeight: number;
}

export const ScrollWrapper = styled.View`
justify-content: center;
align-items: center;
    min-height:70vh;
`;

export const Scroll = styled.ScrollView`
`;