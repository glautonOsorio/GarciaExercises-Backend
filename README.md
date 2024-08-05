# Garcia Exercise Backend

O Garcia Exercises Backend é uma plataforma que facilita o gerenciamento de exercícios e locais para atividades físicas serem praticadas. Com essa aplicação, eu posso cadastrar novos locais de exercícios, encontrar pontos próximos, visualizar informações sobre os exercícios em cada ponto e registrar minhas próprias contribuições para o sistema. O projeto é um MVP (Minimum Viable Product) da aplicação Back-End, desenvolvida utilizando Node.js, Express e PostgreSQL

## Requisitos

- Node.js (versão 18.x ou superior)
- PostgreSQL (ou outro banco de dados configurado)

## Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/glautonOsorio/GarciaExercises-Backend.git
   ```

2. **Instale as dependências:**

   ```bash
   cd garcia-exercise-backend
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env
   # Porta onde o servidor vai rodar
   APP_PORT=3000

   # Dialeto do banco de dados (por exemplo, postgres, mysql, sqlite)
   DB_DIALECT=postgres

   # Host do banco de dados
   DB_HOST=localhost

   # Nome de usuário do banco de dados
   DB_USERNAME=seu_usuario

   # Senha do banco de dados
   DB_PASSWORD=sua_senha

   # Nome do banco de dados
   DATABASE=nome_do_banco

   # Porta do banco de dados
   DB_PORT=5432

   # Segredo para JWT (deve ser uma string secreta e complexa)
   JWT_SECRET=seu_segredo_jwt
   ```

4. **Execute as migrações do banco de dados:**

   ```bash
   npm run db:migrate
   ```

5. **Execute os seeders do banco de dados:**

   ```bash
   npm run db:seed
   ```

6. **Inicie o servidor:**

   Para desenvolvimento, use:

   ```bash
   npm run dev
   ```

   Para produção, use:

   ```bash
   npm start
   ```

## Scripts

- `npm start`: Inicia o servidor em modo de produção.
- `npm run dev`: Inicia o servidor com Nodemon para desenvolvimento.
- `npm run db:migrate`: Executa as migrações do banco de dados.
- `npm run db:migrate:undo`: Reverte todas as migrações.
- `npm run db:seed`: Executa os seeds do banco de dados.
- `npm run db:seed:undo`: Reverte todos os seeds.
- `npm run start:gendoc`: Gera a documentação Swagger.

## Endpoints

- **Usuários**

  - `POST /login`: Faz login do usuário.
  - `GET /users`: Lista todos os usuários.
  - `GET /users/:id`: Mostra detalhes de um usuário específico.
  - `DELETE /users/:id`: Deleta um usuário específico.
  - `POST /users`: Cria um novo usuário.
  - `PUT /users/:id`: Atualiza um usuário específico.

- **Locais**

  - `GET /locals`: Lista todos os locais.
  - `GET /locals/:id`: Mostra detalhes de um local específico.
  - `DELETE /locals/:id`: Deleta um local específico.
  - `GET /locals/:localId/maps`: Mostra o link do Google Maps para um local específico.
  - `POST /locals`: Cria um novo local.
  - `PUT /locals/:id`: Atualiza um local específico.

- **Admin**
  - `GET /admins`: Lista todos os admins.
  - `GET /admins/:id`: Mostra detalhes de um admin específico.
  - `DELETE /admins/:id`: Deleta um admin específico.
  - `POST /admins`: Cria um novo admin.
  - `PUT /admins/:id`: Atualiza um admin específico.

## Documentação da API

A documentação da API é gerada automaticamente usando `swagger-autogen` e pode ser acessada em `http://localhost:3000/api-docs` após iniciar o servidor.

## Autor e Professor

- **Autor:** [Glauton Osório](https://github.com/glautonOsorio)

- **Gato do Autor:** [Uni](https://github.com/glautonOsorio)
- **Amante de Batata:** [Batata](https://github.com/glautonOsorio)

- **Professor**
  [Rawan Hawangledt](https://github.com/Hawangledt)
