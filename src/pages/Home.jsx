import { Link } from 'react-router-dom'; 


export default function Home(){
    return(
  <header>
    <nav>
        <ul className='link'>
          <Link to ="/Buscar-cep">Pesquisar um CEP</Link>
          
          <Link to ="/FotoDog">Foto de cachorro</Link>
        </ul>
    </nav>
 </header>
    )
}