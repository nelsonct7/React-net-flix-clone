import React,{useEffect,useState} from 'react'
import './RowPost.css' 
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'

import YouTube from 'react-youtube'
function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [movieUrl,setMovieUrl]=useState('')
    useEffect(()=>{
        axios.get(props.url).then((responce)=>{
            setMovies(responce.data.results)
        }).catch((err)=>{
            alert('Network Error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

    const handleMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((responce)=>{
            if(responce.data.results.length!==0){
                setMovieUrl(responce.data.results[0])
            }else{
                alert('Trailor not available')
            }
        })
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
         {
            movies.map((obj,index)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smaller_poster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt='Cards'/>

            )
         }

      </div>
      {movieUrl && <YouTube videoId={movieUrl.key} opts={opts}/>}
      
    </div>
  )
}
 
export default RowPost
