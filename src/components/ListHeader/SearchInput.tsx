import React, {FC} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import * as S from './styles';

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchInput: FC<Props> = ({value, onChangeText}) => {
  return (
    <S.ContainerSearch >
      <Feather name="search" size={28} color="#666" />
      <S.Input
        value={value}
        placeholder={'Procurar'}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
      />
    </S.ContainerSearch >
  );
};


export default SearchInput;
