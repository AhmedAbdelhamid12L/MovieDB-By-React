import React, { useEffect , useState } from 'react'
import {getTvDetails}  from '../Tvshows/Tvshows';
import notFoundImage from '../../images/244649966_4232205663544220_8405245313951318868_n.jpg'


export default  function TvShowsDetails(props) {
  // console.log(props);
  let imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  var TvID = props.match.params.id;
  let [TvInfo,setTvInfo] = useState('');
  useEffect(()=> 
  {
    getTvDetails(TvID).then(response=>{
      setTvInfo(response.data)
    });
    setTvInfo(TvInfo);
  }, [])
  console.log(TvInfo);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 p-5">
          {TvInfo.poster_path?<img className='w-100 ' src={imageBaseUrl+TvInfo.poster_path} alt={TvInfo.name} />:<img className='w-100' src={notFoundImage} alt='Not Found' />}
        </div>
        <div className="col-md-6 p-5">
          <h1>{TvInfo.name}</h1>
          <p className="pt-5 h4">{TvInfo.overview}</p>
          <div>
            <p className="pt-5 h5 pe-5 d-inline-block">Number Of Episodes : <br /><span className="pt-2 h6">{TvInfo.number_of_episodes}</span> </p>
            <p className="pt-5 h5 ps-2 d-inline-block">Number Of Seasons : <br /><span className="pt-2 h6">{TvInfo.number_of_seasons}</span> </p>
          </div>
          <p className="pt-5 h5">Vote Average : <br /> <span className="pt-2 h6">{TvInfo.vote_average}</span></p>
          <p className="pt-5 h5">Vote Count : <br /> <span className="pt-2 h6">{TvInfo.vote_count}</span></p>
          <p className="pt-5 h5"> For More Information <a href={TvInfo.homepage}>click here</a></p>
        </div>
      </div>
    </div>
  )
}



