# NLW Agents

Projeto desenvolvido durante um evento da **Rocketseat** utilizando tecnologias modernas para criação de uma API robusta e eficiente.

## 🚀 Tecnologias

- **Node.js** com TypeScript nativo (experimental strip types)
- **Fastify** - Framework web rápido e eficiente
- **PostgreSQL** com extensão **pgvector** para vetores
- **Drizzle ORM** - Type-safe database operations
- **Zod** - Schema validation
- **Docker** - Containerização do banco de dados
- **Biome** - Linting e formatação de código

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular com:

- **Separação de responsabilidades** entre rotas, schemas e conexão com banco
- **Validação de schemas** com Zod para type safety
- **ORM type-safe** com Drizzle para operações de banco de dados
- **Validação de variáveis de ambiente** centralizadas

## ⚙️ Setup e Configuração

### Pré-requisitos

- Node.js (versão com suporte a `--experimental-strip-types`)
- Docker e Docker Compose

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd server
```

### 2. Configure o banco de dados

```bash
docker-compose up -d
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Instale as dependências

```bash
pnpm install
```

### 5. Execute as migrações do banco

```bash
pnpm exec drizzle-kit migrate
```

### 6. (Opcional) Popule o banco com dados de exemplo

```bash
pnpm run db:seed
```

### 7. Execute o projeto

**Desenvolvimento:**

```bash
pnpm run dev
```

**Produção:**

```bash
pnpm start
```

## 📚 Scripts Disponíveis

- `pnpm run dev` - Executa o servidor em modo de desenvolvimento com hot reload
- `pnpm start` - Executa o servidor em modo de produção
- `pnpm run db:seed` - Popula o banco de dados com dados de exemplo

## 🌐 Endpoints

A API estará disponível em `http://localhost:3333`

- `GET /health` - Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis
- `POST /rooms` - Cria uma nova sala
- `GET /rooms/:roomId/questions` - Lista as perguntas de uma sala
- `POST /rooms/:roomId/questions` - Cria uma pergunta em uma sala

---

Desenvolvido com ❤️ durante o NLW da Rocketseat
