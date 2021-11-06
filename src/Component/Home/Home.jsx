import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom';
import notFoundImage from '../../images/244649966_4232205663544220_8405245313951318868_n.jpg'

export  function Home() {
  let imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  let [trendingMovies , setTrendingMovies] = useState([]);
  let [trendingPeople , setTrendingPeople] = useState([]);
  async function getTrendingItems(mediaType , callback)
  {
    let {data} = await axios(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    // console.log(data);
    callback(data.results.slice(0,10));
  }
  useEffect(()=> 
  {
    getTrendingItems(`movie` , setTrendingMovies );
    getTrendingItems(`person` , setTrendingPeople );
  }, [])
  return (
    <div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <div className="badr w-25"></div>
          <h2 className='fw-light'>Trending <br /> Movies <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch movies by days </p>
          <div className="badr"></div>
        </div>
        {trendingMovies.map((movie , index)=><> 
        <div className='col-md-2 my-2' key={index}>
        <div className='position-relative movie-details'>
          {movie.poster_path?<img className='w-100' src={imageBaseUrl+movie.poster_path} alt={movie.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <NavLink to={'/home/' + movie.id}>
            <div className='hidden-details pt-4'>
              <h3 className='h5 pt-5 text-center text-warning'>click here <br /> to <br /> watch details </h3>
            </div>
          </NavLink> 
        </div>
        <h2 className='h6 mt-2'>{movie.title}</h2>
        </div>
        </>
        )}
      </div>
      <hr />
      <div className='row mt-3'>
        <div className='col-md-4'>
          <div className="badr w-25"></div>
          <h2 className='fw-light'>Trending <br /> Peoples <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch Peoples by days </p>
          <div className="badr"></div>
        </div>
        {trendingPeople.map((movie , index)=> 
        <div className='col-md-2 my-2' key={index}>
          {movie.profile_path?<img className='w-100' src={imageBaseUrl+movie.profile_path} alt={movie.name} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <h2 className='h6 mt-2'>{movie.name}</h2>
        </div>
        )}
      </div>
    </div>
  )
}

export async function getHomeDetails(id)
{
  let response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US`);
  // console.log(data);
  return response;
}
