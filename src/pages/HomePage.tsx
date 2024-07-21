import { useState } from "react";
import { useNavigate } from "react-router-dom";
import aroundthefur from "../assets/def.jpg";
import whitepony from "../assets/white-pony.jpg";
import videofile1 from "../assets/bqad.mp4";
import videofile2 from "../assets/change.mp4";

function HomePage() {
  // const [count, setCount] = useState(0)

  const NavigateBack = useNavigate();

  const Back = () => {
    NavigateBack("/project");
  };

  const NavigateFoward = useNavigate();

  const Foward = () => {
    NavigateFoward("/test");
  };

  return (
    <div className="page pt-10">
      <div className="space-y-5">
        <h1 className="text-cyan-500">Projeto</h1>
        <h2 className="text-3xl">Pratica de REACT + Electron</h2>
        <div className="space-x-3">
        <button className="bcolor"onClick={Back}>Anterior</button>
        <button className='bcolor'onClick={Foward}>Próxima</button>
        </div>
      </div>
      <div>
        <h1 className="pt-10">Deftones</h1>
      </div>
      <div className="flex justify-center gap-8 pt-5">
        <div className="card lg:card-side bg-black shadow-xl">
          <figure>
            <img
              src={aroundthefur}
              alt="Album"
              style={{ width: 400, height: 350 }}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-5xl pb-10">Around the Fur</h1>
            <h2 className="justify-left flex text-xl">Novo album lançado!</h2>
            <span className="loading loading-bars loading-md"></span>
            <p className="justify-left flex text-1xl">
              Clique no botão para ser redirecionado.
            </p>
            <div className="card-actions justify-end">
              <button
                className="bcolor"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Escutar
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black">
                  <h3 className="text-4xl pb-10">Be quiet and Drive!</h3>
                  <div className="justify-center flex">
                    <video width="500" height="400" controls>
                      <source src={videofile1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="btn">Fechar</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5"></div>
      <div className="flex justify-center gap-8 pt-10">
        <div className="card lg:card-side bg-black shadow-xl">
          <figure>
            <img
              src={whitepony}
              alt="Album"
              style={{ width: 450, height: 350 }}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-5xl pb-10">White Pony</h1>
            <h2 className="justify-left flex text-xl">Novo album lançado!</h2>
            <span className="loading loading-bars loading-md"></span>
            <p className="justify-left flex text-1xl">
              Clique no botão para ser redirecionado.
            </p>
            <div className="card-actions justify-end">
              <button
                className="bcolor"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Escutar
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-black">
                  <h3 className="text-4xl pb-10">Change!</h3>
                  <div className="justify-center flex">
                    <video width="500" height="400" controls>
                      <source src={videofile2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button className="">Fechar</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
