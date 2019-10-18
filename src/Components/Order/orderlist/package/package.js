import React, {Component} from 'react';

// Component
// import './orderlist.css';

class Package extends Component {
    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        return (
            <div className="cart-wrapper card mt-3">
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Gambar</th>
                        <th>Nama Pesanan</th>
                        <th>Tanggal Pemaketan</th>
                        <th>Kuantitas (pcs)</th>
                        <th>Estimasi waktu (Hari)</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-1.jpg"})`}}></div>
                        </td>
                        <td>Chainmail</td>
                        <td>15 Februari 2019</td>
                        <td>36</td>
                        <td><b>35</b></td>
                        <td className="status">Pemaketan</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                        </td>
                        <td>Blade of Armor</td>
                        <td>30 April 2019</td>
                        <td>12</td>
                        <td><b>15</b></td>
                        <td className="status">Pengiriman</td>
                    </tr>
                </table>
            </div>
        );
    }
};

export default Package;