import { useParams, useNavigate } from 'react-router-dom'
import  {useState, useEffect} from 'react'
import axios from 'axios'

const PostDetails = () => {

    const {id} = useParams()


    const [publication, setPublication] = useState([])
    const [comment, setComment] = useState([])

    useEffect(() => {
        const fetchProdutos = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/publication-details/${id}/`)
            setPublication(response.data)
          } catch (error) {
            console.error("Erro ao buscar produtos:", error);
          }
        }
    
        fetchProdutos()
      }, [])
    
      useEffect(() => {
        const fetchComments = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/comments-post/${id}/`)
            setComment(response.data)
          } catch (error) {
            console.error("Erro ao buscar produtos:", error);
          }
        }
        fetchComments()
      }, [])







      const NavigateBack = useNavigate()
      const Back = () => {
        NavigateBack("/project")
      }

  return (
    <div>
       
      <div id='Detalhes'>
      {publication.map((publication) => (
        <div key={publication.id} className='alinhameshadow-xl pt-10 gap-4'>
           <div>
            <button className='bcolor' onClick={Back}>Voltar</button>
        </div>
          <h1 className='text-4xl pb-10 '>{publication.text}</h1>
          <img className='pb-4' src={`http://127.0.0.1:8000/${publication.artwork}`} alt={publication.title} style={{ display: 'block', margin: '0 auto' }} />
         
         
       
       
        </div> 
      ))}

       <div className='flex justify-start'>
            <h1>Chat</h1>
          </div>
          <div id='Comentarios'>
            
      {comment.map((comment) => (
        <div key={comment.id} className='pt-10 gap-4'>
          <h1 className='text-4xl pb-10  bcomment'>{comment.comment_text}</h1>
          {/* <img className='pb-4' src={`http://127.0.0.1:8000/${comment.comment_artwork}`} style={{ display: 'block', margin: '0 auto' }} /> */}
       
        </div> 
      ))}

        

      </div>
    </div>
    </div>
  )
}

export default PostDetails
