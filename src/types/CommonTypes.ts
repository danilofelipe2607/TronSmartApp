export interface ITenant {
    ativo: boolean,
    criadoEm: string,
    endereco: string,
    modulo: number,
    nome: string,
    role: string,
    tenantId: string,
    usuarioId: string,
}

export interface IEmpresa {
    bairro: string;
    celular: string | null;
    celularWhatsApp: boolean;
    cep: string;
    cidadeCodigo: number;
    cidadeDescricao: string | null;
    cidadeEstado: string | null;
    cidadeId: string;
    cnaeCodigo: string | null;
    cnaeDescricao: string | null;
    cnaeId: string;
    codigo: number;
    complemento: string;
    dataAbertura: string;
    dataInativacao: string | null;
    emailAlternativo: string | null;
    emailPrincipal: string;
    empresaBaseEmailPrincipal: string | null;
    empresaBaseId: string | null;
    empresaBaseRazaoSocial: string | null;
    empresaContabilId: string;
    facebook: string | null;
    fax: string | null;
    id: string;
    inativar: boolean;
    inscricao: string;
    inscricaoCAEPF: string | null;
    inscricaoEstadual: string | null;
    inscricaoMascarado: string;
    inscricaoMunicipal: string | null;
    inscricaoRazaoSocialMascarado: string;
    instagram: string | null;
    isEscritorio: boolean;
    logoTipo: string | null;
    logoTipoUrl: string;
    logradouro: string;
    naturezaJuridicaCodigo: string | null;
    naturezaJuridicaId: string | null;
    nomeFantasia: string;
    numero: string;
    razaoSocial: string;
    site: string | null;
    status: boolean;
    telefone: string;
    tipoInscricao: number;
    twitter: string | null;
}

export interface Timeline {
    obrigacoes: any[] | null;
    title: string;
}

export interface IEmpresaData {
    dados: IEmpresa;
    pessoasEncaminhar: any[] | null;
    timeline: Timeline;
}
export interface IObrigacao {
    id: string;
    descricao: string;
    listaDeAnexos: any
    obrigacao: {
        tipoAtividade: any
        dataVencimentoString: string
        responsaveis:
        { responsavel: string, responsavelId: string }[]
        status: number
        statusObrigacao: any
    }
}