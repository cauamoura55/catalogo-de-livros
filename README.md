# Catálogo de Livros

Projeto desenvolvido para praticar a criação de uma API com Python e Flask e o consumo dessa API utilizando React.

A aplicação permite buscar livros através de uma API e exibir suas informações em uma página web.

## Tecnologias utilizadas

**Backend**
- Python
- Flask

**Frontend**
- React
- JavaScript
- Vite

## Funcionalidades

- Buscar livros através da API.
- Exibir título, autor, ano e ID de cada livro.
- Mostrar mensagem durante o carregamento.
- Informar quando ocorre algum erro na requisição.

## Como executar

### Backend

Entre na pasta `backend`:

```bash
cd backend
```

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

Inicie a API:

```bash
python app.py
```

A API estará disponível em `http://127.0.0.1:5000`.

### Frontend

Abra outro terminal e entre na pasta `frontend`:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Acesse o endereço informado pelo Vite, normalmente `http://localhost:5173`.

**Importante:** mantenha o
