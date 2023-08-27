# Locadora de Filmes com TypeORM

Este projeto consiste na criação de uma API para uma locadora de filmes utilizando o TypeORM como ORM (Object-Relational Mapping). A API permite cadastrar, listar, atualizar e deletar filmes. Os dados são armazenados em um banco de dados PostgreSQL.

## Tecnologias

- TypeScript
- TypeORM
- PostgreSQL
- Zod (serialização de dados)

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/locadora-filmes-typeorm.git
cd locadora-filmes-typeorm
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo .env baseado no .env.example e configure a URL de conexão com o banco de dados PostgreSQL.

4. Execute as migrações para criar as tabelas no banco de dados:

```bash
npm run typeorm migration:run
```

5. Inicie o servidor:
``` bash
npm run start
```

6. Acesse a API em http://localhost:3000.
Endpoints
POST /movies: Cadastra um novo filme.
GET /movies: Lista todos os filmes cadastrados com paginação, ordenação e filtros.
PATCH /movies/:id: Atualiza um filme pelo id.
DELETE /movies/:id: Deleta um filme pelo id.
Regras da Aplicação
Os filmes são cadastrados na tabela movies no banco de dados.
A tabela movies possui as colunas: id, name, description, duration e price.
A serialização dos dados de entrada é feita utilizando a biblioteca Zod.
A rota GET /movies realiza a paginação dos resultados com os query params page, perPage, order e sort.