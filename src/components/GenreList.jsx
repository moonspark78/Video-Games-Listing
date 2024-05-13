import React, { useEffect, useState } from 'react'
import GlobalApi from '../api/GlobalApi';

const GenreList = () => {
    const [genreList, setGenreList] = useState([])
    useEffect(()=>{
        getGenreList();
    },[])

    const getGenreList = () =>{
        GlobalApi.getGenreList.then((resp)=>{
            console.log(resp.data.results);
            setGenreList(resp.data.results);
        })
    }




  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genres</h2>
        {genreList.map((item)=>(
            <div key={item.id} className='flex gap-2 items-center mb-2'>
                <img src={item.image_background} className='w-[50px] h-[50px] object-cover rounded-lg' alt='logo'/>
                <h3>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList