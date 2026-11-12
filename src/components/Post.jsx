import React from 'react'
import './Post.css'


const Post = () => {
  return (
    <>
      <div className="container-fluid postbg ">
        <div className="container ">

          <div className="row align-items-center g-5 text-white">

            <div className="col-lg-6 col-md-6 col-12">
              <div>
                <img src="/postImg.png" alt="AI Future" width={500}/>
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-12">
              <div className="postCon d-flex flex-column gap-3" >

                <h5>Featured Post</h5>

              <div>
                 <h2 className='headingPost'>How to make a Game look more</h2>
                 <h2 className='headingPost'>attractive with New VR & AI</h2>
                 <h2 className='headingPost'>Technology</h2>
              </div>

                <p className='postp'>
                  The future of AI will see home robots having enhanced
                  intelligence, increased capabilities, and becoming
                  more personal and possibly cute. For example, home
                  robots will overcome navigation, direction.
                </p>

                <button className="postBtn">
                  Read More
                </button>

              </div>
            </div>




          </div>

        </div>
      </div>
    </>
  )
}

export default Post