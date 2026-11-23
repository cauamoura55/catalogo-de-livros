# Catálogo de Livros - Frontend

Projeto desenvolvido com React e Vite para consumir a API de livros criada com Python e Flask.

A aplicação permite buscar os livros e exibir suas informações em uma página web.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Fetch API

## Funcionalidades

- Buscar livros através de um botão.
- Exibir ID, título, autor e ano de cada livro.
- Mostrar mensagem durante o carregamento.
- Informar quando ocorre algum erro na requisição.

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente:

`http://localhost:5173`

## Comunicação com a API

O frontend realiza requisições para `/api/livros`, utilizando o proxy configurado no Vite para encaminhar as solicitações ao backend Flask.

Para que a aplicação funcione corretamente, o backend também precisa estar em execução.

## Objetivo

Praticar o desenvolvimento de interfaces com React, o gerenciamento de estados com `useState` e o consumo de APIs utilizando `fetch()`.