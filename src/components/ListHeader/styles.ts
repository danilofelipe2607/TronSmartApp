import styled from 'styled-components/native';

export const Container = styled.View`
    position: relative;
`;

export const Header = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: #545264;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-top: 10px;
    color: #545264;
`;

export const SearchBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

export const ContainerSearch = styled.View`
    background-color: #fff;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 10px;
    border-width: 1px;
    border-color: #ddd;
    height: 50px;
`;

export const Input = styled.TextInput`
    margin-left: 10px;
    font-size: 20px;
    color: #333;
    width: 70%;
`;