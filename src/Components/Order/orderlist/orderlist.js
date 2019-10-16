import React, {Component} from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

// Component
import './orderlist.css';

class OrderList extends Component {

    state = {
        activeItem: "1"
    };

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
            activeItem: tab
            });
        }
    };

    change(data){
        console.log("Check ID : ", data);
    }

    render(){
        return (
            <div className="order-list">
                <h2 className="section-title">Order Status</h2>
                <div className="card">
                    <div className="card-body">
                        <MDBContainer>
                            <MDBNav className="nav-tabs mt-2">
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
                                        Fresh
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
                                        Penyediaan Barang
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
                                        Pemotongan Bahan
                                    </MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
                                        Penyablonan
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "5"} onClick={this.toggle("5")} role="tab" >
                                        Penjahitan
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="#" active={this.state.activeItem === "6"} onClick={this.toggle("6")} role="tab" >
                                        Pemaketan dan Pengiriman
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNav>
                
                            <MDBTabContent activeItem={this.state.activeItem} >
                                <MDBTabPane tabId="1" role="tabpanel">
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
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <div className="cart-wrapper card mt-3">
                                        <table>
                                            <tr>
                                                <th>No.</th>
                                                <th>Gambar</th>
                                                <th>Nama Pesanan</th>
                                                <th>Tanggal Penyediaan</th>
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
                                                <td><b>8</b></td>
                                                <td className="status">Penyediaan Bahan</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                                </td>
                                                <td>Blade of Armor</td>
                                                <td>30 April 2019</td>
                                                <td>12</td>
                                                <td><b>4</b></td>
                                                <td className="status">Penyediaan Bahan</td>
                                            </tr>
                                        </table>
                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel">
                                    <div className="cart-wrapper card mt-3">
                                        <table>
                                            <tr>
                                                <th>No.</th>
                                                <th>Gambar</th>
                                                <th>Nama Pesanan</th>
                                                <th>Tanggal Pemotongan</th>
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
                                                <td><b>12</b></td>
                                                <td className="status">Pemotongan Bahan</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                                </td>
                                                <td>Blade of Armor</td>
                                                <td>30 April 2019</td>
                                                <td>12</td>
                                                <td><b>6</b></td>
                                                <td className="status">Pemotongan Bahan</td>
                                            </tr>
                                        </table>
                                    </div>
                                </MDBTabPane>
                                
                                <MDBTabPane tabId="4" role="tabpanel">
                                    <div className="cart-wrapper card mt-3">
                                        <table>
                                            <tr>
                                                <th>No.</th>
                                                <th>Gambar</th>
                                                <th>Nama Pesanan</th>
                                                <th>Tanggal Penyablonan</th>
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
                                                <td><b>9</b></td>
                                                <td className="status">Penyablonan</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                                </td>
                                                <td>Blade of Armor</td>
                                                <td>30 April 2019</td>
                                                <td>12</td>
                                                <td><b>3</b></td>
                                                <td className="status">Penyablonan</td>
                                            </tr>
                                        </table>
                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId="5" role="tabpanel">
                                    <div className="cart-wrapper card mt-3">
                                        <table>
                                            <tr>
                                                <th>No.</th>
                                                <th>Gambar</th>
                                                <th>Nama Pesanan</th>
                                                <th>Tanggal Penjahitan</th>
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
                                                <td><b>8</b></td>
                                                <td className="status">Penjahitan</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="img-size" style={{ backgroundImage: `url(${"/assets/portfolio/portfolio-2.jpg"})`}}></div>
                                                </td>
                                                <td>Blade of Armor</td>
                                                <td>30 April 2019</td>
                                                <td>12</td>
                                                <td><b>2</b></td>
                                                <td className="status">Penjahitan</td>
                                            </tr>
                                        </table>
                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId="6" role="tabpanel">
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
                                </MDBTabPane>
                            </MDBTabContent>
                        </MDBContainer>
                    </div>
                </div>
            </div>
        );
    }
};

export default OrderList;