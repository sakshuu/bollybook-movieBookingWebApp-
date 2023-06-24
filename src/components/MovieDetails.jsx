import React from 'react'
import  "./../assets/css/details.css";
import film from "./../assets/images/film.png";
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
    const naviagte = useNavigate()
    const myStyle={
        backgroundImage: 
        `url(${film})`,
        height:'88vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
  return <>
   <div style={myStyle} className='main'>
<div className='container middle'>
<div className='row moviedetails'>

    <div className='left-side col-6'>
    <div className='card img-card'   style={{width: "16rem"}} onClick={e => naviagte("/trailer")} >
<img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg" />
<button class="centered btn btn-sm btn-outline-dark" ><i class="bi bi-play-fill"></i>Triller</button>
    <p class="cinemas-footer">In cinemas</p>
</div> 
    </div>

    <div className='right-side col-6'>
        <h2 className='file-name'>Tu Jhoothi Main Makkaar</h2>
        <div className='d-flex gap-3'>

        <p className='language-d'>2D</p>
        <p className='language'>
Hindi, Marathi, English
        </p>
        </div>
        <ul className='bullet'>
            <li>2h 39min</li>
            <li>Comdey, Romantic</li>
            <li>8 Mar, 2023</li>
            <li>about movie Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
        </ul>
<button type="button" class="tickets-btn btn btn-lg btn-danger" onClick={e => naviagte("/book-tickets")}>Book Tickets</button>
    </div>

</div>
</div>

      </div>
  </>
}

export default MovieDetails