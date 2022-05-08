import React from 'react'
import Button from './Button'
import "./style.css"

function CTA() {
    return (
        <div className='cta container-fluid mt-5'>
            <div className="row callRow py-5 text-center text-white justify-content-center">
                <div className="col-md-7 d-flex flex-column align-items-center">
                    <h1 className='mb-4'>Call us for immediate assistance with Towing services in Los Angeles, CA</h1>
                    <Button />
                </div>
            </div>
            <div className="row bg-yellow py-5 justify-content-center">
                <div className="col-md-7 d-flex flex-column align-items-center text-center">
                    <img src="/images/icons/comment.svg" className='cmnt' alt="" />
                    <h1 className='mt-4 text-white'>SEE WHAT ALL THE BUZZ IS ABOUT</h1>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <p className='ft18'>
                                    <div className="d-flex mt-5 py-2">
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas dicta nisi! Neque numquam odio quae laborum iusto aliquid alias itaque ab aliquam! Aliquam ea est harum itaque accusamus neque.
                                </p>
                            </div>
                            <div className="carousel-item">
                                <p className='ft18'>
                                    <div className="d-flex mt-5 py-2">
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas dicta nisi! Neque numquam odio quae laborum iusto aliquid alias itaque ab aliquam! Aliquam ea est harum itaque accusamus neque.
                                </p>
                            </div>
                            <div className="carousel-item">
                                <p className='ft18'>
                                    <div className="d-flex mt-5 py-2">
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                        <img src="/images/icons/star.png" className='star' alt="" />
                                    </div>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas dicta nisi! Neque numquam odio quae laborum iusto aliquid alias itaque ab aliquam! Aliquam ea est harum itaque accusamus neque.
                                </p>
                            </div>

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-light row py-5 d-flex align-items-center flex-column">
                <h1>Related Services</h1>
                <div className="col-md-8">
                <div className="row mt-3 my-4">
                    <div className="col-md-4">
                        <li>Hvac4 Repair Alturas, CA</li>
                    </div>
                    <div className="col-md-4">
                        <li>Hvac4 System Alturas, CA</li>
                    </div>
                    <div className="col-md-4">
                        <li>Hvac4 Tuneup Alturas, CA</li>
                    </div>
                </div>
                </div>
                <Button/>
            </div>
        </div>
    )
}

export default CTA