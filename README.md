# 🚀 API Users - Projeto de Estudos

Uma API RESTful completa para gerenciamento de usuários construída com **NestJS**, **TypeScript**, **Prisma** e **PostgreSQL**. Este é um projeto de estudos que demonstra as melhores práticas de desenvolvimento backend moderno.

## 📋 Sobre o Projeto

Esta API oferece operações CRUD (Create, Read, Update, Delete) completas para gerenciamento de usuários, implementando:

- **Arquitetura modular** com NestJS
- **ORM moderno** com Prisma
- **Tipagem forte** com TypeScript
- **Banco de dados relacional** PostgreSQL
- **Containerização** com Docker
- **Testes automatizados** com Jest
- **Linting e formatação** com ESLint + Prettier

## 🛠️ Stack Tecnológica

### Backend
- **NestJS 11.x** - Framework Node.js para aplicações server-side
- **TypeScript 5.7** - Superset do JavaScript com tipagem estática
- **Prisma 6.17** - ORM moderno para TypeScript e Node.js
- **PostgreSQL 15** - Banco de dados relacional

### Ferramentas de Desenvolvimento
- **Docker & Docker Compose** - Containerização
- **Jest** - Framework de testes
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código
- **pnpm** - Gerenciador de pacotes rápido

## 📁 Estrutura do Projeto

```
api-users/
├── src/
│   ├── app.controller.ts      # Controller principal
│   ├── app.module.ts         # Módulo raiz
│   ├── app.service.ts        # Serviço principal
│   ├── main.ts              # Arquivo de entrada
│   ├── db/
│   │   └── index.ts         # Configuração do Prisma Client
│   └── users/
│       ├── users.controller.ts  # Controller de usuários
│       ├── users.module.ts      # Módulo de usuários
│       └── users.service.ts     # Serviço de usuários
├── prisma/
│   ├── schema.prisma        # Schema do banco de dados
│   └── migrations/          # Migrações do banco
├── test/                    # Testes e2e
├── docker-compose.yaml      # Configuração Docker
├── .env                     # Variáveis de ambiente
└── package.json            # Dependências e scripts
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes)
- **Docker** e **Docker Compose**
- **PostgreSQL** (via Docker)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd api-users
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Configure o banco de dados**
   ```bash
   # Inicie o PostgreSQL via Docker
   docker-compose up -d
   ```

4. **Configure as variáveis de ambiente**
   ```bash
   # O arquivo .env já está configurado com:
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
   ```

5. **Execute as migrações do banco**
   ```bash
   npx prisma migrate dev
   ```

6. **Gere o cliente Prisma**
   ```bash
   npx prisma generate
   ```

7. **Execute a aplicação**
   ```bash
   pnpm run start:dev
   ```

A API estará disponível em `http://localhost:3000`

## 📚 Documentação da API

### Base URL
```
http://localhost:3000
```

### Endpoints Disponíveis

#### Usuários

| Método | Endpoint | Descrição | Parâmetros |
|--------|----------|-----------|------------|
| `GET` | `/users` | Lista todos os usuários | - |
| `POST` | `/users` | Cria um novo usuário | `name`, `email` |
| `GET` | `/users/:id` | Busca um usuário por ID | `id` (UUID) |
| `PUT` | `/users/:id` | Atualiza um usuário | `id` (UUID), `name`, `email` |
| `DELETE` | `/users/:id` | Remove um usuário | `id` (UUID) |

### Modelo de Dados

```typescript
interface User {
  id: string;           // UUID gerado automaticamente
  name: string;        // Nome do usuário
  email: string;        // Email único
  createdAt: Date;     // Data de criação (automática)
  updatedAt: Date;     // Data de atualização (automática)
}
```

### Exemplos de Uso

#### 1. Criar um usuário
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com"
  }'
```

**Resposta:**
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "João Silva",
  "email": "joao@email.com",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

#### 2. Listar todos os usuários
```bash
curl http://localhost:3000/users
```

#### 3. Buscar usuário por ID
```bash
curl http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000
```

#### 4. Atualizar um usuário
```bash
curl -X PUT http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Santos",
    "email": "joao.santos@email.com"
  }'
```

#### 5. Deletar um usuário
```bash
curl -X DELETE http://localhost:3000/users/123e4567-e89b-12d3-a456-426614174000
```

## 🗄️ Banco de Dados

### Schema Prisma

```prisma
model User {
  id        String   @id @default(uuid()) @db.Uuid
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Configuração do Banco

- **Host:** localhost
- **Porta:** 5432
- **Usuário:** postgres
- **Senha:** postgres
- **Database:** postgres

### Comandos Úteis do Prisma

```bash
# Visualizar dados no banco
npx prisma studio

# Resetar o banco de dados
npx prisma migrate reset

# Aplicar migrações pendentes
npx prisma migrate deploy

# Gerar cliente Prisma
npx prisma generate
```

## 🧪 Testes

### Executar Testes

```bash
# Testes unitários
pnpm run test

# Testes em modo watch
pnpm run test:watch

# Testes com cobertura
pnpm run test:cov

# Testes end-to-end
pnpm run test:e2e
```

### Estrutura de Testes

```
test/
├── app.e2e-spec.ts     # Testes e2e da aplicação
└── jest-e2e.json      # Configuração Jest para e2e
```

## 🏗️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `build` | Compila o projeto TypeScript |
| `start` | Inicia a aplicação |
| `start:dev` | Inicia em modo desenvolvimento com hot-reload |
| `start:debug` | Inicia em modo debug |
| `start:prod` | Inicia em modo de produção |
| `lint` | Executa o linter ESLint |
| `format` | Formata o código com Prettier |
| `test` | Executa os testes unitários |
| `test:e2e` | Executa os testes end-to-end |

## 🐳 Docker

### Executar com Docker Compose

```bash
# Iniciar serviços
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down

# Parar e remover volumes
docker-compose down -v
```

### Configuração Docker

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=postgres
    ports:
      - 5432:5432
    volumes:
      - postgres-data:/var/lib/postgresql/data

volumes:
  postgres-data:
```

## 🎯 Conceitos de Estudo

Este projeto demonstra os seguintes conceitos importantes:

### Arquitetura
- **Modularização** com NestJS Modules
- **Injeção de Dependência** com decorators
- **Separação de Responsabilidades** (Controller, Service, Repository)

### Banco de Dados
- **ORM moderno** com Prisma
- **Migrações** de schema
- **Relacionamentos** e constraints
- **Queries type-safe**

### TypeScript
- **Tipagem forte** em toda a aplicação
- **Interfaces** e tipos customizados
- **Generics** para reutilização de código
- **Decorators** para metadados

### Boas Práticas
- **Async/Await** para operações assíncronas
- **Error Handling** com exceptions customizadas
- **Validation** de dados de entrada
- **Code formatting** e linting

## 🔧 Desenvolvimento

### Estrutura de Commits

Utilize commits semânticos:

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração de código
test: adiciona ou corrige testes
chore: tarefas de manutenção
```

### Padrões de Código

- Utilize TypeScript com tipagem explícita
- Siga as convenções do ESLint configurado
- Mantenha o código formatado com Prettier
- Escreva testes para novas funcionalidades
- Use async/await para operações assíncronas

### Adicionando Novas Funcionalidades

1. **Crie o modelo** no `schema.prisma`
2. **Execute a migração** com `npx prisma migrate dev`
3. **Gere o cliente** com `npx prisma generate`
4. **Implemente o service** com métodos async
5. **Crie o controller** com endpoints REST
6. **Adicione testes** unitários e e2e

## 📈 Próximos Passos

### Funcionalidades que podem ser adicionadas:

- [ ] **Autenticação JWT** com login/logout
- [ ] **Validação de dados** com class-validator
- [ ] **Upload de arquivos** para avatares
- [ ] **Paginação** nas listagens
- [ ] **Filtros e busca** avançada
- [ ] **Logs** estruturados
- [ ] **Rate limiting** para proteção
- [ ] **Swagger/OpenAPI** para documentação
- [ ] **Testes de integração** mais robustos
- [ ] **CI/CD** com GitHub Actions

## 🤝 Contribuição

Este é um projeto de estudos! Sinta-se à vontade para:

1. **Fork** o projeto
2. **Criar uma branch** para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abrir um Pull Request**

## 📄 Licença

Este projeto está sob a licença UNLICENSED - projeto de estudos.

## 👥 Autor

- **Gabriel Caiana** - [GitHub](https://github.com/gabrielcaiana)

## 📞 Suporte

Para dúvidas sobre este projeto de estudos:

- **GitHub Issues:** [Link para issues](https://github.com/gabrielcaiana/api-users/issues)
- **Email:** gabrielcaianaguedes@gmail.com

---

**🎓 Projeto desenvolvido para fins de estudo e aprendizado**

*Construído com ❤️ usando NestJS, TypeScript, Prisma e PostgreSQL*
