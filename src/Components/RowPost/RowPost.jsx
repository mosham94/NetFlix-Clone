import React from 'react'
import './RowPost.css'
import { useEffect, useState } from 'react'
import {API_KEY,ImgURl} from '../../Constants/constants'
import axios from 'axios'
function RowPost() {
    const [movies, setmovies] = useState([]);
    useEffect(()=>
    {
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
            console.log(response.data)
            setmovies(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>Originals</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img className='poster' alt='poster' src={`${ImgURl+obj.poster_path}`} />

                )}
                
                
            </div>
        </div>
    )
}

export default RowPost