import React from 'react';

// Component
import './order.css';

function Order() {
  return (
    <div className="order">
        <div className="mask">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="section-title">&nbsp; Bagaimana Cara Memesan? &nbsp;</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <p>1-A</p>
                                </span>        
                                <p className="card-title">Siapkan Desain Kamu</p>
                                <p className="card-desc">Siapkan desain pakaian yang kamu inginkan dalam format <strong>PNG high Definition</strong>. Siapkan juga file Vector-nya berformat <strong>CDR</strong> ya!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <p>1-B</p>
                                </span>        
                                <p className="card-title">Belum ada desain vector-nya? Kami buatkan!</p>
                                <p className="card-desc">Hubungi Admin!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <p>2</p>
                                </span>        
                                <p className="card-title">Klik Pesan</p>
                                <p className="card-desc">Klik pesan dipojok kanan halaman ini untuk mengisi <strong>Form Pemesanan</strong> lalu ikuti semua langkahnya</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 py-3">
                        <div className=" mb-3">                                        
                            <div className="card-body">        
                                <span className="icon">
                                    <p>3</p>
                                </span>        
                                <p className="card-title">Selesai!</p>
                                <p className="card-desc">Setelah mengikuti semua petunjuk dari form, kamu tinggal menunggu pesanan kamu jadi dan siap untuk diantar</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Order;
