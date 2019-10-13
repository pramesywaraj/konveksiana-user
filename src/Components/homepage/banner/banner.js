import React from 'react';

// Component
import './banner.css';

function Banner() {
  return (
    <div className="banner">
        <div className="row">
            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <a href="#!">Bergaransi</a>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <a href="#!">Transparan</a>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <a href="#!">Terjamin</a>
            </div>
        </div>
    </div>
  );
}

export default Banner;
