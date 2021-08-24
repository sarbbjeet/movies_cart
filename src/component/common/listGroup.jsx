import React, {useState, useEffect} from 'react'

import { getGenres } from '../../services/httpGenres'
export default function ListGroup(props) {
 const [genres, setGenres] = useState([])  
    useEffect(()=>{
        asyncRequest()  // function to handle async request
    },[])  //useeffect run only when component mount

   async function asyncRequest (){
       const res = await getGenres()
       setGenres([{name:'All Genres', _id:''}, ...res])
   }
 
    const {selectedGenre, handleGenreSelect} = props
    return (
    <ul style={{cursor:'pointer'}} className="list-group">
    {
        genres.map(genre=>  
           <li onClick={()=> handleGenreSelect(genre.name)} 
            key= {genre._id} 
            className={genre.name ===selectedGenre ? "list-group-item active" 
                : "list-group-item"  }>{genre.name}</li>)
    }
    </ul>
    )
}
