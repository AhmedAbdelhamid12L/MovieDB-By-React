import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { NavLink } from 'react-router-dom';
import notFoundImage from '../../images/244649966_4232205663544220_8405245313951318868_n.jpg'

export function Movies() {
  let imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  let [now_playing , setnow_playing] = useState([]);
  let [popular , setpopular] = useState([]);
  let [top_rated , settop_rated] = useState([]);
  let [upcoming , setupcoming] = useState([]);
  async function getMoviesItems(mediaType , callback)
  {
    let {data} = await axios(`https://api.themoviedb.org/3/movie/${mediaType}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI`);
    // console.log(data);
    callback(data.results.slice(0,10));
  }
  useEffect(()=> 
  {
    getMoviesItems(`now_playing` , setnow_playing );
    getMoviesItems(`popular` , setpopular );
    getMoviesItems(`top_rated` , settop_rated );
    getMoviesItems(`upcoming` , setupcoming );
  }, [])
  return (
    <div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          <div className="badr w-25"></div>
          <h2 className='fw-light'>Now Playing <br /> Movies <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch movies by days </p>
          <div className="badr"></div>
        </div>
        {now_playing.map((movie , index)=><> 
        <div className='col-md-2 my-2' key={index}>
        <div className='position-relative movie-details'>
          {movie.poster_path?<img className='w-100' src={imageBaseUrl+movie.poster_path} alt={movie.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <NavLink to={'/movies/' + movie.id}>
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
          <h2 className='fw-light'>Popular <br /> Movies <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch movies by days </p>
          <div className="badr"></div>
        </div>
        {popular.map((movie , index)=><> 
        <div className='col-md-2 my-2' key={index}>
        <div className='position-relative movie-details'>
          {movie.poster_path?<img className='w-100' src={imageBaseUrl+movie.poster_path} alt={movie.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <NavLink to={'/movies/' + movie.id}>
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
          <h2 className='fw-light'>Top Rated <br /> Movies <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch movies by days </p>
          <div className="badr"></div>
        </div>
        {top_rated.map((movie , index)=><> 
        <div className='col-md-2 my-2' key={index}>
        <div className='position-relative movie-details'>
          {movie.poster_path?<img className='w-100' src={imageBaseUrl+movie.poster_path} alt={movie.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <NavLink to={'/movies/' + movie.id}>
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
          <h2 className='fw-light'>Upcoming <br /> Movies <br /> To Watch Now</h2>
          <p className='text-muted my-3'>Most watch movies by days </p>
          <div className="badr"></div>
        </div>
        {upcoming.map((movie , index)=><> 
        <div className='col-md-2 my-2' key={index}>
        <div className='position-relative movie-details'>
          {movie.poster_path?<img className='w-100' src={imageBaseUrl+movie.poster_path} alt={movie.title} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
          <NavLink to={'/movies/' + movie.id}>
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
    </div>
  )
}

export async function getMoviesDetails(id)
{
  let response = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1HUBTbEEbza_cbq0onB8g6ZkK0xau9NPUHjQjoYDgdd_6NnCJudZW0KNI&language=en-US`);
  // console.log(data);
  return response;
}
