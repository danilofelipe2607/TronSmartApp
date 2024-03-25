import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import * as S from './styles';
import { IObrigacao } from 'src/types/CommonTypes';
import { Badge } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    checkColor,
    exclamationColor,
    hourglassHalfColor,
    hourglassStartColor,
    questionColor
} from '../../assets';

const Card = ({
    item,
    onPressCard,
    tag,
}: {
    item: IObrigacao;
    onPressCard: () => void;
    tag: string;
}) => {
    const color1 = '#293846';

    const changeStatus = (statusObrigacao: number) => {
        switch (statusObrigacao) {
            case 1: // Atrasada
                return 'Atrasada';
            case 2: // Aguardando Resposta
                return 'Aguardando Resposta';
            case 3: // em andamento
                return 'Em Andamento';
            case 4: // Aguardando Resposta Cliente
                return 'Aguardando Resposta';
            case 5: // nao iniciada
                return 'Não Iniciada';
            case 6: // Concluida
                return 'Concluída';
            default:
                return 'gray';
        }
    };

    const changeColor = (statusObrigacao: number) => {
        switch (statusObrigacao) {
            case 1: // Atrasada
                return '#EB5757';
            case 2: // Aguardando Resposta
                return '#F2994A';
            case 3: // em andamento
                return '#F2C94C';
            case 4: // Aguardando Resposta Cliente
                return '#F2994A';
            case 5: // nao iniciada
                return '#2F80ED';
            case 6: // Concluida
                return '#27AE60';
            default:
                return 'white';
        }
    };


    const defineIcone = (statusObrigacao: number) => {
        switch (statusObrigacao) {
            case 1:
                return exclamationColor;
            case 2:
                return questionColor;
            case 3:
                return hourglassHalfColor;
            case 5:
                return hourglassStartColor;
            case 6:
                return checkColor;
            default:
                return checkColor;
        }
    };

    return (
        <S.CardContainer backgroundColor={changeColor(item.obrigacao.status)}>
            <Pressable onPress={onPressCard}>
                {/* <S.Image
                    sharedTransitionTag={`image_${product.id}`}
                    source={product.image}

                /> */}
            </Pressable>
            <S.Content >
                <Pressable onPress={onPressCard} testID={`card${item.id}`}>
                    <S.Title>{item.descricao}</S.Title>
                    {item.listaDeAnexos.length > 0 && (
                        <></>
                        // <View
                        //     style={{
                        //         alignItems: 'center',
                        //         flex: 1,
                        //         justifyContent: 'center',
                        //     }}>
                        //     <MaterialIcons name="attach-file" size={25} />
                        //     {/* <Icon name="paperclip" size={25} /> */}
                        // </View>
                    )}
                    {item.obrigacao.tipoAtividade && (
                        <View>
                            <Text style={{ fontSize: 14, width: '100%', color: color1 }}>
                                {'Previsão de conclusão: '}
                                {item.obrigacao.dataVencimentoString}
                            </Text>
                            <View>
                                <Text style={{ fontSize: 14, width: '100%', color: color1 }}>
                                    {item.obrigacao.responsaveis.length > 1 ? 'Responsáveis: ' : 'Responsável: '}
                                </Text>
                                {item.obrigacao.responsaveis.map(res => {
                                    return (
                                        <Text
                                            key={res.responsavelId}
                                            style={{ fontSize: 14, width: '100%', color: color1 }}>
                                            {res.responsavel}
                                        </Text>
                                    );
                                })}
                            </View>
                        </View>
                    )}
                    {/* <S.Company >By {item.descricao}</S.Company>
                    <S.Description>{item.descricao}</S.Description > */}
                </Pressable>
                <S.Footer >
                    <Image
                        source={defineIcone(item.obrigacao.statusObrigacao)}
                        style={{
                            height: 40,
                            width: 40,
                            resizeMode: 'contain',
                            marginVertical: 6
                        }}
                    />
                    <Badge variant="outline" alignSelf="center">
                        <S.Price >{changeStatus(item.obrigacao.status)}</S.Price>
                    </Badge>




                </S.Footer>
            </S.Content>
        </S.CardContainer>
    );
};


export default Card;
