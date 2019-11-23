import React from 'react';

// Component
import './value.css';

function Value() {
  return (
    <div className="value">
        <div className="mask">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="section-title">&nbsp; Apa yang Membedakan Kita? &nbsp;</p>
                        <p className="section-subtitle text-center text-desktop">Konveksiana memberikan pelayanan termudah dan harga terjangkau kepada masyarakat di Indonesia dengan sistem pemesanan daring (Online)</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    {/* <i className="fas fa-users-cog"></i> */}
                                    Rp.
                                </span>        
                                <p className="card-title">Bergaransi</p>
                                <p className="card-desc">Konveksi akan memberikan garansi untuk setiap pemesanan, sehingga tidak perlu lagi takut apabila pesanan yang sampai tidak sesuai dengan spesifikasi yang telah disepakati</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <i className="fas fa-search"></i>
                                </span>        
                                <p className="card-title">Transparan</p>
                                <p className="card-desc">Setiap proses pengerjaan dapat dipantau dan proses pengiriman dapat dilacak melalui resi yang telah diberikan</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-4 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <i className="fas fa-people-carry"></i>
                                </span>        
                                <p className="card-title">Terjamin</p>
                                <p className="card-desc">Rekam jejak yang dimiliki oleh konveksiana dapat dilihat melalui rating yang diberikan maupun berbagai portfolio kerjasama yang telah dilakukan</p>
                                <p className="section-subtitle text-center text-mobile py-2">Konveksiana memberikan pelayanan termudah dan harga terjangkau kepada masyarakat di Indonesia dengan sistem pemesanan daring (Online)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Value;
