import React from 'react';

// Component
import './about.css';

function About() {
  return (
    <div className="about">
        <div className="mask">
            <div className="container">

                <div className="row">
                    <div className="col">
                        <div className="img-size-logo" style={{ backgroundImage: `url(${"/logo-konveksiana-square.svg"})`}}></div>
                        <p className="section-title">&nbsp; Konveksiana &nbsp;</p>
                        <p className="section-subtitle text-center">Merupakan sebuah perusahaan start-up yang berdiri pada tahun 2019 dan bergerak di bidang jasa konveksi (pembuatan pakaian).</p>
                        <br/>
                        <p className="section-subtitle text-center">Kami memiliki tiga pilar yang diterapkan dalam proses:</p>
                    </div>
                </div>

                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 py-1">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <div className="img-size" style={{ backgroundImage: `url(${"/logo-simplicity.svg"})`}}></div>
                                <p className="card-title">Simplicity</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-1">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <div className="img-size" style={{ backgroundImage: `url(${"/logo-efficiency.svg"})`}}></div>
                                <p className="card-title">Efficiency</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-1">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <div className="img-size" style={{ backgroundImage: `url(${"/logo-quality.svg"})`}}></div>
                                <p className="card-title">Quality</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default About;
