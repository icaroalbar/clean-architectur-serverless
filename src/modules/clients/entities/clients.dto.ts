export interface IClientBase {
    sigiloso?: boolean;
    whatsapp?: boolean;
    email_contato?: string;
    celular_contato?: string;
    fone_contato?: string;    
    cep?: string;
    uf?: string;
    logradouro?: string;
    cidade?: string;
    bairro?: string;
    numero?: string;
    complemento?: string;
    senha_gov?: string;
    status_inss?: string;    
    id_usuario?: number;
    tipo_pessoa?: 'F' | 'J';    
    info_adicional?: string;
    banco?: string;
    agencia?: string;
    conta?: string;
    chave_pix?: string;
  }
  
  export interface IClientPessoaFisica extends IClientBase {
    nome?: string;
    apelido?: string;
    cpf?: string;
    rg?: string;
    profissao?: string;
    empresa?: string;    
    nome_pai?: string;
    nome_mae?: string;
    naturalidade?: string;
    estado_civil?: string;
    dt_nascimento?: string;
    sexo?: string;
    nacionalidade?: string;
    ctps?: string;
    pis?: string;
    cnh?: string;
    passaporte?: string;
    certidao_reservista?: string;
    titulo_eleitoral?: string;
  }
  
  export interface IClientPessoaJuridica extends IClientBase {
    razao_social?: string;
    nome_fantasia?: string;
    cnpj?: string;
    responsavel?: string;
    site?: string;
    opt_simples_nacional?: boolean;
    inscricao_municipal?: string;
    inscricao_estadual?: string;
  }

  export type IClients = IClientPessoaFisica | IClientPessoaJuridica;