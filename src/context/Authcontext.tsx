// Importa funções e hooks necessários do React e outras bibliotecas
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FormEvent,
} from "react";
import { jwtDecode} from "jwt-decode"; // Função para decodificar tokens JWT
import { useNavigate } from "react-router-dom"; // Hook para navegação de roteamento

// Define a tipagem para os tokens de autenticação
type AuthTokens = {
  accessToken: string;
  refreshToken: string;
} | null;

// Define a tipagem para o contexto de autenticação
export interface AuthContextType {
  authTokens: AuthTokens | null;
  setAuthTokens: React.Dispatch<React.SetStateAction<AuthTokens | null>>;
  // user: JwtPayload | null;
  loginUser: (e: FormEvent<LoginFormElement>) => Promise<void>;
  logoutUser: () => void;
}

interface LoginFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginFormElement extends HTMLFormElement {
  elements: LoginFormElements;
}

// Cria um contexto de autenticação com valor inicial indefinido
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define o provedor de contexto de autenticação
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Estado para armazenar tokens de autenticação
  let [authTokens, setAuthTokens] = useState<AuthTokens | null>(null);
  // const [user, setUser] = useState<JwtPayload | null>(null);

    
  //   localStorage.getItem("authTokens")
  //     ? JSON.parse(localStorage.getItem("authTokens") as string)
  //     : null
  // );

  // Estado para armazenar informações do usuário decodificadas do token
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens") as string)
      : null
  );

  // Estado para indicar se a autenticação está carregando
  let [loading, setLoading] = useState(true);

  // Função para navegação programática
  const history = useNavigate();

  // Função para autenticar o usuário
  let loginUser = async (e: FormEvent<LoginFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Faz uma requisição POST para o endpoint de login
    let response = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      }),
    });

    // Converte a resposta da requisição para JSON
    let data = await response.json();

    // Verifica se a resposta foi bem-sucedida
    if (response.status === 200) {
      // Armazena os tokens de autenticação no estado e no localStorage
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      history("/"); // Redireciona para a página inicial
    } else {
      // Exibe um alerta se as credenciais estiverem incorretas
      alert("E-mail ou senha incorreto.");
    }
  };

  // Função para desautenticar o usuário
  let logoutUser = () => {
    setAuthTokens(null); // Limpa os tokens de autenticação
    setUser(null); // Limpa os dados do usuário
    localStorage.removeItem("authTokens"); // Remove os tokens do localStorage
    window.alert("Você foi desconectado"); // Exibe um alerta de desconexão
    history("/login"); // Redireciona para a página de login
  };

  // Função para atualizar o token de autenticação
  let updateToken = async () => {
    console.log("Token atualizado!");
    if (!authTokens) {
      console.error("Os tokens de autenticação não estão disponíveis.");
      return;
    }  
    // Faz uma requisição POST para atualizar o token
    let response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ refresh: authTokens.refreshToken }),
    });

    // Converte a resposta da requisição para JSON
    let data = await response.json();

    // Verifica se a resposta foi bem-sucedida
    if (response.status === 200) {
      // Atualiza os tokens de autenticação e o estado do usuário
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      // Limpa os tokens e dados do usuário se a atualização falhar
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens");
    }
  };

  // Dados que serão disponibilizados pelo contexto
  let ContextData = {
    authTokens,
    setAuthTokens,
    user,
    loginUser,
    logoutUser,
  };

  // Efeito para atualizar o token periodicamente
  useEffect(() => {
    // Configura um intervalo para atualizar o token a cada 2000 ms (2 segundos)
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 2000);

    // Limpa o intervalo quando o componente for desmontado ou quando as dependências mudarem
    return () => clearInterval(interval);
  }, [authTokens, loading]); // Executa o efeito quando `authTokens` ou `loading` mudam

  // Fornece o contexto com os dados e funções de autenticação para os componentes filhos
  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};

// Exporta o contexto para que possa ser usado em outros componentes
export default AuthContext;
