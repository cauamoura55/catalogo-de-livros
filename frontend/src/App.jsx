  import { useState } from 'react';
  function App() {
    const [mensagem, setMensagem] = useState("Aguardando consulta...");
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
      try {
        setMensagem("Carregando livros...");
        
        const resposta = await fetch("/api/livros");

        if (!resposta.ok) {
          throw new Error("Erro na requisição");
        }
        
        const dados = await resposta.json();
        
        setLivros(dados.livros);
        
        console.log(dados);

        setMensagem("");
      }catch (erro) {
        setMensagem("Erro ao buscar livros.");
        setLivros([])
      }

    }

    return (  
      <div>
        <h1>Catálogo de Livros</h1>
          
          <button onClick={buscarLivros}>
            Buscar Livros
          </button>

          <p>{mensagem}</p>
      {livros.map((livro) => (
      <div key={livro.id}>
          <h2>{livro.titulo}</h2>
          <p>ID: {livro.id}</p>
          <p>Autor: {livro.autor}</p>
          <p>Ano: {livro.ano}</p>
      </div>
  ))}
      </div>
      );
  }

  export default App;