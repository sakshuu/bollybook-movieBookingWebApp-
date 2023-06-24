import React from 'react'
import Bolly from "./../assets/images/Bolly.png";
import "./../assets/css/Home.css"

const MyNavbar = () => {
  return (<>
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img src={Bolly}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">


        <a class="nav-link active">


  <div class="search">
  <i class="bi bi-search"></i>
    <input type="text" class="form-control" placeholder="Have a question? Ask Now"/>
  </div>

          </a>


          <a class="nav-link active">
{/* Choose city */}
<div>
    <button type="button" class="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Choose city <i class="bi bi-caret-down-fill"></i>
    </button>
    <div class="modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
          </a>

          <a class="nav-link active">
{/* sign Up */}
{/* <div> */}
<button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#signUpModal">
Sign in
</button>

<div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="exampleModalSignUp" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalSignUp">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container">
            <div class="row">
              <div class="col-sm-6 offset-sm-3">
                <div class="card">
                  <div class="card-header">Login</div>
                  <div class="card-body">
                    <div>
                      <label for="email" class="form-label">First Email</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please choose a username.</div>
                    </div>
                    <div class="mt-2">
                      <label for="password" class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter Your Password"
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please choose a username.</div>
                    </div>
                    <button type="button" class="btn btn-primary w-100 mt-3">
                      Login
                    </button>
                    <p class="text-center mt-3">
                      Dont Have Account? <a href="#">Create Account</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
    {/* </div> */}

          </a>
          
      </div>
    </div>
    <div>





    </div>
  </div>
</nav>
  </>

  )

}

export default MyNavbar