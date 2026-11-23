# API de Livros

Projeto desenvolvido para praticar a criação de uma API utilizando Python e Flask.

A API disponibiliza uma lista de livros em formato JSON, permitindo que outras aplicações consultem essas informações.

## Tecnologias utilizadas

- Python
- Flask

## Funcionalidades

- Disponibilizar uma lista de livros.
- Retornar os dados no formato JSON.
- Permitir consultas através de requisições HTTP GET.

## Rota disponível

| Método | Rota | Descrição |
|---|---|---|
| GET | `/livros` | Retorna a lista de livros. |

## Como executar

Crie um ambiente virtual:

```bash
python -m venv venv
```

Ative o ambiente virtual no Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie a aplicação:

```bash
python app.py
```

A API estará disponível em:

`http://127.0.0.1:5000/livros`

## Objetivo

Praticar a criação de APIs, o uso do Flask e o envio de dados no formato JSON.