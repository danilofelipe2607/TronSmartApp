
import { FlatList, ScrollView, StyleSheet, } from "react-native";
import { Actionsheet, Box, View, useDisclose, Button, Text } from "native-base";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from './styles';
import { ITenant } from "@types";
import { getTenantSelect } from "../../redux/actions";
import { SCREEN_HEIGHT } from "@utils";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetTenant, Card, Filter, ListHeader } from "@components";
import { RootState, useAppDispatch } from "../../redux/store";

export default function Home({ navigation }: any) {
    const insets = useSafeAreaInsets();

    const { auth, empresa } = useSelector((state: RootState) => state)


    const handleCardPress = (card: any) => {
        navigation.navigate('CardDetail', {
            card: card,
        });
    };

    const renderItem = ({ item }: { item: any }) => (
        <Card
            tag={`image_${item.id}`}
            onPressCard={() => handleCardPress(item)}
            key={item.id}
            item={item}
        />
    );



    const mockData = [
        {
            id: 12,
            descricao: "Descrição da obrigação 1",
            listaDeAnexos: [
                { nome: "Anexo 1", url: "https://exemplo.com/anexo1.pdf" },
                { nome: "Anexo 2", url: "https://exemplo.com/anexo2.pdf" }
            ],
            obrigacao: {
                tipoAtividade: "Tipo de atividade 1",
                dataVencimentoString: "2024-12-31",
                responsaveis: [{ responsavel: "Responsável 1", responsavelId: 1 }, { responsavel: "Responsável 2", responsavelId: 2 }],
                status: 2,
                statusObrigacao: 1
            }
        },
        {
            id: 11,
            descricao: "Descrição da obrigação 2",
            listaDeAnexos: [
                { nome: "Anexo 3", url: "https://exemplo.com/anexo3.pdf" }
            ],
            obrigacao: {
                tipoAtividade: "Tipo de atividade 2",
                dataVencimentoString: "2024-11-30",
                responsaveis: [{ responsavel: "Responsável 1", responsavelId: 1 }, { responsavel: "Responsável 2", responsavelId: 2 }],
                status: 6,
                statusObrigacao: 2
            }
        }
    ];
    return (
        <S.Container >
            <BottomSheetTenant />
            <S.ContainerList paddingBottom={insets.bottom}>
                <S.ContentList
                    paddingBottom={SCREEN_HEIGHT / 4}
                    testID="productsFlatList"
                    ListHeaderComponent={() => {
                        return (
                            <><ListHeader />
                                <Filter />
                            </>
                        );
                    }}
                    data={mockData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </S.ContainerList>



        </S.Container>
    );
}