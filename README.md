# API Users

Uma API RESTful para gerenciamento de usuários construída com NestJS, TypeScript e PostgreSQL.

## 📋 Sobre o Projeto

Esta é uma API simples para gerenciamento de usuários que oferece operações CRUD (Create, Read, Update, Delete) completas. A API é construída usando o framework NestJS com TypeScript, proporcionando uma arquitetura robusta e escalável.

## 🚀 Tecnologias Utilizadas

- **NestJS** - Framework Node.js para aplicações server-side
- **TypeScript** - Superset do JavaScript com tipagem estática
- **PostgreSQL** - Banco de dados relacional
- **Docker** - Containerização da aplicação
- **Jest** - Framework de testes
- **ESLint** - Linter para JavaScript/TypeScript
- **Prettier** - Formatador de código

## 📁 Estrutura do Projeto

```
src/
├── app.controller.ts      # Controller principal da aplicação
├── app.module.ts         # Módulo raiz da aplicação
├── app.service.ts        # Serviço principal da aplicação
├── main.ts              # Arquivo de entrada da aplicação
└── users/
    ├── users.controller.ts  # Controller para operações de usuários
    ├── users.module.ts      # Módulo de usuários
    └── users.service.ts     # Serviço de usuários
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)
- Docker e Docker Compose

### Passos para instalação

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
   docker-compose up -d
   ```

4. **Execute a aplicação em modo de desenvolvimento**
   ```bash
   pnpm run start:dev
   ```

A API estará disponível em `http://localhost:3000`

## 📚 Documentação da API

### Endpoints Disponíveis

#### Usuários

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/users` | Lista todos os usuários |
| POST | `/users` | Cria um novo usuário |
| GET | `/users/:id` | Busca um usuário por ID |
| PUT | `/users/:id` | Atualiza um usuário |
| DELETE | `/users/:id` | Remove um usuário |

### Modelo de Dados

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}
```

### Exemplos de Uso

#### Criar um usuário
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com"
  }'
```

#### Listar todos os usuários
```bash
curl http://localhost:3000/users
```

#### Buscar usuário por ID
```bash
curl http://localhost:3000/users/1
```

#### Atualizar um usuário
```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "name": "João Silva Santos",
    "email": "joao.santos@email.com"
  }'
```

#### Deletar um usuário
```bash
curl -X DELETE http://localhost:3000/users/1
```

## 🧪 Testes

### Executar testes unitários
```bash
pnpm run test
```

### Executar testes em modo watch
```bash
pnpm run test:watch
```

### Executar testes com cobertura
```bash
pnpm run test:cov
```

### Executar testes e2e
```bash
pnpm run test:e2e
```

## 🏗️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `build` | Compila o projeto TypeScript |
| `start` | Inicia a aplicação |
| `start:dev` | Inicia em modo de desenvolvimento com hot-reload |
| `start:debug` | Inicia em modo debug |
| `start:prod` | Inicia em modo de produção |
| `lint` | Executa o linter ESLint |
| `format` | Formata o código com Prettier |
| `test` | Executa os testes unitários |
| `test:e2e` | Executa os testes end-to-end |

## 🐳 Docker

### Executar com Docker Compose
```bash
docker-compose up -d
```

### Parar os serviços
```bash
docker-compose down
```

## 🔧 Configuração do Banco de Dados

A aplicação utiliza PostgreSQL como banco de dados. As configurações padrão são:

- **Host**: localhost
- **Porta**: 5432
- **Usuário**: postgres
- **Senha**: postgres
- **Database**: postgres

## 📝 Desenvolvimento

### Estrutura de Commits

Utilize commits semânticos seguindo o padrão:

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

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença UNLICENSED. Veja o arquivo LICENSE para mais detalhes.

## 👥 Autores

- [Seu Nome](https://github.com/seu-usuario)

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através de:

- Email: seu-email@exemplo.com
- GitHub Issues: [Link para issues](https://github.com/seu-usuario/api-users/issues)

---

**Desenvolvido com ❤️ usando NestJS**