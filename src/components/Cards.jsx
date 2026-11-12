import React from 'react'
import './Cards.css'

const Cards = () => {
    return (

        <div className='cardsbg'>
            <div className=" container row row-cols-1 row-cols-md-3 g-4 x py-5 m-auto ">

                <div className="col bgcard">
                    <div className="card cardDiv h-100 gap-4">
                        <img src="/Container (1).png" className="card-img-top" alt="Logo" />
                        <div className="card-body contentCards p-0">
                            <div>
                                <h4 className="card-title">8 Rules of Travelling In Sea You</h4>
                            <h4 className="card-title">Need To Know</h4>
                            </div>
                            <p className="card-text">
                                Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs
                            </p>
                        </div>
                        <div className=" anchor p-0">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col bgcard">
                    <div className="card cardDiv h-100 gap-4">
                        <img src="/Container (2).png" className="card-img-top" alt="Logo" />
                        <div className="card-body contentCards p-0">
                            <div>
                                <h4 className="card-title">How to build strong portfolio and</h4>
                            <h4 className="card-title">get a Job in UI/UX</h4>
                            </div>
                            <p className="card-text">
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from
                            </p>
                        </div>
                        <div className=" anchor p-0">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col bgcard">
                    <div className="card cardDiv h-100 gap-4">
                        <img src="/Container (3).png" className="card-img-top" alt="Logo" />
                        <div className="card-body contentCards p-0">
                            <div>
                                <h4 className="card-title">How to Be a Professional</h4>
                            <h4 className="card-title">Footballer in 2023</h4>
                            </div>
                            <p className="card-text">
                                Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactives
                            </p>
                        </div>
                        <div className=" anchor p-0">
                            <a href="">Read more...</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Cards