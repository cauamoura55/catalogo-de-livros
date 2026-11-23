Catálogo de Livros

Projeto desenvolvido para praticar a criação de uma API com Python e Flask e o consumo dessa API utilizando React.

A aplicação permite buscar livros através de uma API e exibir suas informações em uma página web.

Tecnologias utilizadas

Backend:

Python

Flask

Frontend:

React

JavaScript

Vite

Funcionalidades

Buscar livros através da API.

Exibir título, autor, ano e ID de cada livro.

Mostrar mensagem durante o carregamento.

Informar quando ocorre algum erro na requisição.

Como executar

Backend

Entre na pasta backend e execute:

python -m venv venv

Ative o ambiente virtual no Windows:

.\venv\Scripts\Activate.ps1

Instale as dependências:

pip install -r requirements.txt

Inicie a API:

python app.py

A API estará disponível em http://127.0.0.1:5000.

Frontend

Abra outro terminal, entre na pasta frontend e execute:

npm install
npm run dev

Acesse o endereço informado pelo Vite, normalmente http://localhost:5173.

É necessário manter o backend e o frontend em execução ao mesmo tempo para que a aplicação funcione corretamente.

Objetivo

O objetivo do projeto é praticar a integração entre frontend e backend, além de aprender a trabalhar com requisições HTTP, JSON e gerenciamento de estados no React.