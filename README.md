# Aplicação de Gerenciamento de Produtos
Esta aplicação é um servidor Node.js que permite o gerenciamento de produtos por meio da importação de um arquivo CSV. Ela utiliza as seguintes tecnologias e bibliotecas:

- <b>Node.js:</b> É uma plataforma para construção de aplicações server-side altamente escaláveis.
- <b>Express:</b> É um framework web para Node.js que facilita a criação de aplicativos web e APIs.
- <b>Multer:</b> É uma biblioteca para Node.js que lida com uploads de arquivos, permitindo que você receba arquivos enviados pelo cliente.
- <b>Prisma:</b> É uma ferramenta de ORM (Object-Relational Mapping) para Node.js e TypeScript que simplifica o acesso ao banco de dados.
- <b>TypeScript:</b> É um superset tipado do JavaScript que traz a capacidade de adicionar tipos estáticos ao código.

# Funcionalidades Principais

## 1. Importação de Produtos via CSV
- A principal funcionalidade desta aplicação é permitir a importação de produtos a partir de um arquivo CSV.
- O arquivo CSV deve seguir um modelo específico com os campos: código de barras (code_bar), descrição (description), preço (price) e quantidade (quantity).
- A aplicação lê o arquivo CSV, verifica se os produtos já existem no banco de dados e, se não existirem, os adiciona.

## 2. Contagem de Produtos Adicionados
- A aplicação mantém um contador para acompanhar quantos produtos foram adicionados durante a importação.
- Após a importação, a aplicação retorna uma resposta JSON que inclui os produtos lidos do arquivo e a quantidade de produtos adicionados.

# Como Usar

## Requisitos
- Node.js v14.18.1 ou superior
- Yarn v1.22.10 ou superior (opcional)
- TypeScript v5.2.2 ou superior

# Clonando o Repositório
Para clonar o repositório, abra um terminal e digite o seguinte comando:
```bash
git clone https://github.com/fabiodrneles/08
```
## Instalando as Dependências
Para instalar as dependências da aplicação, abra um terminal no diretório "08" e digite o seguinte comando:
```bash
npm install
```
Ou, se você estiver usando Yarn:
```bash
yarn install
```
## Rodando a Aplicação em Desenvolvimento
Para rodar a aplicação em desenvolvimento, abra um terminal no diretório "08" e digite o seguinte comando:
```bash
npm run dev
```
Ou, se você estiver usando Yarn:
```bash
yarn dev
```
