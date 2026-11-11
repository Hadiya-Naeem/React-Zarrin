import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="container-fluid  text-white py-5">
  <div className="container">
    <div className="">

      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <img src="./public/Logo.png" alt="" />
        <div className="anchor d-flex gap-5">
            <a href="">Home</a>
            <a href="">Blog</a>
            <a href="">About</a>
            <a href="">Contact us</a>
        </div>
      </div>

     

      

    </div>

     <hr className="border-dark opacity-100" />

    <p className="text-center mb-0 text-dark">
      © 2026 My Website. All Rights Reserved.
    </p>
  </div>
</footer>
  )
}

export default Footer