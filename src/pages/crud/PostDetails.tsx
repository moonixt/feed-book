import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { CiHeart } from "react-icons/ci";

const PostDetails = () => {
  const { id } = useParams();

  const [publication, setPublication] = useState([]);
  const [comment, setComment] = useState([]);
  const [comment_text, setComment_text] = useState("");
  const [postId, setPostId] = useState<string>();

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/publication-details/${id}/`
        );
        setPublication(response.data);
        setPostId(id);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/comments-post/${id}/`
        );
        setComment(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchComments();
  }, []);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    let formfield = new FormData();
    formfield.append("pub", postId);

    if (comment_text === "") {
      // alert('Adicione um comentário');
      return;
    } else {
      formfield.append("comment_text", comment_text);
    }

    try {
      await axios.post(`http://127.0.0.1:8000/comments-post/${id}/`, formfield);
      // alert('Postado');
    } catch (error) {
      // alert('Preencha os campos obrigatórios', error);
    }
  };

  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  const NavigateBack = useNavigate();
  const Back = () => {
    NavigateBack("/project");
  };

  return (
    <div>
      <div id="Detalhes">
        {publication.map((publication) => (
          <div key={publication.id} className="space-y-3 pt-20">
            <div className="card pub shadow-x">
              <h1 className="pt-5 pb-3 text-black text-start	font-bold text-5xl">
                {publication.title}
              </h1>
              <p className="pt-5 pb-3 text-black text-start	text-3xl">
                {publication.text}
              </p>
              {publication.artwork && (
        <img 
          className='pb-2 rounded-2xl img justify-start' 
          src={`http://127.0.0.1:8000/${publication.artwork}`}  
          style={{ display: 'block', margin: '0 auto' }} 
        />
      )}
              {/* <div className="justify-start flex space-x-10 pt-3 pb-3">
          <h1 className="bcolor_react"><CiHeart /></h1>
          </div> */}

              <div className="flex justify-start pb-5 pt-5">
                <h1>Discussão</h1>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <textarea
                    placeholder="Adicione um comentário"
                    className="commentcolor textarea-bordered textarea-lg  "
                    name="comment_text"
                    rows={1}
                    cols={100}
                    value={comment_text}
                    onChange={(e) => setComment_text(e.target.value)}
                  ></textarea>
                  <input
                    className="bcolor_react"
                    type="submit"
                    onClick={refreshPage}
                    value="Postar"
                  />
                </form>
              </div>
              <div id="Comentarios">
                {comment.map((comment) => (
                  <div key={comment.id} className="pt-10 gap-5 ">
                    <div className="text-7xl flex">
                      <img
                        src="../public/nuser.png"
                        style={{ width: 100, height: 100, borderRadius: 100 }}
                      ></img>
                    </div>
                    <p className="justify-end flex">
                      {comment.comments_date}/{publication.id}
                    </p>
                    <h1 className="text-4xl pb-10 bcomment">
                      {comment.comment_text}
                    </h1>

                    {/* <img className='pb-4' src={`http://127.0.0.1:8000/${comment.comment_artwork}`} style={{ display: 'block', margin: '0 auto' }} /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
