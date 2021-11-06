import React, { useEffect , useState } from 'react'
import {getMoviesDetails}  from '../Movies/Movies';
import notFoundImage from '../../images/244649966_4232205663544220_8405245313951318868_n.jpg'


export default  function MoviesDetails(props) {
  // console.log(props);
  let imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  var movieID = props.match.params.id;
  let [movieInfo,setMovieInfo] = useState('');
  useEffect(()=> 
  {
    getMoviesDetails(movieID).then(response=>{
      setMovieInfo(response.data)
    });
    setMovieInfo(movieInfo);
  }, [])
  // console.log(movieInfo);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 p-5">
          {movieInfo.poster_path?<img className='w-100 ' src={imageBaseUrl+movieInfo.poster_path} alt={movieInfo.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
        </div>
        <div className="col-md-6 p-5">
          <h1>{movieInfo.title}</h1>
          <p className="pt-5 h4">{movieInfo.overview}</p>
          <p className="pt-5 h5">Show Date : <br /><span className="pt-2 h6">{movieInfo.release_date}</span> </p>
          <p className="pt-5 h5">Vote Average : <br /> <span className="pt-2 h6">{movieInfo.vote_average}</span></p>
          <p className="pt-5 h5">Vote Count : <br /> <span className="pt-2 h6">{movieInfo.vote_count}</span></p>
          <p className="pt-5 h5"> For More Information <a href={movieInfo.homepage}>click here</a></p>
        </div>
      </div>
    </div>
  )
}



