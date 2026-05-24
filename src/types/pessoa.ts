export type TipoPessoa = 'beneficiario' | 'voluntario' | 'funcionario';

export interface Pessoa {
  id?: number | string;
  nomePessoa: string;
  cpfPessoa: string;
  contatoPessoa?: string;
  enderecoPessoa?: string;
  tipoPessoa?: TipoPessoa;
  createdAt?: string;
  updatedAt?: string;
}

export type CreatePessoaDTO = Omit<Pessoa, "id" | "createdAt" | "updatedAt">;
export type UpdatePessoaDTO = Partial<CreatePessoaDTO>;

export type PessoaComContato = Pessoa & {
  emailPessoa: string;
};
