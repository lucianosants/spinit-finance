# Spinit Finance | API

Aplicação de uma API para o projeto Spinit Finance.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- Prisma
- MongoDB

## 🛠️ Instalação & Execução

### Pré-Requisitos

- Ter [Node.js](https://nodejs.org/) instalado.
- Ter um banco de dados reservado em [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para o projeto.

### Instalar dependências

```bash
npm install
```

### Configurar variáveis de ambiente e inicializar banco de dados

Crie na raiz do projeto um arquivo `.env` com as variáveis de ambiente necessárias.

```bash
DATABASE_URL="mongodb+srv://USERNAME:PASSWORD@HOST:PORT/DATABASE"

SECRET_HASH_TOKEN="SECRET_HASH_TOKEN"

PORT=3333
```

Para verificar se ocorreu tudo como esperado, rode o comando abaixo.

```bash
npx prisma studio
```

### Rodar API

Para iniciar a API rode o comando abaixo e a porta deverá ser acessível em `localhost:3333`.

```bash
npm run dev
```

# 📜 Documentação da API

## Base URL

```bash
<http://localhost:3333>
```

---

## `Rota de Login`

Rota para obter token de autenticação com informações de usuário.

```jsx
POST: /auth/login
```

### Parâmetros

| Parâmetro | Tipo | Descrição |
| --- | --- | --- |
| email | string | E-mail de usuário |
| password | string | Senha do usuário |

### Corpo da solicitação

```json
{
	"email": "seuemail@mail.com",
	"password": "12345678Ab@"
}
```

### Resposta

```json
Status: 200
```

```json
{
	"token": "eyJhb..."
}
```

---

## `Rotas de Usuário`

Rotas para gerenciamento de usuário.

### Criar usuário

```jsx
POST: /users
```

### Parâmetros

| Parâmetros | tipo | Descrição |
| --- | --- | --- |
| email | string | E-mail de usuário |
| first_name | string | Nome do usuário |
| last_name | string | Sobrenome do usuário |
| username | string | Nome único de usuário |
| password | string | Senha do usuário |
| confirmPassword | string | Checagem de senhas |

### Corpo da solicitação

```json
{
	"email": "seuemail@gmail.com",
	"first_name": "John",
	"password": "12345678Ab@",
	"confirmPassword": "12345678Ab@",
	"username": "john_due",
	"last_name": "Due"
}
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "hhd3ub3bdubbdjwdbde82e",
	"email": "seuemail@gmail.com",
	"first_name": "John",
	"password": "12345678Ab@",
	"confirmPassword": "12345678Ab@",
	"username": "john_due",
	"last_name": "Due"
	"created_at": "2023-09-15T14:07:12.973Z",
	"updated_at": "2023-09-15T14:07:12.973Z",
	"balance": 0
}
```

### Buscar Usuário

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
GET: /users/id_de_usuario
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "hhd3ub3bdubbdjwdbde82e",
	"username": "john_due",
	"last_name": "Due"
	"incomes": [
		{
			"id": "6502f0d6e49e9ff3e79626d2",
			"userId": "hhd3ub3bdubbdjwdbde82e",
			"amount": 400,
			"description": "Transaferencia de John Due",
			"date": "2023-09-14",
			"type": "income"
		},
	],
	"expenses": [
		{
			"id": "64fefc471507a09fc64ae8e1",
			"userId": "hhd3ub3bdubbdjwdbde82e",
			"amount": 5690.89,
			"description": "Geladeira",
			"date": "2023-09-08",
			"type": "expense",
			"payment_method": "CREDIT_CARD",
			"installment": 12
		},
	]
}
```

---

## `Rotas de Incomes/Entradas`

Rotas para gerenciamento de entradas.

### Criar Income

Requisitos:

- Enviar um `token` válido

```jsx
POST: /incomes
```

### Parâmetros

| Parâmetros | tipo | Descrição |
| --- | --- | --- |
| amount | number | Valor da transação |
| description | string | Descrição da transação |
| date | string | Data da transação |
| id | string | ID de usuário |

### Corpo da solicitação

```json
{
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
	"user": {
		"id": "hhd3ub3bdubbdjwdbde82e"
	}
}
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
	"type": "income"
}
```

### Editar Income

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
PATCH: /incomes/id_de_income
```

### Parâmetros

| Parâmetros | tipo | Descrição |
| --- | --- | --- |
| amount | number | Valor da transação |
| description | string | Descrição da transação |
| date | string | Data da transação |

### Corpo da solicitação

```json
{
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
}
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
	"type": "income"
}
```

### Deletar Income

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
DELETE: /incomes/id_de_income
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
	"type": "income"
}
```

### Buscar Income por usuário

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
GET: /incomes/users/id_do_usuario
```

### Resposta

```json
Status: 200
```

```json
[
	{
		"id": "64f77c7991136eb36076ac0e",
		"userId": "hhd3ub3bdubbdjwdbde82e",
		"amount": 9300,
		"description": "Transferencia de John Due",
		"date": "2023-03-24",
		"type": "income"
	}
]
```

---

## `Rotas de Expenses/Saídas`

Rotas para gerenciamento de saídas.

### Criar expense

Requisitos:

- Enviar um `token` válido

```jsx
POST: /expenses
```

### Parâmetros

| Parâmetros | tipo | Descrição |
| --- | --- | --- |
| amount | number | Valor da transação |
| description | string | Descrição da transação |
| date | string | Data da transação |
| id | string | ID de usuário |
| payment_method | CREDIT_CARD | CASH | Método de pagamento da saída |
| installment | number | Parcelas por pagamento |

### Corpo da solicitação

```json
{
	"amount": 9300,
	"description": "Compra em John Due",
	"date": "2023-03-24",
	"payment_method": "CREDIT_CARD",
	"installment": 7,
	"user": {
		"id": "hhd3ub3bdubbdjwdbde82e"
	}
}
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Compra em John Due",
	"payment_method": "CREDIT_CARD",
	"installment": 7,
	"date": "2023-03-24",
	"type": "expense"
}
```

### Editar expense

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
PATCH: /incomes/id_de_expense
```

### Parâmetros

| Parâmetros | tipo | Descrição |
| --- | --- | --- |
| amount | number | Valor da transação |
| description | string | Descrição da transação |
| date | string | Data da transação |
| payment_method | CREDIT_CARD | CASH | Método de pagamento da saída |
| installment | number | Parcelas por pagamento |

### Corpo da solicitação

```json
{
	"amount": 9300,
	"description": "Compra em John Due",
	"date": "2023-03-24",
	"payment_method": "CREDIT_CARD",
	"installment": 7,
}
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Transferencia de John Due",
	"date": "2023-03-24",
	"payment_method": "CREDIT_CARD",
	"installment": 7,
	"type": "expense"
}
```

### Deletar expense

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
DELETE: /incomes/id_de_expense
```

### Resposta

```json
Status: 200
```

```json
{
	"id": "64f77c7991136eb36076ac0e",
	"userId": "hhd3ub3bdubbdjwdbde82e",
	"amount": 9300,
	"description": "Compra em John Due",
	"payment_method": "CREDIT_CARD",
	"installment": 7,
	"date": "2023-03-24",
	"type": "expense"
}
```

### Buscar Income por usuário

Requisitos:

- Enviar um `ID` como parâmetro na URL
- Enviar um `token` válido

```jsx
GET: /expenses/users/id_do_usuario
```

### Resposta

```json
Status: 200
```

```json
[
	{
		"id": "64f77c7991136eb36076ac0e",
		"userId": "hhd3ub3bdubbdjwdbde82e",
		"amount": 9300,
		"description": "Compra em John Due",
		"payment_method": "CREDIT_CARD",
		"installment": 7,
		"date": "2023-03-24",
		"type": "expense"
	}
]
```

---

Desenvolvido com 💜 por [Luciano Santos](https://lucianosants.dev)!