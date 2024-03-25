import { ButtonForm } from '@components';
import styled from 'styled-components/native';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
flex:1;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 5%;
background-color: #ffffff;
`;

export const BodyView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

`;

export const ContainerForm = styled.View`
  width: 80%;
  align-items: center;
  height:220px;
`;

export const BiometryContainer = styled.View`
flex-direction: column;
margin-top: 150px;
width: 180px;
align-items: center;
justify-content: center;
`;

export const BiometryText = styled.Text`
text-align:center;

font-weight: bold;

`;
// color: ${props => props.theme.colors.primary[900]};
export const LoginButton = styled(ButtonForm)`
margin-top: 30px;

`;

export const Img = styled.Image`
  width: 180px;
  height: 120px;
`;


// ${props => props.theme.background[50]};