import React, {Component} from 'react';

// Component
import './pesanan.css';

class Pesanan extends Component {

    cekResi = (e) =>{
        e.preventDefault();
        console.log("Cek Resi Bos");
        document.getElementsByClassName("pesanan-card")[0].style.display = "block";
    }

    render(){
        return (
            <div className="pesanan">
                <div className="container text-center">
                    <h3 className="h3-responsive">Cek Status Pesanan</h3>
                    <div>
                        <input type="text" name="resi" id="resi" placeholder="Masukkan Nomor Resi" />
                        <br/>
                        <button type="submit" onClick={this.cekResi}>Cek Status</button>
                    </div>
                    <hr className="divider" />
                    <br />

                    <div className="pesanan-card">
                        <div className="pesanan-container">
                            <div className="row text-left">
                                <div className="title col-4">
                                    <p>
                                        Nama Orderan
                                    </p>            
                                </div>
                                <div className="col-1">
                                    <p>
                                        :
                                    </p>            
                                </div>
                                <div className="goods col-7">
                                    <p>
                                        Kaos Codepanda Hitam, 60pcs
                                    </p>            
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="title col-4">
                                    <p>
                                        Keterangan
                                    </p>           
                                </div>
                                <div className="col-1">
                                    <p>
                                        :
                                    </p>            
                                </div>
                                <div className="goods col-7">
                                    <ol>
                                        <li>Penyediaan Barang</li>
                                        <li>Pemotongan Bahan</li>
                                        <li>Penyablonan</li>
                                        <li>Penjahitan</li>
                                        <li>Packaging</li>
                                        <li>Pengiriman</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row text-left">
                                <div className="title col-4">
                                    <p>
                                        Status Pengiriman
                                    </p>             
                                </div>
                                <div className="col-1">
                                    <p>
                                        :
                                    </p>            
                                </div>
                                <div className="goods col-7">
                                    <p>
                                        Terkirim JNE
                                    </p>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}

export default Pesanan;
