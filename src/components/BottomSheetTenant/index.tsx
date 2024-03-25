
import { ScrollView, View, useWindowDimensions, } from "react-native";
import { Actionsheet, Box, useDisclose, Text } from "native-base";
import { useEffect, useState } from "react";
import { ITenant } from "@types";
import { getTenantSelect } from "../../redux/actions";
import * as S from './styles';

import { RootState, useAppDispatch, useAppSelector } from "../../redux/store";
import { Loading } from "@components";

export default function BottomSheetTenant() {
    const [load, setLoad] = useState<boolean>(false)
    const [selectTenant, setSelectTenant] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const { auth, empresa } = useAppSelector((state: RootState) => state)
    const { tenants = [] } = auth
    useEffect(() => {
        onOpen()
    }, [])

    const handleTenantAction = async (tenant: ITenant) => {
        //setSelectTenant(true)
        setLoad(true)
        await dispatch(getTenantSelect(tenant))
        //setSelectTenant(true)
        setLoad(false)
        //onClose()
    };

    const handleAction = async (tenant: ITenant) => {
        setSelectTenant(true)
        setLoad(true)
        await dispatch(getTenantSelect(tenant))
        setSelectTenant(true)
        setLoad(false)
        //onClose()
    };

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator >
            <Actionsheet.Content borderTopRadius="0">
                <S.ScrollWrapper>
                    <S.Scroll>
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            {!selectTenant && "Selecione um tenant"}
                        </Text>
                        <Loading isLoading={load} />
                        {!selectTenant && tenants.map((tenant: ITenant) => (<Text onPress={() => handleTenantAction(tenant)} key={tenant.tenantId}>{tenant.nome}</Text>))}
                    </S.Scroll>
                </S.ScrollWrapper>
            </Actionsheet.Content>
        </Actionsheet >
    );
}