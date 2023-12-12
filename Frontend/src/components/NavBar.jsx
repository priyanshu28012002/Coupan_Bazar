// NavBarComponent
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div class="container-fluid">
   <a class="navbar-brand" href="/">
      <img src="../../public/image.png" alt="" width="20" height="24"/>
    </a>
    <a class="navbar-brand" href="/">Coupon Bazar </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>


        <li class="nav-item">
          <a class="nav-link" href="about">About</a>
        </li>


        <li class="nav-item">
          <a class="nav-link " href="/contact" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>

    </div>
    <div>

    
    </div>
  </div>
</nav>
   </>
  );
};

export default Navbar;
