import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Card,
  // Typography,
  // List,
  // ListItem,
  // ListItemPrefix,
  // ListItemSuffix,
  // Chip,
} from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import AuthContext, { AuthContextType } from "../context/Authcontext"; // Certifique-se de importar o tipo AuthContextType

const SidebarComponent = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/profiles/");
        setContacts(response.data);
      } catch (error) {
        console.error("server may not connected", error);
      }
    };
    fetchContacts();
  }, []);

  const NavigateHome = useNavigate();

  const Home = () => {
    NavigateHome("/");
  };

  const Posts = () => {
    NavigateHome("/project");
  };

  const { loginUser } = useContext(AuthContext) as AuthContextType;

  const Publish = () => {
    NavigateHome("/post");
  };

  const Profile = () => {
    NavigateHome("/profile");
  };

  return (
    <div>
      {/* Consertar a tipagem do card */}
      <Card className="fixed left-0 top-0 sidecolor xl:block lg:hidden md:hidden sm:block hidden h-full   p-4  ">
        <div className="mb-2 p-4">
          <div className="space-y-6 ">
            <div>
              <h1 className="font-bold pb-10">Feedbook</h1>
            </div>
            <div>
              <h1 className="text-white sidehover font-bold" onClick={Home}>
                Inicio
              </h1>
              <h2>ホームページ</h2>
            </div>
            <div>
              <h1 className="text-white sidehover font-bold" onClick={Posts}>
                Postagens
              </h1>
              <h2> ポスト</h2>
            </div>
            {/* <div>
              <h1 className="text-white sidehover font-bold" onClick={Publish}>
                Teste API
              </h1>
            </div> */}
            <div>
              <h1 className="text-white sidehover font-bold" onClick={Publish}>
                Publicar
              </h1>
              <h2> ポストする</h2>
            </div>
            <div>
              <h1 className="text-white sidehover font-bold" onClick={Profile}>
                Perfil
    
              </h1>
              <h2>プロフィール</h2>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <Card className="fixed right-0 top-24  xl:block lg:hidden  md:hidden sm:block hidden h-full bg  p-4  ">
          <div className="mb-2 p-4">
            <div className="space-y-6 ">
              <div>
                <h1 className="text-black border-b-4 border-black text-2xl font-bold">
                Sugestões para seguir
                </h1>
                <div id="get" className="pt-5 space-y-5  text-3xl">
                  {[...contacts].reverse().map((contact) => (
                    <div key={contact.id}>
                      <div className="text-black font-bold imgf">
                        <img
                          className="pb-2 rounded-full "
                          src={`http://127.0.0.1:8000/${contact.profile_pic}`}
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            margin: "1rem 1.5rem -3rem",
                            width: "130px",
                            height: "130px",
                            objectFit: "cover",
                          }}
                        />

                        <h2 className="pl-40">{contact.name}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SidebarComponent;
