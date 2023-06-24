import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./../assets/css/Home.css"

const Trailer = () => {
    const navigate = useNavigate()
  return <>
  <> 
  {/* width="560" height="315" */}
  <div className='youTube'>
  <iframe   width="660" height="415" src="https://www.youtube.com/embed/Cx_Dtwn4ayw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <button type="button" className='back' class="btn btn-outline btn-primary" onClick={e => navigate("/details")}><i class="bi bi-arrow-return-left"> Back</i></button>
  </div>










  
  </>
  </>
}

export default Trailer