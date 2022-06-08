import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,ImgURl} from '../../Constants/constants'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[0])
        setMovie(response.data.results[0])
     })
    }, [])
    
    return (
        <div 
        style={{backgroundImage: `url(${movie ? ImgURl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.name: ""}</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie.overview}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner