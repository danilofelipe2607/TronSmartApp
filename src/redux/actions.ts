

import { api, sentinelaAPI } from "@utils";
import { AlertService } from "@components";
import { storage } from "../mmkv";
import { BASE_URL_SENTINELA } from "@env";
import { setAuthToken, setTenant, setTenants } from "./authSlice";
import { IEmpresa, IEmpresaData, ITenant } from "@types";
import { setDados, setObrigacoes, setPessoas, setPessoasEncaminhar, setTimeline, setTimelineTitle } from "./empresaSlice";
import { Dispatch } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";




export interface FormLogin {
    usuario: string;
    senha: string;
}




export const login = (form: FormLogin) => async (dispatch: Dispatch) => {

    try {
        const { data } = await sentinelaAPI.post('autenticacao/login', { "senha": "tron0001", "usuario": "contador.inovacao@tron.com.br" });

        if (data) {
            dispatch(setAuthToken(data.token))
            const tenants = await data.tenants.filter((item: { modulo: number; }) => {
                return item.modulo === 1;
            });
            const newResultLogin = { ...data, tenants };
            dispatch(setTenants(tenants))
        }
        console.log(data.token, "data.token")
        await AsyncStorage.setItem('token', data.token);


    } catch (error) {
        console.log("error", error);
        // AlertService.showAlert("error")
    }
}


export const getTenantSelect = (tenant: ITenant) => async (dispatch: Dispatch) => {

    try {
        await AsyncStorage.setItem('tenant', tenant.usuarioId);
        const { data } = await api.get(`apps/${tenant.usuarioId}`);

        if (data.permissoes && data.permissoes.length === 1) {
            console.log("hello 2")
            dispatch(setDados(data.permissoes[0]))
            dispatch(getTimeline(data.permissoes[0].dados))
        }
        else if (data.permissoes && data.permissoes.length !== 0) {    //seleciona empresa}
        }





        const teste = { "bairro": "CENTRO", "celular": null, "celularWhatsApp": false, "cep": "75830000", "cidadeCodigo": 0, "cidadeDescricao": null, "cidadeEstado": null, "cidadeId": "fc709248-7163-4d6a-19a3-08d55da3fa52", "cnaeCodigo": null, "cnaeDescricao": null, "cnaeId": "d89e2cff-c157-4f28-61ab-08d55da3f6fd", "codigo": 1, "complemento": "", "dataAbertura": "1994-04-19T03:00:00-03:00", "dataInativacao": null, "emailAlternativo": null, "emailPrincipal": "rafael.costa@tron.com.br", "empresaBaseEmailPrincipal": null, "empresaBaseId": null, "empresaBaseRazaoSocial": null, "empresaContabilId": "f54a7892-ec10-414e-b763-21782f45fcd0", "facebook": null, "fax": null, "id": "3ea80067-c09a-4f39-1ec7-08d53a83ae33", "inativar": false, "inscricao": "97435390000164", "inscricaoCAEPF": null, "inscricaoEstadual": null, "inscricaoMascarado": "97.435.390/0001-64", "inscricaoMunicipal": null, "inscricaoRazaoSocialMascarado": "97.435.390/0001-64 - EMPRESA MODELO", "instagram": null, "isEscritorio": true, "logoTipo": null, "logoTipoUrl": "", "logradouro": "AV PRIMEIRA", "naturezaJuridicaCodigo": null, "naturezaJuridicaId": null, "nomeFantasia": "EMPRESA MODELO", "numero": "214", "razaoSocial": "EMPRESA MODELO", "site": null, "status": true, "telefone": "6436611195", "tipoInscricao": 1, "twitter": null }

    } catch (error) {
        console.log("error", error);
        AlertService.showAlert("error")
    }

}
export const getTimeline = (empresa: IEmpresa) => async (dispatch: Dispatch) => {

    try {
        console.log("hello 2")
        const periodoVigencia = "01/2024"
        //pessoas
        const pessoas = await api.get(`pessoas/escritorio/exceto/null`);
        if (pessoas) dispatch(setPessoas(pessoas.data))


        //timeline
        dispatch(setTimelineTitle(empresa.razaoSocial))

        const form = {
            periodoVigencia,
            ordemObrigacoes: [],
            empresaId: empresa.id,
            atividades: [],

            setores: [],
            tiposAtividades: [],
            statusObrigacoes: [],
            responsaveis: [],
            showAtividadesConcluidas: true,
        };
        const { data } = await api.post(`dashboard/obrigacoes-por-empresa`, form);
        if (data) dispatch(setObrigacoes(data))

    } catch (error) {
        console.log("error", error);
        AlertService.showAlert("error")
    }
}
export const getPessoasEscritorio = async () => {
    try {
        const pessoas = await api.get(`pessoas/escritorio/exceto/null`);
        return await pessoas.data;
    } catch (error) {
        return error;
    }
};


