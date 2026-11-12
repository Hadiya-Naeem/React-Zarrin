import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="container-fluid herobg mb-5">
        <div className="container ">

          <div className="row align-items-center text-white">

            
            <div className="col-lg-6 col-md-6 col-12">
              <div className="image  d-flex flex-column gap-3">

                <h5>Featured Post</h5>

                <div>
                  <h1 className='heading'>How AI will</h1>
                <h1 className='heading'>Change the Future</h1>
                </div>

                <p>
                  The future of AI will see home robots having enhanced
                  intelligence, increased capabilities, and becoming
                  more personal and possibly cute. For example, home
                  robots will overcome navigation, direction.
                </p>

                <button className="heroBtn">
                  Read More
                </button>

              </div>
            </div>

          
            <div className="col-lg-6 col-md-6 col-12">
              <div className="content ">
                <img src="/Container.png" alt="AI Future" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Hero