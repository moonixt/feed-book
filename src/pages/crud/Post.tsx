import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Post = () => {


  const [capa, setCapa] = useState(null)
  const [nome, setNome] = useState("")
  const [artista, setArtista] = useState("")
  const [ano, setAno] = useState("")
  const [tipo, setTipo] = useState("")


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    let formfield = new FormData();
  
   
    formfield.append('capa', capa);
    
  
    if (nome === "") {
      alert('Adicione um nome');
      return;
    } else {
      formfield.append('nome', nome);
    }
  
    if (artista === "") {
      alert('Adicione o nome do artista');
      return;
    } else {
      formfield.append('artista', artista);
    }
  
    if (ano === "") {
      alert('Adicione o ano');
      return;
    } else {
      formfield.append('ano', ano);
    }
  
    if (tipo === "") {
      alert('Adicione uma categoria ao produto');
      return;
    } else {
      formfield.append('tipo', tipo);
    }
  
    try {
      await axios.post('http://127.0.0.1:8000/albums/', formfield);
      alert('Registrado');
    } catch (error) {
      alert('Preencha os campos obrigatórios', error);
    }
  }

  const NavigateBack = useNavigate()
  const Back = () => {
    NavigateBack("/")
  }

  return (
    <div>
      <div className='pb-5'>
        <button onClick={Back}>
          Voltar
        </button>
      </div>
      <div id='Post'>
        <div>
        <form className='form-group' onSubmit={handleSubmit} >

<label className="flex items-center mb-4">
    <img src={capa}/>
    <input
      type="file"
      className=""
      name="capa"
      onChange={(e) => setCapa(e.target.files[0])}
      
      
    />
  </label>

  


  <label className=" flex items-center gap-2 mb-4">
  <input
   id="outlined-basic"
   className="form"
   placeholder='Insira o Nome do Album'
   value={nome}
   name="nome"
   onChange={(e) => setNome(e.target.value)}
   
   />
   
  </label>

  

  <label className=" flex items-center gap-2 mb-4">
    <input
    id="outlined-basic"
      type="text"
      placeholder='Artista'
      className="form"
      name="artista"
      value={artista} 
      onChange={(e) => setArtista(e.target.value)}
    />
   
  </label>
  <div>Data de lançamento</div>

  <label className=" flex items-center gap-2 mb-4">
    
    <input
    id='outlined-basic'
      type="date"
      className="form"
      name="ano"
      value={ano}
      onChange={(e) => setAno(e.target.value)}
      
    />
  </label>

  <label className="flex items-center gap-2 mb-4">
    <input
      type="textarea"
      className="form"
      placeholder="Insira o tipo"
      name="tipo"
      value={tipo}
      onChange={(e) => setTipo(e.target.value)}
      
    />
  </label>
  <input
    className="btn"
    type="submit"
    value="Postar"
  />

</form>
    

        </div>

      </div>
      
    </div>
  )
}

export default Post
