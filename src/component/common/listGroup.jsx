import React, {useState, useEffect} from 'react'
import {getGenres} from '../../services/fakeGenreService'

export default function ListGroup(props) {

    const [genres, setgenres] = useState(()=> getGenres())
    
    useEffect(()=>{
     console.log("genres=", props.selectedGenre)   
    } )
    const {selectedGenre, handleGenreSelect} = props
    return (
    <ul className="list-group">
    {
        genres.map(genre=>  
           <li onClick={()=> handleGenreSelect(genre.name)} 
            key= {genre._id} 
            class={genre.name ===selectedGenre ? "list-group-item active" 
                : "list-group-item"  }>{genre.name}</li>)
    }
    </ul>
    )
}
