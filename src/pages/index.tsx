import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 15, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Gabriel', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome);
      
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome);
    
}

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-600 to-purple-500
      text-white
    `}>
     <Layout titulo="Cadastro de Usuários">
      <Tabela clientes={clientes} 
      clienteSelecionado={clienteSelecionado} 
      clienteExcluido={clienteExcluido}      
      />
     </Layout>
    </div>
  )
}
