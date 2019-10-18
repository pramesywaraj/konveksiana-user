import React, {Component} from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

// Component
import './orderlist.css';
import Fresh from './fresh/fresh';
import Stock from './stock/stock';
import Cut from './cut/cut';
import Print from './print/print';
import Sew from './sew/sew';
import Package from './package/package';

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
                                    <Fresh />
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <Stock />
                                </MDBTabPane>
                                <MDBTabPane tabId="3" role="tabpanel">
                                    <Cut />
                                </MDBTabPane>
                                
                                <MDBTabPane tabId="4" role="tabpanel">
                                    <Print />
                                </MDBTabPane>
                                <MDBTabPane tabId="5" role="tabpanel">
                                    <Sew />
                                </MDBTabPane>
                                <MDBTabPane tabId="6" role="tabpanel">
                                    <Package />
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