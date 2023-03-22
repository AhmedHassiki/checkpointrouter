import React from 'react'
import MovieCard from './MovieCard'


const MoviesList = ({movies , searchRating ,searchName}) => {

  return (
    <div style={{display:'flex' , flexWrap:"wrap" , justifyContent:"space-around"}}>
        {
            movies
            .filter((el)=>
            el.name.toLowerCase().includes(searchName.toLowerCase()) && Number(el.rating) >= searchRating
            )
            .map((el)=><MovieCard movie={el} key={el.id} />)
        }
    </div>
  )
}

export default MoviesList