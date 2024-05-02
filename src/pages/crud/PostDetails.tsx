import { useParams } from 'react-router-dom'
import  {useState, useEffect} from 'react'
import axios from 'axios'

const PostDetails = () => {

    const {id} = useParams()


    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchProdutos = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/albums-post/${id}/`)
            setAlbums(response.data)
          } catch (error) {
            console.error("Erro ao buscar produtos:", error);
          }
        }
    
        fetchProdutos()
      }, [])
    


  return (
    <div>
      <div>
        <h1>TESTE</h1>
      </div>

      <div id='Detalhes'>
      {albums.map((album) => (
        <div key={album.id} className='alinhamento-produto cardselectprod bg-base-100 shadow-xl pt-10 gap-4'>
          <h1 className='text-4xl pb-10 font-bold'>{album.nome}</h1>
          {/* <img className='pb-4' src={`http://127.0.0.1:8000/${produto.image}`} alt={produto.nome_produto} style={{width: '190px', height: '150px',}} /> */}

          <h2 >{album.artista}</h2>
          

        </div>
      ))}
        

      </div>
    </div>
  )
}

export default PostDetails
