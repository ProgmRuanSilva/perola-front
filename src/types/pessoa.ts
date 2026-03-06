export interface Pessoa {
  id?: number | string;
  nomePessoa: string;
  cpfPessoa: string;
  contatoPessoa?: string;
  enderecoPessoa?: string;
  tipoPessoa?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type CreatePessoaDTO = Omit<Pessoa, "id" | "createdAt" | "updatedAt">;
export type UpdatePessoaDTO = Partial<CreatePessoaDTO>;
