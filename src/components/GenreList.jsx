import React from 'react'
import GlobalApi from '../api/GlobalApi';

const GenreList = () => {

    const getGenreList = () =>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp);
        })
    }




  return (
    <div>GenreList</div>
  )
}

export default GenreList