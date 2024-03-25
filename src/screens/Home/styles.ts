import { CONTAINERHP } from '@utils';
import { FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

interface StyledAnimatedViewProps {
  paddingBottom: number;
}

export const Container = styled.View`
flex:1;
  background-Color:red;
  justify-content: center;
  align-items: center;
`;

export const ContainerList = styled(Animated.View) <StyledAnimatedViewProps>`
flex:1;
padding-bottom: ${props => props.paddingBottom}px;
`;

export const ContentList = styled(FlatList) <StyledAnimatedViewProps>`
padding-vertical: 50px;
padding-horizontal: ${CONTAINERHP}px;
padding-bottom: ${props => props.paddingBottom}px;
`;



export const ContainerScroll = styled.ScrollView`
  background-Color:blue;
  width: 100%;
  padding:5px;
`;



export const OptionText = styled.Text`
`;

