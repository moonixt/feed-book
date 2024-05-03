import { useParams, useNavigate } from 'react-router-dom'
import  {useState, useEffect} from 'react'
import axios from 'axios'

const PostDetails = () => {

    const {id} = useParams()


    const [publication, setPublication] = useState([])

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
    
      const NavigateBack = useNavigate()
      const Back = () => {
        NavigateBack("/project")
      }

  return (
    <div>
        <div>
            <button className='bcolor' onClick={Back}>Voltar</button>
        </div>
      <div id='Detalhes'>
      {publication.map((publication) => (
        <div key={publication.id} className='alinhameshadow-xl pt-10 gap-4'>
          <h1 className='text-4xl pb-10 font-bold'>{publication.title}</h1>
          <img className='pb-4' src={`http://127.0.0.1:8000/${publication.artwork}`} alt={publication.title} style={{width: '400px', height: '350px',}} />

          <h2 >{publication.subtitle}</h2>
          

        </div>
      ))}
        

      </div>
    </div>
  )
}

export default PostDetails
