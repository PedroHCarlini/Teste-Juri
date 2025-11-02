# API DataJud

Esta é uma API desenvolvida em **Node.js** com **NestJS**, utilizando **Kafka** para mensageria e **MongoDB** como banco de dados. A API permite o gerenciamento e consumo de processos judiciais trabalhistas, incluindo suporte a **Dead Letter Queue** para mensagens que não puderam ser processadas.

---

## ✅ Pré-requisitos

Antes de executar, certifique-se de ter os seguintes itens instalados:

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- (Opcional) [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- IDE de sua preferência: VSCode, IntelliJ, WebStorm, etc.

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/PedroHCarlini/Teste-Juri
cd Teste-Juri
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

---

## 🛠️ Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias:

```
PORT=3000
DATAJUD_API_KEY=APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==
DATAJUD_URL=https://api-publica.datajud.cnj.jus.br/api_publica_trt15/_search
MONGO_URI=mongodb://root:juri@localhost:27017/mongodb?authSource=admin
KAFKA_BROKER=localhost:9092
JWT_SECRET=JuriJWT
JWT_EXPIRES_IN=7d
```

---

## 🚀 Executando a API

### Com Node.js (para desenvolvimento local)

```bash
npm run start:dev
# ou
yarn start:dev
```

> ⚠️ Para que a API funcione corretamente, é necessário que os serviços de **MongoDB** e **Kafka** estejam rodando. O jeito mais fácil de garantir isso é usando o **Docker Compose**.

### Com Docker Compose (recomendado)

```bash
docker-compose up
```

> Isso irá subir os containers do **MongoDB** e do **Kafka** automaticamente, garantindo que a API tenha todos os serviços necessários para funcionar.

## 📡 Rotas e Swagger

A API possui documentação Swagger em:

```
http://localhost:3000/api
```

### Autenticação

- Rotas **públicas**: não exigem JWT.
- Rotas **privadas**: exigem JWT no header:

```
Authorization: Bearer <token>
```

### Exemplo de obtenção do token

```bash
POST /auth
```

Resposta:

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzeXN0ZW1fdXNlcl9pZCIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoic3lzdGVtIiwiaWF0IjoxNzYyMTIxODQ1LCJleHAiOjE3NjI3MjY2NDV9.Bwo_UdgzTIdKFfLfgXQFSdPiu3ppT27DKdXIFEKUzHo"
}
```

Em seguida, use o token no Swagger ou em qualquer cliente HTTP para acessar as rotas privadas.

---

## 💾 Banco de dados

- **MongoDB**: Armazena processos e mensagens da Dead Letter Queue.
- **Kafka**: Gerencia filas de processamento e comunicação assíncrona.

---

## 📝 Observações

- Mensagens que não puderem ser processadas são armazenadas na **Dead Letter Queue**.
- Arquitetura segue o padrão **Hexagonal**, separando **Domain**, **Usecases** e **Infra**.
- Rotas públicas e privadas podem ser configuradas usando o decorator `@Public()` e o `JwtAuthGuard`.
