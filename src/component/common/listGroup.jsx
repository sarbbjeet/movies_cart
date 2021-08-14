import React, {useState} from 'react'
import {getGenres} from '../../services/fakeGenreService'

export default function ListGroup(props) { 
      
    const [genres] = useState(()=> [{name:'All Genres', _id:''}, ...getGenres()])
    
    // useEffect(()=>{
    //  console.log("genres=", genres)   
    // } ,[])
    const {selectedGenre, handleGenreSelect} = props
    return (
    <ul className="list-group">
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
