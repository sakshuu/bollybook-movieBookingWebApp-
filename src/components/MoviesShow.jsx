import React from 'react'
import { Link } from 'react-router-dom'
import "./../assets/css/Home.css"


const MoviesShow = () => {
  return <>
  
  <div class="row">
    <Link to="/details" className='dark-link'>

    <div class="col-3 poster">

  <div class="card adjust">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg" class="card-img-top" className='adjust' alt="..."/>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  
        </div>
        </Link>




<div className="pages">

      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>
</div>
  </>
}

export default MoviesShow