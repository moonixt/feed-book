import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";

const Implemetation = () => {
  const NavigatePost = useNavigate();
  const Post = () => {
    NavigatePost("/post");
  };
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
      <div id="Teste Sidebar"></div>

      <div className="pt-10">
        <h1 className="font-bold text-8xl bcolortitle">Feed</h1>
      </div>
      <div className="pt-10">
        <button className="bcolor" onClick={Foward}>
          Próxima
        </button>
      </div>
      <div id="Leitura" className="page">
        {[...publications].reverse().map((publication) => (
          <div key={publication.id} className="space-y-3 pt-10 ">
            <div className="card pub shadow-xl ">
              <Link to={"/post"}>
                {" "}
                <p className="justify-end bcolor flex text-3xl">
                  <BsThreeDotsVertical />{" "}
                </p>{" "}
              </Link>
              <h1 className="pt-5 pb-3 text-white text-start	font-bold text-5xl">
                {publication.title}
              </h1>
              <p className="pt-5 pb-3 text-white text-start	text-3xl">
                {publication.text}
              </p>
              <figure>
                <img
                  className="pb-2 rounded-2xl img justify-start"
                  src={publication.artwork}
                  alt={publication.title}
                />
              </figure>
              <div className="card-body">
                {/* <h1 className="card-title text-5xl pb-10">{publication.subtitle}</h1>
                <h2 className="justify-left flex text-xl"></h2>
                <span className="loading loading-bars loading-md"></span>
                <p className="justify-left flex text-1xl">
              Clique no botão para ser redirecionado.
            </p> */}
                <p className="justify-end flex">
                  {publication.publication_date}/{publication.id}
                </p>

                <div className="justify-start flex space-x-10">
                  <h1 className="bcolor_react">
                    <CiHeart />
                  </h1>
                  <Link to={`/post-details/${publication.id}`}>
                    <h1 className="bcolor_react">
                      <LiaCommentSolid />
                    </h1>
                  </Link>
                </div>
                <div className="card-actions justify-end"></div>
                <Link to={`/post-details/${publication.id}`}>
                  {" "}
                  <textarea
                    placeholder="Adicione um comentário"
                    className="textarea textarea-bordered textarea-lg  "
                    name="new comment"
                    rows={1}
                    cols={100}
                  ></textarea>
                </Link>
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
