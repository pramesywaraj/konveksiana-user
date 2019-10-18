import React, {Component} from 'react';

// Component
// import './orderlist.css';

class Fresh extends Component {
    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        return (
            <div>
                <a class="order-btn" href="/order">
                    <span><i className="fas fa-plus"></i>Tambahkan Pesanan</span>
                </a>
                <div className="cart-wrapper card mt-3">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Gambar</th>
                            <th>Nama Pesanan</th>
                            <th>Tanggal Pemesanan</th>
                            <th>Kuantitas (pcs)</th>
                            <th>Harga</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-1.jpg"})`}}></div>
                            </td>
                            <td>Chainmail</td>
                            <td>15 Februari 2019</td>
                            <td>36</td>
                            <td>Rp 5.000</td>
                            <td className="status">Terkirim</td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Cancel</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                            </td>
                            <td>Blade of Armor</td>
                            <td>30 April 2019</td>
                            <td>12</td>
                            <td>Rp 1.660.000</td>
                            <td className="status">Pemotongan Bahan</td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Cancel</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
};

export default Fresh;