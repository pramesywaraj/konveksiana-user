import React from "react";

// CSS
import './portfolio.css'

const Portfolio = () => {

    return (
        <div className="portfolio">
            <div className="portfolio-container">
                <p className="section-title">Portfolio</p>

                <div className="carousel slide" data-ride="carousel">

                    <div className="carousel-item active">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-1.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-3.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-4.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-5.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 card-center card-size">
                            <div className="mb-3">                    
                                <div className="text-center">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-6.jpg"})`}}></div>
                                </div>              
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        </div>
    );        
}

export default Portfolio;