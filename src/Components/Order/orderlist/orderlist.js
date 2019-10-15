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
                            <MDBNav className="nav-tabs mt-5">
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
                                    <div className="cart-wrapper">
                                        <table>
                                            <tr>
                                                <th>Nomor</th>
                                                <th>Gambar</th>
                                                <th>Nama Pesanan</th>
                                                <th>Tanggal Pemesanan</th>
                                                <th>Kuantitas (pcs)</th>
                                                <th>Harga</th>
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
                                                <td>Rp 5.000</td>
                                                <td className="status">Terkirim</td>
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
                                            </tr>
                                        </table>
                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
                                    <p>
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel">
                                    <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
                                </MDBTabPane>
                                
                                <MDBTabPane tabId="4" role="tabpanel">
                                    <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
                                </MDBTabPane>
                                <MDBTabPane tabId="5" role="tabpanel">
                                    <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
                                </MDBTabPane>
                                <MDBTabPane tabId="6" role="tabpanel">
                                    <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                    </p>
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