import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestCrud = () => {
  const [produtos, setProdutos] = useState([]);

  const NavigateBack = useNavigate();
  const Back = () => {
    NavigateBack("/");
  };

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/produtos/");
        setProdutos(response.data);
      } catch (error) {
        console.error("Server may not connected:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="space-y-5">
      <div className="space-y-5">
        <h1>Teste de Leitura de API Imeal</h1>
        <button onClick={Back}>Voltar</button>
      </div>

      <div id="CRUD">
        {produtos.map((produto) => (
          <div key={produto.id}>
            <h1 className="font-bold">{produto.nome_produto}</h1>
            <h2 className="text-emerald-600"> Preço: R$ {produto.valor}</h2>
            <p>Restaurante: {produto.nome_restaurante}</p>
            <p className="font-bold">
              Identidade de restaurante: {produto.restaurante}
            </p>
            <p className="text-amber-500">Código do produto: {produto.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCrud;
