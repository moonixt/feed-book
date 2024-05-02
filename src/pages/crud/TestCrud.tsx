import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TestCrud = () => {
  const [produtos, setProdutos] = useState([]);

  const NavigateBack = useNavigate();
  const Back = () => {
    NavigateBack("/");
  };

  const NavigateFoward = useNavigate();
  const Forward = () => {
    NavigateFoward("/");
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
        <h1>Teste de Leitura de API</h1>
        <div className="flex justify-center space-x-3">
        <button onClick={Back}>Voltar</button>
        <button onClick={Forward}>Próxima</button>
        </div>
      </div>

      <div id="CRUD" className="space-y-5">
        {produtos.map((produto) => (
          <div key={produto.id} className="space-y-3">
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
