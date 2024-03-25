import React, { FC } from 'react';
import SearchInput from './SearchInput';
import IconButton from './IconButton';
import * as S from './styles';
type Props = {};

const ListHeader: FC<Props> = ({ }) => {
    return (
        <S.Container >
            <S.Header >Your Furniture</S.Header>
            <S.SubTitle >Your Choice !</S.SubTitle>
            <S.SearchBar >
                <SearchInput />
                <IconButton
                    icon="sliders"
                    roundness="small"
                    size="big"
                    iconColor="black"
                    style={{ backgroundColor: 'white' }}
                />
            </S.SearchBar>
        </S.Container>
    );
};

export default ListHeader;
