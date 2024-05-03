import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Post = () => {


  const [artwork, setArtwork] = useState(null)
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [publication_date, setpublication_date] = useState("")
  const [category, setCategory] = useState("")


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    let formfield = new FormData();
  
   
    formfield.append('artwork', artwork);
    
  
    if (title === "") {
      alert('Adicione um title');
      return;
    } else {
      formfield.append('title', title);
    }
  
    if (subtitle === "") {
      alert('Adicione o title do subtitle');
      return;
    } else {
      formfield.append('subtitle', subtitle);
    }
  
    if (publication_date === "") {
      alert('Adicione o publication_date');
      return;
    } else {
      formfield.append('publication_date', publication_date);
    }
  
    if (category === "") {
      alert('Adicione uma categoria ao produto');
      return;
    } else {
      formfield.append('category', category);
    }
  
    try {
      await axios.post('http://127.0.0.1:8000/publication/', formfield);
      alert('Registrado');
    } catch (error) {
      alert('Preencha os campos obrigatórios', error);
    }
  }

  const NavigateBack = useNavigate()
  const Back = () => {
    NavigateBack("/project")
  }

  return (
    <div>
      <div className='pb-5'>
        <button className='bcolor' onClick={Back}>
          Voltar
        </button>
      </div>
      <div id='Post'>
        <div>
        <form className='space-y-5 cover' onSubmit={handleSubmit} >


<label className="flex  items-center mb-4">
  
    <img src={artwork}/>
    <input
      type="file"
      className=""
      name="artwork"
      onChange={(e) => setArtwork(e.target.files[0])}
      
      
    />
  </label>

  


  <label className=" flex items-center gap-2 mb-4">
  <input
   id="outlined-basic"
   className="form"
   placeholder='Titulo do Post'
   value={title}
   name="title"
   onChange={(e) => setTitle(e.target.value)}
   
   />
   
  </label>

  

  <label className=" flex items-center gap-2 mb-4">
    <input
    id="outlined-basic"
      type="text"
      placeholder='Subtitulo'
      className="form"
      name="subtitle"
      value={subtitle} 
      onChange={(e) => setSubtitle(e.target.value)}
    />
   
  </label>
  <div>Data de lançamento</div>

  <label className=" flex items-center gap-2 mb-4">
    
    <input
    id='outlined-basic'
      type="date"
      className="form"
      name="publication_date"
      value={publication_date}
      onChange={(e) => setpublication_date(e.target.value)}
      
    />
  </label>

  <label className="flex items-center gap-2 mb-4">
    <input
      type="textarea"
      className="form"
      placeholder="Categoria"
      name="category"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      
    />
  </label>
  <input
    className="bcolor"
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
