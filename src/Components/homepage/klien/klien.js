import React from "react";

// CSS
import './klien.css'

const Klien = () => {

    return (
        <div className="klien">
            <div className="klien-container">
                <p className="section-title">Klien Kita</p>

                <div id="klien" className="carousel slide" data-ride="carousel">

                    <div className="carousel-item active">
                        <div className="row text-center mr-auto ml-auto">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/al-bayan.png"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/bazma-pertamina.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/BIGBogor.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/gaya-motor.svg"})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row text-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/gojek.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/ipb.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/kemnaker.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/transmart.svg"})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="row text-center">
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/bps-sumbar.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/pt-kai.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/pln.svg"})`}}></div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 col-lg-3 card-center card-size">
                                <div className="mb-3">                    
                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/client/sucofindo.svg"})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );        
}

export default Klien;