import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Post = () => {

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [artwork, setArtwork] = useState(null)
  
 


  const handleSubmit = async (event) => {
    
    event.preventDefault();
    let formfield = new FormData();
  
    formfield.append('artwork', artwork);

    if (title === "") {
      alert('Adicione um titulo');
      return;
    } else {
      formfield.append('title', title);
    }
  
    if (text === "") {
      alert('Adicione um comentário');
      return;
    } else {
      formfield.append('text', text);
    }

    try {
      await axios.post('http://127.0.0.1:8000/publication/', formfield);
      alert('Postado');
    } catch (error) {
      alert('Preencha os campos obrigatórios', error);
    }
  }

  const NavigateBack = useNavigate()
  const Back = () => {
    NavigateBack("/project")
  }

  
  const [id, setId] = useState('')

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/publication/${id}/`)
      alert('Postagem excluída')
    } catch (error) {
      alert('Erro ao excluir postagem', error)
    }
  
  }

  const not = () => {
    alert('Se o ID de postagem inserido existe, ele será removido.')
  }

  return (
    <div className='cover'>
      <div className='pb-10'>
        <button className='bcolor' onClick={Back}>
          Voltar
        </button> 
      </div>
      <div>
          <h1 className='justify-start flex'>Criar nova publicação</h1>
        </div>
      <div id='Post'>
        <div>
        <form className='space-y-5 pt-10' onSubmit={handleSubmit} >

        <label className=" flex items-center gap-2 mb-4">
    
    <textarea
    placeholder="Titulo"
    className="commentcolor textarea-bordered textarea-lg  "
    value={title}
     name="title"
     rows={1} 
     cols={100}  
     onChange={(e) => setTitle(e.target.value)}
     
    
     
     >
      
    </textarea>
    </label>
  <label className=" flex items-center gap-2 mb-4">
    
  <textarea
  placeholder="O que tem em mente?"
  className="commentcolor textarea-bordered textarea-lg  "
  value={text}
   name="text"
   rows={5} 
   cols={100} 
   onChange={(e) => setText(e.target.value)}
   
  
   
   >
    
  </textarea>
  {/* <input
   id="outlined-basic"
   className="form"
   placeholder='O que tem em mente?'
   
   /> */}
   
  </label>

  <label className="flex  items-center mb-4">
  
    <img src={artwork}/>
    <input
      type="file"
      className=""
      name="artwork"
      onChange={(e) => setArtwork(e.target.files[0])}
      
      
    />
  </label>

  {/* <label className=" flex items-center gap-2 mb-4">
    
    <input
    id='outlined-basic'
      type="date"
      className="form"
      name="publication_date"
      value={publication_date}
      onChange={(e) => setpublication_date(e.target.value)}
      
    />
  </label> */}
  <input
    className="bcolor_react"
    type="submit"
    value="Postar"
  />
</form>



<div id='Remove'>
        <div>
          
        <form className='space-y-5 pt-10 ' onSubmit={handleDelete} >
        <div>
          <h1 className='justify-start flex'>Remover publicação existente</h1>
        </div>

  <label className=" flex items-center gap-2 mb-4">
  <textarea
  placeholder="Insira o ID da publicação para remover."
  className="commentcolor textarea-error textarea-lg  "
  value={id}
   name="text"
   rows={1} 
   cols={100} 
   onChange={(e) => setId(e.target.value)}

   >
  </textarea>
   
  </label>
  <input
    className="bcolor_react"
    type="submit"
    onClick={not}
    value="Deletar"
  />
</form>




        </div>

      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Post
