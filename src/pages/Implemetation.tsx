import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Implemetation = () => {
  const NavigatePost = useNavigate()
  const Post = () =>{
    NavigatePost('/post')
  }
  const [publications, setPublication] = useState([]);

  useEffect(() => {
    const fetchPublication = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/publication/");
        setPublication(response.data);
        console.log(response);
      } catch (error) {
        console.error("Server may not connected:", error);
      }
    };
    fetchPublication();
  }, []);

  const NavigateFoward = useNavigate();
  const Foward = () => {
    NavigateFoward("/");
  };


  return (
    <div>
      <div id="Teste Sidebar">
     
        

      </div>
      
      <div className="pt-10">
        <h1 className="font-bold text-8xl bcolortitle">Feed</h1>
      </div>
      <div className="pt-10">
        <button className="bcolor" onClick={Foward}>Próxima</button>
      </div>
      <div className="pt-3 pb-5">
        <button className="bcolor" onClick={Post}>Postar</button>
      </div>
      <div id="Leitura" className="page">
      {[...publications].reverse().map((publication) => (
          <div key={publication.id} className="space-y-3 pt-10 ">
            <h1 className="pt-10 pb-5 text-white font-bold">{publication.title}</h1>
            <div className="card pub shadow-xl ">
              <figure>
              <img className='pb-2 rounded-2xl img' src={publication.artwork} alt={publication.title}  />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-5xl pb-10">{publication.subtitle}</h1>
                <h2 className="justify-left flex text-xl"></h2>
                <span className="loading loading-bars loading-md"></span>
                <p className="justify-left flex text-1xl">
              Clique no botão para ser redirecionado.
            </p>
            <p className="justify-left flex">{publication.publication_date}</p>
                <div className="card-actions justify-end">
                  <Link to={`/post-details/${publication.id}`}><button className="bcolor">Visualizar</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default Implemetation;
