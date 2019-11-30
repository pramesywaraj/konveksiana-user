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

                <div className="desktop">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">Siapkan Desain Kamu</p>
                                    <p className="card-desc">Siapkan desain pakaian yang kamu inginkan dalam format PNG high Definition. Siapkan juga file Vector-nya berformat CDR ya!</p>

                                    {/* <p className="card-title-2">Belum ada desain vector-nya?</p>
                                    <p className="card-desc">Hubungi admin kami, akan kami coba buatkan.</p> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">Klik Pesan</p>
                                    <p className="card-desc">Klik pesan dipojok kanan halaman ini untuk mengisi Form Pemesanan. <br/>Lalu ikuti semua langkahnya.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">Selesai!</p>
                                    <p className="card-desc">Setelah mengikuti semua petunjuk dari form, kamu tinggal menunggu pesanan kamu jadi dan siap untuk diantar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title-2">Belum ada desain vector-nya?</p>
                                    <p className="card-desc">Hubungi admin kami, akan kami coba buatkan.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mobile">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">1. Siapkan Desain Kamu</p>
                                    <p className="card-desc">Siapkan desain pakaian yang kamu inginkan dalam format PNG high definition. Siapkan juga file vector-nya berformat CDR ya!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">2. Klik Pesan</p>
                                    <p className="card-desc">Klik pesan dipojok kanan halaman ini untuk mengisi Form Pemesanan. <br/>Lalu ikuti semua langkahnya.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title">3. Selesai!</p>
                                    <p className="card-desc">Setelah mengikuti semua petunjuk dari form, kamu tinggal menunggu pesanan kamu jadi dan siap untuk diantar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-12 col-lg-12 py-3">
                            <div className=" mb-3">                                        
                                <div className="card-body">        
                                    <p className="card-title-2">Belum ada desain vector-nya?</p>
                                    <p className="card-desc">Hubungi admin kami, akan kami coba buatkan.</p>
                                </div>
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
